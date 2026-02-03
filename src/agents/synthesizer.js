import { analyzeWithGemini } from "../services/gemini.js";
import { CONFIG } from "../config/index.js";
import fs from "fs";

export async function runSynthesizer(targetMonth, clusterSummaries) {
    let styleGuide = "";
    try { 
        styleGuide = fs.readFileSync(".gemini/styleguide.md", "utf8"); 
    } catch (e) {}

    const finalPrompt = `
Generate the final Monthly Release Notes for HotWax Commerce.
Month: ${targetMonth}

Author persona: Product Manager
Reader persona: Enthusiastic Retailer

${styleGuide ? `Style Guide:\n${styleGuide}\n` : ""}

Summarized Clusters:
${JSON.stringify(clusterSummaries, null, 2)}

Task:
Assemble the final document. Group the clusters under logical "App/Module" headers.
Include a 2-sentence intro summarizing the month.

Structure Guidelines:
- **User-Facing First**: Prioritize new features, UI improvements, and business logic changes at the top.
- **System Updates at the Bottom**: Any "Technical Debt", "Code Cleanup", or backend-only changes (e.g., library migrations or internal logging updates) must be grouped under a final "System & Core Updates" section at the end of the document.
- **Tone Check**: Ensure new feature sections sound positive.

Structure:
# [Month Year] Release Notes
[Intro]

## [App Name]
### [Feature Name]
[Summary]
...

## System & Core Updates
### [Technical Update Name]
[Summary]
`;

    return await analyzeWithGemini(finalPrompt, CONFIG.MODEL_CONFIG.SYNTHESIZER);
}
