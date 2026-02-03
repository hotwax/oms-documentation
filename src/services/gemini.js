import { GoogleGenerativeAI } from "@google/generative-ai";
import { delay } from "../utils/index.js";
import { CONFIG } from "../config/index.js";
import fs from "fs";
import path from "path";

const genAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY);

export async function analyzeWithGemini(prompt, models = CONFIG.DEFAULT_MODELS, retries = 5) {
    if (CONFIG.DRY_RUN) {
        const selectedModel = models[0];
        console.log(`[DRY RUN] Simulating AI call with model: ${selectedModel}`);
        
        if (prompt.includes("JSON")) {
            // For organizer and other JSON-expecting agents
            return JSON.stringify({
                repoLogicalNames: { "owner/repo": "DRY RUN LOGICAL NAME" },
                clusters: [ { 
                    name: "DRY RUN CLUSTER", 
                    reason: `[DRY RUN PROMPT]\n${prompt}`, 
                    itemIds: ["dry-run-item-id"] 
                } ],
                noiseItemIds: []
            });
        }
        return `[DRY RUN PROMPT]\n${prompt}`;
    }

    // Proactive delay before call to manage RPM
    await delay(5000);

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
            const waitTime = Math.pow(2, attempt) * 20000;
            console.warn(`    All models rate limited. Waiting ${waitTime/1000}s before attempt ${attempt + 1}...`);
            await delay(waitTime);
        } else if (!allRateLimited) {
            await delay(2000);
        }
    }
    throw new Error("All Gemini models failed after retries");
}
