import { analyzeWithGemini } from "../services/gemini.js";
import { fetchRepoReadme } from "../services/github.js";
import { CONFIG } from "../config/index.js";
import fs from "fs";
import path from "path";
import { saveAgentPrompt, appendToRepoContextCache } from "../storage/index.js";

export async function summarizeReadmesBatched(repoData) {
    if (repoData.length === 0) return {};

    const prompt = `
Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
${repoData.map(r => `--- ${r.repoFull} ---\n${r.readme}`).join("\n\n")}
`;

    const result = await analyzeWithGemini(prompt);
    
    try {
        const jsonMatch = result.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            return parsed.summaries || {};
        }
    } catch (error) {
        console.error("Error parsing batched README summaries:", error);
    }
    return {};
}

export async function refreshRepoContextCache(repos, repoCache) {
    const uncachedRepos = [];
    for (const repoFull of repos) {
        if (!repoCache[repoFull]) {
            const [owner, repo] = repoFull.split("/");
            console.log(`  Cache miss for ${repoFull}. Fetching README...`);
            const readme = await fetchRepoReadme(owner, repo);
            if (readme) {
                uncachedRepos.push({ repoFull, readme });
            }
        }
    }

    if (uncachedRepos.length > 0) {
        console.log(`  Summarizing ${uncachedRepos.length} repositories in batch...`);
        const batchedSummaries = await summarizeReadmesBatched(uncachedRepos);
        for (const { repoFull } of uncachedRepos) {
            const summary = batchedSummaries[repoFull] || { 
                description: "No description provided.", 
                relations: "No relations identified." 
            };
            repoCache[repoFull] = summary;
            appendToRepoContextCache(repoFull, summary.description, summary.relations);
        }
    }
}

export async function runOrganizer(targetMonth, repoMetadata, itemMetadata) {
    const organizerPrompt = `
You are a Lead Architect for HotWax Commerce. Analyze these repos and PRs to create logical clusters for a release note.

Step 1: Identify Repository Logical Names
Repository Context (Descriptions & Relations): 
${JSON.stringify(repoMetadata, null, 2)}

Step 2: Organize PRs into Clusters
- Group items related across repos into cohesive features.
- Filter out "Noise" (version bumps, chores).
- Clusters should represent a wholistic feature but should not mix two features within the same business processes into the same release note. For example, if an app has multiple distinct features, each feature should be in a separate cluster.
- Sometimes pull requests will feel like different features but are actaully part of one connected feature. When creating clusters, think about user roles and what they would consider a feature. For example, a feature may be rolled out related to sales orders that had some changes in the order import process and then approval flow based on that in different repositories. You need to inteligently stitch together that these are part of a journey and turn it into one release note.
- **CRITICAL MERGING RULE**: Do NOT create separate sections for technical sub-steps.
- **Specificity Rule**: While grouping by theme, ensure that general utility updates are pulled into the specific feature they support. For example, a "PDF Generation" fix that was made specifically for "Digital Invoicing" should be clustered with "Digital Invoicing".
- **Naming Rule**: Give clusters descriptive, utility-focused names. Use ONLY simple nouns (e.g., "Inventory Synchronization").
- If you feel like an github pr or issue is not descriptive enough to logically cluster it but isn't noise, then throw them into a seperate list of "Need clarification" so that a user can manually review them.
- **STRICT PROHIBITION**: DO NOT use words like "Enhanced", "Streamlined", "Improvements", "Enhancements", "Updates", "Fixes", "Handling", or "Logic" in cluster names.


Item Metadata (Full Context):
Analyze the title, body, and linked issues of each item to understand its business impact and relationship to other items.
${JSON.stringify(itemMetadata, null, 2)}

Output ONLY a JSON object in this format:
{
  "repoLogicalNames": { "owner/repo": "Logical Name" },
  "clusters": [ { "name": "Cluster Name", "reason": "...", "itemIds": ["id", ...] } ],
  "noiseItemIds": ["id", ...]
  "needClarificationItemIds": ["id", ...]
}
`;

    if (CONFIG.DRY_RUN) {
        saveAgentPrompt("organizer", targetMonth, organizerPrompt);
        
        return {
            repoLogicalNames: {},
            clusters: [
                {
                    name: "Inventory Synchronization",
                    reason: "Mock reason for Inventory Synchronization cluster.",
                    itemIds: itemMetadata.slice(0, 3).map(i => i.id)
                },
                {
                    name: "Order Management",
                    reason: "Mock reason for Order Management cluster.",
                    itemIds: itemMetadata.slice(3, 6).map(i => i.id)
                }
            ],
            noiseItemIds: []
        };
    }

    const result = await analyzeWithGemini(organizerPrompt, CONFIG.MODEL_CONFIG.ORGANIZER);
    
    const fallback = { repoLogicalNames: {}, clusters: [], noiseItemIds: [] };
    try {
        const jsonMatch = result.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return fallback;
    } catch (e) {
        console.error("Error parsing organizer result:", e);
        return fallback;
    }
}
