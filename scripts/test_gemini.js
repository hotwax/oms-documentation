import { GoogleGenerativeAI } from "@google/generative-ai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function testModel(modelName) {
    try {
        const fullModelName = modelName.startsWith("models/") ? modelName : `models/${modelName}`;
        console.log(`\n🔍 Testing model: ${fullModelName}...`);
        const model = genAI.getGenerativeModel({ model: fullModelName });
        const result = await model.generateContent("Hello! Are you working? Keep it short.");
        console.log(`✅ ${fullModelName} Response: ${result.response.text().trim()}`);
        return true;
    } catch (error) {
        console.error(`❌ ${modelName} failed: ${error.message}`);
        return false;
    }
}

async function runTests() {
    console.log("🚀 Starting Gemini API validation tests...");
    
    // Testing confirmed Gemma 3 models
    const modelsToTest = [
        "gemma-3-27b-it",
        "gemma-3-12b-it",
        "gemma-3-4b-it",
        "gemma-3-1b-it"
    ];

    console.log("\n🧪 Running connectivity tests on a few models...");
    for (const model of modelsToTest) {
        await testModel(model);
    }
}

runTests();
