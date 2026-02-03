import path from "path";

export const CONFIG = {
    SOURCE_REPOS: process.env.SOURCE_REPOS,
    MONTH: process.env.MONTH, // Format: YYYY-MM (e.g., 2026-01)
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    PRODUCTION: process.env.PRODUCTION === 'true',
    DRY_RUN: process.env.PRODUCTION !== 'true',
    REPO_CONTEXT_PATH: path.join("data", process.env.PRODUCTION === 'true' ? "repo-context.md" : "test/repo-context.md"),
    STORAGE_DIR: path.join("data", "raw"),
    DEFAULT_MODELS: ["gemma-3-27b-it", "gemma-3-4b-it", "gemma-3-1b-it"],
    MODEL_CONFIG: {
        ORGANIZER: ["gemma-3-27b-it"],
        SUMMARIZER: ["gemma-3-27b-it"],
        SYNTHESIZER: ["gemma-3-27b-it"]
    }
};

if (!CONFIG.SOURCE_REPOS || !CONFIG.GITHUB_TOKEN || !CONFIG.GEMINI_API_KEY) {
    if (!CONFIG.DRY_RUN) {
        console.error("Missing required environment variables for production");
        process.exit(1);
    }
}
