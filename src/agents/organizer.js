import { analyzeWithGemini } from "../services/gemini.js";
import { CONFIG } from "../config/index.js";
import fs from "fs";
import path from "path";
import { saveAgentPrompt } from "../storage/index.js";

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

export async function fetchRepoReadme(owner, repo) {
    const readmeUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`;
    try {
        const response = await fetch(readmeUrl);
        if (response.ok) return await response.text();
        
        const mainUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`;
        const mainResponse = await fetch(mainUrl);
        if (mainResponse.ok) return await mainResponse.text();
    } catch (e) {
        console.warn(`Could not fetch README for ${owner}/${repo}`);
    }
    return "";
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
- **CRITICAL MERGING RULE**: Group items by high-level business process. If multiple items or clusters refer to the same business entity (e.g., "Transfer Orders"), they MUST be merged into a single comprehensive cluster. For example: "Transfer Order Feed", "Shipment Sync for Transfer Orders", and "Transfer Order Reconciliation" MUST all be merged into one "Transfer Orders" cluster. Do NOT create separate sections for technical sub-steps.

- **Specificity Rule**: While grouping by theme, ensure that general utility updates are pulled into the specific feature they support. For example, a "PDF Generation" fix that was made specifically for "Digital Invoicing" should be clustered with "Digital Invoicing".
- **Naming Rule**: Give clusters descriptive, utility-focused names. Use ONLY simple nouns (e.g., "Inventory Synchronization"). 
- **STRICT PROHIBITION**: DO NOT use words like "Enhanced", "Streamlined", "Improvements", "Enhancements", "Updates", "Fixes", "Handling", or "Logic" in cluster names.
 
Item Metadata (Full Context):
Analyze the title, body, and linked issues of each item to understand its business impact and relationship to other items.
${JSON.stringify(itemMetadata, null, 2)}

Output ONLY a JSON object in this format:
{
  "repoLogicalNames": { "owner/repo": "Logical Name" },
  "clusters": [ { "name": "Cluster Name", "reason": "...", "itemIds": ["id", ...] } ],
  "noiseItemIds": ["id", ...]
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
