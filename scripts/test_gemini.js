import { analyzeWithGemini } from "../src/services/gemini.js";
import { CONFIG } from "../src/config/index.js";

async function testModels() {
    const modelsToTest = [
        ...CONFIG.MODEL_CONFIG.ORGANIZER,
        ...CONFIG.MODEL_CONFIG.SUMMARIZER,
        ...CONFIG.MODEL_CONFIG.SYNTHESIZER
    ];
    
    // Remove duplicates
    const uniqueModels = [...new Set(modelsToTest)];

    console.log("🚀 Testing Gemini model connectivity...");
    console.log(`Models to test: ${uniqueModels.join(", ")}`);

    for (const model of uniqueModels) {
        console.log(`\n--- Testing Model: ${model} ---`);
        try {
            const response = await analyzeWithGemini("Say 'Hello, I am working!'", [model], 1);
            console.log(`✅ Success! Response: ${response.trim()}`);
        } catch (error) {
            console.error(`❌ Failed: ${error.message}`);
        }
    }
}

testModels().catch(err => {
    console.error("Fatal error during testing:", err);
    process.exit(1);
});
