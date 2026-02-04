import { analyzeWithGemini } from "../services/gemini.js";
import { CONFIG } from "../config/index.js";
import { saveAgentPrompt } from "../storage/index.js";

export async function runSummarizer(targetMonth, cluster, clusterItems) {
    const clusterPrompt = `
You are a Product Manager at HotWax Commerce drafting a release note for a Retailer.
The reader is enthusiastic about their system and cares about system improvements and new features.

Summarize this cluster of updates into a cohesive release note entry.
Follow the structure: Problem, Solution, Impact.

Style Guide Snippet:
- Simpler is better.
- Active voice.
- Be granular but concise (3-4 sentences total).
- **Tone**: Maintain a professional, utility-focused tone. 
- **No AI Slop**: Avoid words like "enhanced", "streamlined", "seamless", or "robust".
- **No Exclamation Points**: Strictly use periods for all sentences.
- **No dev-time bugs**: Any "fixes" or "issues" found during development of a new feature should be synthesized as part of the feature's polished experience. Avoid words like "fixed", "issue", or "bug" for new features.

Cluster Description: ${cluster.reason}
Raw Items for this Cluster:
${JSON.stringify(clusterItems, null, 2)}

Output JUST the summary text.
`;

    if (CONFIG.DRY_RUN) {
        saveAgentPrompt(`summarizer_${cluster.name.replace(/\s+/g, "_")}`, targetMonth, clusterPrompt);
        return `Mock summary for cluster: ${cluster.name}. This is a cohesive release note entry summarizing the updates in this cluster.`;
    }

    return await analyzeWithGemini(clusterPrompt, CONFIG.MODEL_CONFIG.SUMMARIZER);
}
