import { GoogleGenerativeAI } from "@google/generative-ai";
import { delay } from "../utils/index.js";
import { CONFIG } from "../config/index.js";
import fs from "fs";
import path from "path";

const genAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY);

function calculateCost(modelName, usage) {
    if (!usage) return 0;
    const modelKey = modelName.replace("models/", "");
    const pricing = CONFIG.PRICING[modelKey] || CONFIG.PRICING["gemini-1.5-flash"];
    
    const inputTokens = usage.promptTokenCount || 0;
    const outputTokens = usage.candidatesTokenCount || (usage.totalTokenCount ? usage.totalTokenCount - inputTokens : 0);
    
    const inputCost = (inputTokens / 1_000_000) * pricing.input;
    const outputCost = (outputTokens / 1_000_000) * pricing.output;
    return inputCost + outputCost;
}

export async function analyzeWithGemini(prompt, models = CONFIG.DEFAULT_MODELS, retries = 5) {
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

                const response = result.response;
                const usage = response.usageMetadata;
                if (usage) {
                    const inputTokens = usage.promptTokenCount || 0;
                    const outputTokens = usage.candidatesTokenCount || (usage.totalTokenCount ? usage.totalTokenCount - inputTokens : 0);
                    const cost = calculateCost(fullModelName, usage);
                    console.log(`[COST] ${fullModelName} | Tokens: ${inputTokens} in, ${outputTokens} out | Est. Cost: $${cost.toFixed(6)}`);
                }

                return response.text();
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
