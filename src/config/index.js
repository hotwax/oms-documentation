import fs from "fs";
import path from "path";
import "dotenv/config";

function loadJsonConfig(relativePath) {
    const filePath = path.resolve(relativePath);
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

const publishingConfig = loadJsonConfig(path.join("config", "publishing.json"));

export const CONFIG = {
    SOURCE_REPOS: process.env.SOURCE_REPOS,
    MONTH: process.env.MONTH, // Format: YYYY-MM (e.g., 2026-01)
    ORG_GIT_API: process.env.ORG_GIT_API,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    HUBSPOT_PRIVATE_APP_TOKEN: process.env.HUBSPOT_PRIVATE_APP_TOKEN,
    PRODUCTION: process.env.PRODUCTION === 'true',
    DRY_RUN: process.env.DRY_RUN === 'true' || process.env.PRODUCTION !== 'true',
    REPO_CONTEXT_PATH: path.join("data", process.env.PRODUCTION === 'true' ? "repo-context.md" : "test/repo-context.md"),
    STORAGE_DIR: path.join("data", "raw"),
    PR_FAQS_DIR: path.join("data", "pr-faqs"),
    PUBLISHING_CONFIG_PATH: path.join("config", "publishing.json"),
    SYNC_STATE_PATH: path.join("state", "hubspot-sync-state.json"),
    DEFAULT_MODELS: ["gemma-3-27b-it", "gemma-3-4b-it", "gemma-3-1b-it"],
    MODEL_CONFIG: {
        ORGANIZER: ["gemini-3-flash-preview"],
        SUMMARIZER: ["gemma-3-27b-it"],
        SYNTHESIZER: ["gemini-3-flash-preview"],
        PRODUCT_UPDATER: ["gemini-3-flash-preview"]
    },
    PRICING: {
        // Cost per 1M tokens (USD) - Approximate for Gemma 3
        "gemma-3-27b-it": { input: 0.27, output: 0.27 },
        "gemma-3-4b-it": { input: 0.10, output: 0.10 },
        "gemma-3-1b-it": { input: 0.05, output: 0.05 },
        "gemini-1.5-flash": { input: 0.075, output: 0.30 },
        "gemini-1.5-pro": { input: 1.25, output: 5.00 }
    },
    PUBLISHING: publishingConfig
};
