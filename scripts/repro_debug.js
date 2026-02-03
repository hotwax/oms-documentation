import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { loadRepoContextCache } from "../src/storage/index.js";

const env = fs.existsSync('.env') ? fs.readFileSync('.env', 'utf8').split('\n').reduce((acc, line) => {
    const [key, ...value] = line.split('=');
    if (key && value.length > 0) acc[key.trim()] = value.join('=').trim();
    return acc;
}, {}) : {};

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY in .env or environment");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const MODEL_CONFIG = {
    ORGANIZER: ["gemini-1.5-flash", "gemma-3-4b-it"], // Added Flash as more stable fallback
    SUMMARIZER: ["gemini-1.5-flash", "gemma-3-4b-it"],
    SYNTHESIZER: ["gemini-1.5-flash", "gemma-3-4b-it"]
};

const DEFAULT_MODELS = ["gemini-1.5-flash", "gemma-3-4b-it"];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function analyzeWithGemini(prompt, models = DEFAULT_MODELS, retries = 5) {
    // Very defensive delay to manage tight RPM
    await delay(10000); 

    for (let attempt = 1; attempt <= retries; attempt++) {
        let allRateLimited = true;
        for (const modelName of models) {
            try {
                const fullModelName = modelName.startsWith("models/") ? modelName : `models/${modelName}`;
                console.log(`Trying Gemini model: ${fullModelName} (Attempt ${attempt}/${retries})`);
                const model = genAI.getGenerativeModel({ model: fullModelName });
                const result = await model.generateContent({
                    contents: [{ role: 'user', parts: [{ text: prompt }] }],
                });
                return result.response.text();
            } catch (e) {
                const isRateLimit = e.message.includes("429") || e.message.includes("Too Many Requests") || e.message.includes("overloaded");
                if (!isRateLimit) {
                    allRateLimited = false;
                    console.warn(`    ${modelName} failed: ${e.message}`);
                } else {
                    console.warn(`    ${modelName} hit rate limit.`);
                }
            }
        }
        
        if (allRateLimited && attempt < retries) {
            const waitTime = Math.pow(2, attempt) * 40000; // Aggressive backoff
            console.warn(`    All models rate limited. Waiting ${waitTime/1000}s before attempt ${attempt + 1}...`);
            await delay(waitTime);
        }
    }
    throw new Error("All Gemini models failed after retries");
}

