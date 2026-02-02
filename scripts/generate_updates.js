import { Octokit } from "@octokit/rest";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

const SOURCE_REPOS = process.env.SOURCE_REPOS;
const MONTH = process.env.MONTH; // Format: YYYY-MM (e.g., 2026-01)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const PRODUCTION = process.env.PRODUCTION === 'true';
const DRY_RUN = !PRODUCTION;

if (DRY_RUN) {
    console.log("🛠️  DRY RUN MODE ENABLED: (Safety First) Gemini API calls are disabled. Set PRODUCTION=true in .env to enable.");
} else {
    console.log("🚀 PRODUCTION MODE ENABLED: Calling Gemini API...");
}

if (!SOURCE_REPOS || !GITHUB_TOKEN || !GEMINI_API_KEY) {
    console.error("Missing required environment variables");
    process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const repos = SOURCE_REPOS.split(",").map(r => r.trim());

// ✅ Tiered Model Configuration
const MODEL_CONFIG = {
    ORGANIZER: ["gemma-3-27b-it"], // High context, fast
    SUMMARIZER: ["gemma-3-27b-it"],  // Efficient, repetitive
    SYNTHESIZER: ["gemma-3-27b-it"] // Using Gemma 3 as requested
};

const DEFAULT_MODELS = ["gemma-3-27b-it"];

// Get target month (defaults to previous month if not specified)
function getTargetMonth() {
    if (MONTH) return MONTH;

    const now = new Date();
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const year = prevMonth.getFullYear();
    const month = String(prevMonth.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

// Check if a release was published in the target month
function isInTargetMonth(publishedAt, targetMonth) {
    const releaseDate = new Date(publishedAt);
    const year = releaseDate.getFullYear();
    const month = String(releaseDate.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}` === targetMonth;
}

// Fetch all releases from a repository published in the target month
async function fetchMonthlyReleases(owner, repo, targetMonth) {
    const { data } = await octokit.repos.listReleases({ owner, repo, per_page: 100 });
    return data.filter(release => isInTargetMonth(release.published_at, targetMonth));
}

// Extract PR references from text (handles both #123 and full GitHub URLs)
function extractPRRefsWithLinks(text, owner, repo) {
    const prRefs = [];
    const seen = new Set();

    // Pattern 1: #123
    const shorthandRegex = /#(\d+)/g;
    for (const match of text.matchAll(shorthandRegex)) {
        const num = match[1];
        if (!seen.has(num)) {
            prRefs.push({ number: num, url: `https://github.com/${owner}/${repo}/pull/${num}`, text: `#${num}` });
            seen.add(num);
        }
    }

    // Pattern 2: https://github.com/owner/repo/pull/123
    const urlRegex = new RegExp(`https:\\/\\/github\\.com\\/${owner}\\/${repo}\\/pull\\/(\\d+)`, 'g');
    for (const match of text.matchAll(urlRegex)) {
        const num = match[1];
        if (!seen.has(num)) {
            prRefs.push({ number: num, url: match[0], text: `#${num}` });
            seen.add(num);
        }
    }

    return prRefs;
}

// Fetch context for a reference (tries PR first, then Issue)
async function fetchContext(owner, repo, refNumber) {
    try {
        // Try to fetch as a Pull Request first
        const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: refNumber });
        const { data: files } = await octokit.pulls.listFiles({ owner, repo, pull_number: refNumber, per_page: 30 });
        
        let body = pr.body || "";
        
        // If PR description is empty, try to get summary from Gemini bot comment
        if (!body.trim()) {
            const botSummary = await fetchBotSummary(owner, repo, refNumber);
            if (botSummary) {
                body = `(Bot-generated summary)\n${botSummary}`;
            }
        }

        return {
            type: 'PR',
            number: refNumber,
            body: body,
            labels: pr.labels.map(l => l.name),
            files: files.map(f => f.filename),
            title: pr.title
        };
    } catch (e) {
        // If not a PR, try as an Issue
        try {
            const { data: issue } = await octokit.issues.get({ owner, repo, issue_number: refNumber });
            return {
                type: 'Issue',
                number: refNumber,
                body: issue.body || "",
                labels: issue.labels.map(l => typeof l === 'string' ? l : l.name),
                files: [],
                title: issue.title
            };
        } catch (issueError) {
            console.warn(`    No PR or Issue found for #${refNumber} in ${owner}/${repo}`);
            return null;
        }
    }
}

// Fetch raw README content from repository
async function fetchRepoReadme(owner, repo) {
    try {
        console.log(`  Fetching README for ${owner}/${repo}...`);
        const { data: readme } = await octokit.repos.getReadme({ owner, repo });
        return Buffer.from(readme.content, 'base64').toString('utf8').substring(0, 3000);
    } catch (e) {
        return "";
    }
}

