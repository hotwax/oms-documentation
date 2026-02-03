import { analyzeWithGemini } from "../services/gemini.js";
import { CONFIG } from "../config/index.js";
import fs from "fs";
import path from "path";

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
${repoData.map(r => `--- ${r.repoFull} ---\n${r.readme}`).join('\n\n')}
`;

    if (CONFIG.DRY_RUN) {
        console.log(`[DRY RUN] Logging batched README request`);
        const mockSummaries = {};
        for (const { repoFull } of repoData) {
            mockSummaries[repoFull] = {
                description: `[DRY RUN PROMPT]\n${prompt}`,
                relations: "Dry run relations"
            };
        }
        return mockSummaries;
    }

    const response = await analyzeWithGemini(prompt, CONFIG.MODEL_CONFIG.ORGANIZER);
    try {
        const parsed = JSON.parse(response.replace(/```json|```/g, "").trim());
        return parsed.summaries || {};
    } catch (e) {
        console.error("Failed to parse batched README response:", e);
        const fallback = {};
        for (const { repoFull } of repoData) {
            fallback[repoFull] = { description: "Parsing failed.", relations: "Parsing failed." };
        }
        return fallback;
    }
}

export async function runOrganizer(repoMetadata, itemMetadata) {
    const organizerPrompt = `
You are a Lead Architect for HotWax Commerce. Analyze these repos and PRs to create logical clusters for a release note.

Step 1: Identify Repository Logical Names
Repository Context (Descriptions & Relations): 
${JSON.stringify(repoMetadata, null, 2)}

Step 2: Organize PRs into Clusters
- Group items related across repos into cohesive features.
- Filter out "Noise" (version bumps, chores).
- **Specificity Rule**: Categorize items based on their most specific impact. For example, if an update improves a general utility (e.g., "PDF Generation") but is a critical component for a major feature launch (e.g., "Digital Invoicing"), it MUST be clustered with the specific feature.

Item Metadata (Full Context):
${JSON.stringify(itemMetadata, null, 2)}

Output ONLY a JSON object in this format:
{
  "repoLogicalNames": { "owner/repo": "Logical Name" },
  "clusters": [ { "name": "Cluster Name", "reason": "...", "itemIds": ["id", ...] } ],
  "noiseItemIds": ["id", ...]
}
`;

    const response = await analyzeWithGemini(organizerPrompt, CONFIG.MODEL_CONFIG.ORGANIZER);
    return JSON.parse(response.replace(/```json|```/g, "").trim());
}