(async () => {
    // ...
    const targetMonth = "2026-01";
    const rawContextPath = path.join("drafts", "test", `raw_context_${targetMonth}.jsonl`);
    const repoContextPath = path.join("drafts", `repo_context_${targetMonth}.json`);

    console.log(`🚀 Loading data for debug...`);
    
    const repoMetadata = loadRepoContextCache();
    const optimizedRepoMetadata = {};
    for (const [repo, data] of Object.entries(repoMetadata)) {
        optimizedRepoMetadata[repo] = {
            readme: "[README Truncated]", 
            owner: repo.split('/')[0],
            repo: repo.split('/')[1],
            description: data.description,
            relations: data.relations
        };
    }

    if (!fs.existsSync(rawContextPath)) {
        console.error(`Missing raw context: ${rawContextPath}`);
        process.exit(1);
    }
    const rawData = fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
    
    const itemMetadata = rawData.map(item => ({
        id: item.id,
        repo: item.repo,
        title: item.title
    }));

    console.log(`📊 Loaded ${rawData.length} items and ${Object.keys(repoMetadata).length} repos.`);

    try {
        // --- PHASE 1: ORGANIZER AGENT (BATCHED) ---
        console.log(`\n🧠 Phase 1: Organizer Agent (Relatability Pass - Batched)...`);
        
        const batchSize = 10;
        const itemBatches = [];
        for (let i = 0; i < itemMetadata.length; i += batchSize) {
            itemBatches.push(itemMetadata.slice(i, i + batchSize));
        }

        let repoLogicalNames = {};
        const consolidatedClusters = [];
        const consolidatedNoise = [];

        for (let i = 0; i < itemBatches.length; i++) {
            console.log(`  Processing Phase 1 Batch ${i + 1}/${itemBatches.length}...`);
            const batchItems = itemBatches[i];
            
            const organizerPrompt = `
You are a Lead Architect for HotWax Commerce. Analyze these repos and PRs to create logical clusters for a release note.

Step 1: Identify Repository Logical Names ${i === 0 ? '(Generate names)' : '(Use existing)'}
${i === 0 ? `Repository Data (READMEs - truncated): ${JSON.stringify(optimizedRepoMetadata, null, 2)}` : `Existing Names: ${JSON.stringify(repoLogicalNames)}`}

Step 2: Organize PRs into Clusters
- Group items related across repos into cohesive features.
- Filter out "Noise" (version bumps, chores).

Item Metadata (Batch ${i + 1}):
${JSON.stringify(batchItems, null, 2)}

Output ONLY a JSON object in this format:
{
  "repoLogicalNames": { "owner/repo": "Logical Name" },
  "clusters": [ { "name": "Cluster Name", "reason": "...", "itemIds": ["id", ...] } ],
  "noiseItemIds": ["id", ...]
}
`;

            try {
                const matrixResponse = await analyzeWithGemini(organizerPrompt, ["gemma-3-4b-it"], 5);
                const batchResult = JSON.parse(matrixResponse.replace(/```json|```/g, "").trim());
                
                if (i === 0) repoLogicalNames = batchResult.repoLogicalNames;
                
                consolidatedClusters.push(...(batchResult.clusters || []));
                consolidatedNoise.push(...(batchResult.noiseItemIds || []));
                
                console.log(`    ✅ Batch ${i + 1} complete. Clusters added: ${batchResult.clusters?.length || 0}`);
            } catch (error) {
                console.error(`    ❌ Batch ${i + 1} failed: ${error.message}`);
                if (i === 0) throw error; // Critical if first batch fails
            }
        }

        const matrix = { clusters: consolidatedClusters, noiseItemIds: consolidatedNoise, repoLogicalNames };
        console.log(`✅ Phase 1 Batched Complete. Total Clusters: ${matrix.clusters.length}, Total Noise: ${matrix.noiseItemIds.length}`);
        const rawDataMap = new Map(rawData.map(d => [d.id, d]));

        // --- PHASE 2: CLUSTER SUMMARIZER ---
        console.log(`\n✨ Phase 2: Cluster Summarizer Agent...`);
        const clusterSummaries = [];

        for (const cluster of matrix.clusters) {
            console.log(`  Summarizing Cluster: ${cluster.name}...`);
            
            const clusterItems = cluster.itemIds.map(id => rawDataMap.get(id)).filter(Boolean);
            if (clusterItems.length === 0) {
                console.warn(`    No data found for items in cluster: ${cluster.name}`);
                continue;
            }

            const clusterPrompt = `
Summarize this cluster of updates into a cohesive release note entry.
Follow the structure: Problem, Solution, Impact.

Style Guide Snippet:
- Simpler is better.
- Active voice.
- Be granular but concise (3-4 sentences total).

Cluster Description: ${cluster.reason}
Raw Items for this Cluster:
${JSON.stringify(clusterItems, null, 2)}

Output JUST the summary text.
`;

            const summaryText = await analyzeWithGemini(clusterPrompt, MODEL_CONFIG.SUMMARIZER);
            clusterSummaries.push({
                name: cluster.name,
                summary: summaryText
            });
            console.log(`    ✅ Summary for ${cluster.name} generated.`);
        }
        
        console.log(`\n🎉 Debug run complete! Total summaries: ${clusterSummaries.length}`);

    } catch (error) {
        console.error(`❌ Error during debug run: ${error.message}`);
    }
})();
