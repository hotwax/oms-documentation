import { CONFIG } from "../src/config/index.js";
import { refreshRepoContextCache } from "../src/agents/organizer.js";
import { loadRepoContextCache } from "../src/storage/index.js";

/**
 * Standalone script to cache repository README summaries.
 * This script identifies repositories from SOURCE_REPOS that are missing
 * from the local cache and fetches/summarizes their READMEs.
 */
(async () => {
    console.log("📂 Starting Repo-Context Caching...");
    
    const repos = CONFIG.SOURCE_REPOS.split(",").map(r => r.trim());
    const repoCache = loadRepoContextCache();
    
    await refreshRepoContextCache(repos, repoCache);
    
    console.log("✅ Repo-Context Caching process finished.");
})();
