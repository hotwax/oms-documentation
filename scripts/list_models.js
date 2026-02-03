import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const env = fs.existsSync('.env') ? fs.readFileSync('.env', 'utf8').split('\n').reduce((acc, line) => {
    const [key, ...value] = line.split('=');
    if (key && value.length > 0) acc[key.trim()] = value.join('=').trim();
    return acc;
}, {}) : {};

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

(async () => {
    try {
        // Unfortunately, the JS SDK doesn't have a direct listModels on genAI easily exposed in all versions 
        // without going through a different entry point or using REST.
        // But we can try a few common names.
        const models = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-8b",
            "gemini-1.5-pro",
            "gemini-2.0-flash-exp",
            "gemma-2-9b-it",
            "gemma-2-27b-it"
        ];
        console.log("Checking common model names...");
        for (const m of models) {
            try {
                const model = genAI.getGenerativeModel({ model: m });
                await model.generateContent("test");
                console.log(`✅ ${m} is available`);
            } catch (e) {
                console.log(`❌ ${m}: ${e.message}`);
            }
        }
    } catch (error) {
        console.error(error);
    }
})();
