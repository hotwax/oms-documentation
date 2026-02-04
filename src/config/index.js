import path from "path";
import "dotenv/config";

export const CONFIG = {
    SOURCE_REPOS: process.env.SOURCE_REPOS,
    MONTH: process.env.MONTH, // Format: YYYY-MM (e.g., 2026-01)
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    PRODUCTION: process.env.PRODUCTION === 'true',
    DRY_RUN: process.env.DRY_RUN === 'true' || process.env.PRODUCTION !== 'true',
    REPO_CONTEXT_PATH: path.join("data", process.env.PRODUCTION === 'true' ? "repo-context.md" : "test/repo-context.md"),
    STORAGE_DIR: path.join("data", "raw"),
    DEFAULT_MODELS: ["gemma-3-27b-it", "gemma-3-4b-it", "gemma-3-1b-it"],
    MODEL_CONFIG: {
        ORGANIZER: ["gemini-3-flash-preview"],
        SUMMARIZER: ["gemma-3-27b-it"],
        SYNTHESIZER: ["gemini-3-flash-preview"]
    },
    PRICING: {
        // Cost per 1M tokens (USD) - Approximate for Gemma 3
        "gemma-3-27b-it": { input: 0.27, output: 0.27 },
        "gemma-3-4b-it": { input: 0.10, output: 0.10 },
        "gemma-3-1b-it": { input: 0.05, output: 0.05 },
        "gemini-1.5-flash": { input: 0.075, output: 0.30 },
        "gemini-1.5-pro": { input: 1.25, output: 5.00 }
    }
};

if (!CONFIG.SOURCE_REPOS || !CONFIG.GITHUB_TOKEN) {
    console.error("Missing required environment variables: SOURCE_REPOS and GITHUB_TOKEN must be set.");
    process.exit(1);
}

if (!CONFIG.GEMINI_API_KEY && !CONFIG.DRY_RUN) {
    console.error("Missing required environment variable: GEMINI_API_KEY is required for production.");
    process.exit(1);
}