// Fetch Gemini bot summary from comments if it exists
async function fetchBotSummary(owner, repo, issueNumber) {
    try {
        const { data: comments } = await octokit.issues.listComments({
            owner,
            repo,
            issue_number: issueNumber,
            per_page: 20
        });

        const botComment = comments.find(c => 
            c.user && (c.user.login === 'gemini-code-assist[bot]' || c.user.login.includes('gemini-code-assist'))
        );

        if (botComment && botComment.body) {
            const summaryMatch = botComment.body.match(/## Summary of Changes\n\n([\s\S]*?)(?:\n\n###|\n\n<details>)/i);
            let summary = summaryMatch ? summaryMatch[1].trim() : botComment.body.trim();
            summary = summary.replace(/^Hello @\w+, I'm Gemini Code Assist[^!]+! I'm currently reviewing this pull request and will post my feedback shortly\. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n+/i, "");
            summary = summary.replace(/\[\^\d+\]:[\s\S]*$/, "").trim();
            return summary;
        }
    } catch (e) {
        console.warn(`    Failed to fetch bot summary for #${issueNumber}: ${e.message}`);
    }
    return null;
}

// Extract linked issue numbers from text (Closes #123, Related Issue: #456, etc.)
function extractLinkedIssueNumbers(text) {
    if (!text) return [];
    // Expanded regex to include 'Related Issue', 'Issue', 'Ref', etc.
    const regex = /(?:close|closes|closed|fix|fixes|fixed|resolve|resolves|resolved|related issue|issue|ref|leads to)\s*[:\s]*#(\d+)/gi;
    const matches = text.matchAll(regex);
    return [...new Set([...matches].map(m => m[1]))];
}

const sleep = (ms) => new Uint8Array(new SharedArrayBuffer(4)); // fallback for basic delay if needed
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function analyzeWithGemini(prompt, models = DEFAULT_MODELS, retries = 3) {
    if (DRY_RUN) {
        const selectedModel = models[0];
        console.log(`[DRY RUN] Simulating AI call with model: ${selectedModel}`);
        return `Dry run response for model ${selectedModel}`;
    }

    for (let attempt = 1; attempt <= retries; attempt++) {
        let allRateLimited = true;
        for (const modelName of models) {
            try {
                console.log(`Trying Gemini model: ${modelName} (Attempt ${attempt}/${retries})`);
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent(prompt);
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
            const waitTime = Math.pow(2, attempt) * 15000; // 30s, 60s...
            console.warn(`    All models rate limited. Waiting ${waitTime/1000}s before attempt ${attempt + 1}...`);
            await delay(waitTime);
        } else if (!allRateLimited) {
            // If some failed with non-rate-limit errors, we still continue to next attempt if needed
            // but usually a non-429 error might be permanent (like 400).
            // For now, we'll just wait a bit and retry.
            await delay(5000);
        }
    }
    throw new Error("All Gemini models failed after retries");
}

(async () => {
    const targetMonth = getTargetMonth();
    console.log(`📅 Target Month: ${targetMonth}`);
    console.log(`🚀 Starting Stage 0: Discovery & Streaming Fetch...`);

    const rawContextPath = path.join("drafts", `raw_context_${targetMonth}.jsonl`);
    const repoContextPath = path.join("drafts", `repo_context_${targetMonth}.json`);
    fs.mkdirSync("drafts", { recursive: true });
    
    // Clear existing raw context
    if (fs.existsSync(rawContextPath)) fs.unlinkSync(rawContextPath);
    const rawContextStream = fs.createWriteStream(rawContextPath);

    const repoMetadata = {};
    const itemMetadata = [];

    for (const repoFull of repos) {
        const [owner, repo] = repoFull.split("/");
        
        // 1. Discovery: Get raw README content (No AI yet)
        const readme = await fetchRepoReadme(owner, repo);
        repoMetadata[repoFull] = { readme, owner, repo };
        
        console.log(`Fetching updates from ${repoFull}...`);

        try {
            const releases = await fetchMonthlyReleases(owner, repo, targetMonth);

            for (const release of releases) {
                const prRefs = extractPRRefsWithLinks(release.body, owner, repo);
                
                for (const prRef of prRefs) {
                    console.log(`  Fetching context for #${prRef.number}...`);
                    const context = await fetchContext(owner, repo, prRef.number);
                    
                    if (context) {
                        const linkedIssueNumbers = context.type === 'PR' ? extractLinkedIssueNumbers(context.body) : [];
                        const linkedIssues = [];
                        for (const issueNum of linkedIssueNumbers) {
                            console.log(`    Fetching linked Issue #${issueNum}...`);
                            const issueDetails = await fetchContext(owner, repo, issueNum);
                            if (issueDetails) linkedIssues.push(issueDetails);
                        }
                        
                        const itemData = {
                            id: `${repoFull}#${prRef.number}`,
                            repo: repoFull,
                            type: context.type,
                            number: prRef.number,
                            title: context.title,
                            labels: context.labels,
                            body: context.body,
                            files: context.files,
                            linkedIssues,
                            releaseTag: release.tag_name
                        };

                        // 2. Metadata Storage (Small)
                        itemMetadata.push({
                            id: itemData.id,
                            repo: itemData.repo,
                            title: itemData.title,
                            labels: itemData.labels,
                            type: itemData.type,
                            linkedIssueIds: linkedIssues.map(i => i.number)
                        });

                        // 3. Raw Content Streaming (Large)
                        rawContextStream.write(JSON.stringify(itemData) + "\n");
                    }
                }
            }
        } catch (error) {
            console.error(`  Error in ${repoFull}: ${error.message}`);
        }
    }

    rawContextStream.end();
    fs.writeFileSync(repoContextPath, JSON.stringify(repoMetadata, null, 2));
    console.log(`✅ Stage 0 Complete. Raw context streamed to ${rawContextPath}`);

    // --- PHASE 1: ORGANIZER AGENT ---
    console.log(`\n🧠 Starting Phase 1: Organizer Agent (Relatability Pass)...`);
    
    const organizerPrompt = `
You are a Lead Architect for HotWax Commerce. Your task is to analyze a set of repositories and their PRs to create logical clusters for a release note.

Step 1: Identify Repository Logical Names
Based on the READMEs provided below, assign a concise logical "App/Module" name to each repository (e.g., "BOPIS App", "OMS Backend", "Shopify Integration").

Repository Data (READMEs):
${JSON.stringify(repoMetadata, null, 2)}

Step 2: Organize PRs/Issues into Clusters
Group the items provided in the metadata into logical features or themes.
- Group items related across different repositories (e.g., a backend change in OMS and a frontend change in BOPIS for the same feature).
- Filter out "Noise" items (version bumps, chores, trivial dependency updates).

Item Metadata:
${JSON.stringify(itemMetadata, null, 2)}

Output ONLY a JSON object in this format:
{
  "repoLogicalNames": {
    "owner/repo": "Logical Name"
  },
  "clusters": [
    {
      "name": "Cluster Name",
      "reason": "Why these are grouped",
      "itemIds": ["repo#number", ...]
    }
  ],
  "noiseItemIds": ["repo#number", ...]
}
`;

    const matrixResponse = await analyzeWithGemini(organizerPrompt, MODEL_CONFIG.ORGANIZER);
    const result = JSON.parse(matrixResponse.replace(/```json|```/g, "").trim());
    
    // Update repoMetadata with identified logical names
    for (const [repoId, logicalName] of Object.entries(result.repoLogicalNames)) {
        if (repoMetadata[repoId]) repoMetadata[repoId].logicalName = logicalName;
    }

    const matrix = { clusters: result.clusters, noiseItemIds: result.noiseItemIds };
    const matrixPath = path.join("drafts", `relatability_matrix_${targetMonth}.json`);
    fs.writeFileSync(matrixPath, JSON.stringify(matrix, null, 2));
    console.log(`✅ Phase 1 Complete. Matrix saved to ${matrixPath}`);

    // --- PHASE 2: CLUSTER SUMMARIZER ---
    console.log(`\n✨ Starting Phase 2: Cluster Summarizer Agent...`);
    const clusterSummaries = [];
    
    // Load raw context efficiently from disk
    const rawData = fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
    const rawDataMap = new Map(rawData.map(d => [d.id, d]));

    for (const cluster of matrix.clusters) {
        console.log(`  Summarizing Cluster: ${cluster.name}...`);
        
        const clusterItems = cluster.itemIds.map(id => rawDataMap.get(id)).filter(Boolean);
        if (clusterItems.length === 0) continue;

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
    }

    // --- PHASE 3: CONFORMITY AGENT ---
    console.log(`\n🖋️  Starting Phase 3: Conformity Agent (Synthesis)...`);
    
    let styleGuide = "";
    try { styleGuide = fs.readFileSync(".gemini/styleguide.md", "utf8"); } catch (e) {}

    const finalPrompt = `
Generate the final Monthly Release Notes for HotWax Commerce.
Month: ${targetMonth}

${styleGuide ? `Style Guide:\n${styleGuide}\n` : ""}

Summarized Clusters:
${JSON.stringify(clusterSummaries, null, 2)}

Task:
Assemble the final document. Group the clusters under logical "App/Module" headers.
Include a 2-sentence intro summarizing the month.

Structure:
# [Month Year] Release Notes
[Intro]

## [App Name]
### [Feature Name]
[Summary]
...
`;

    const finalNotes = await analyzeWithGemini(finalPrompt, MODEL_CONFIG.SYNTHESIZER);
    const outFile = path.join("drafts", `${targetMonth}.md`);
    fs.writeFileSync(outFile, finalNotes);
    console.log(`\n✓ Final release notes generated: ${outFile}`);
})();
