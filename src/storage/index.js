import fs from "fs";
import path from "path";
import { CONFIG } from "../config/index.js";

export function loadRepoContextCache() {
    if (!fs.existsSync(CONFIG.REPO_CONTEXT_PATH)) return {};
    const content = fs.readFileSync(CONFIG.REPO_CONTEXT_PATH, "utf8");
    const summaries = {};
    const repoSections = content.split(/^## /m).slice(1);
    
    for (const section of repoSections) {
        const lines = section.split("\n");
        const repoName = lines[0].trim();
        const descriptionMatch = section.match(/### Description\n([\s\S]*?)(?:\n###|$)/);
        const relationsMatch = section.match(/### Relations\n([\s\S]*?)(?:\n###|$)/);
        
        if (repoName) {
            summaries[repoName] = {
                description: descriptionMatch ? descriptionMatch[1].trim() : "",
                relations: relationsMatch ? relationsMatch[1].trim() : ""
            };
        }
    }
    return summaries;
}

export function appendToRepoContextCache(repoFull, description, relations) {
    const entry = `\n## ${repoFull}\n\n### Description\n${description}\n\n### Relations\n${relations}\n`;
    
    if (!fs.existsSync(CONFIG.REPO_CONTEXT_PATH)) {
        const dir = path.dirname(CONFIG.REPO_CONTEXT_PATH);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(CONFIG.REPO_CONTEXT_PATH, `# Repository Context Cache\n\n<!-- REPO_SUMMARIES_START -->\n${entry}\n<!-- REPO_SUMMARIES_END -->\n`);
        return;
    }

    let content = fs.readFileSync(CONFIG.REPO_CONTEXT_PATH, "utf8");
    const startMarker = "<!-- REPO_SUMMARIES_START -->";
    const endMarker = "<!-- REPO_SUMMARIES_END -->";

    if (content.includes(startMarker) && content.includes(endMarker)) {
        const parts = content.split(endMarker);
        content = parts[0] + entry + endMarker + (parts[1] || "");
        fs.writeFileSync(CONFIG.REPO_CONTEXT_PATH, content);
    } else {
        fs.appendFileSync(CONFIG.REPO_CONTEXT_PATH, entry);
    }
}

export function getMonthStorageDir(targetMonth) {
    let dir = path.join(CONFIG.STORAGE_DIR, targetMonth);
    if (CONFIG.DRY_RUN) dir = path.join(dir, "test");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    return dir;
}

export function saveRawContext(targetMonth, itemData) {
    const storageDir = getMonthStorageDir(targetMonth);
    const filePath = path.join(storageDir, `raw_context.jsonl`);
    fs.appendFileSync(filePath, JSON.stringify(itemData) + "\n");
}

export function saveClusterMatrix(targetMonth, matrix) {
    const storageDir = getMonthStorageDir(targetMonth);
    const filePath = path.join(storageDir, `cluster_matrix.json`);
    fs.writeFileSync(filePath, JSON.stringify(matrix, null, 2));
}


export function getRawContextFilePath(targetMonth) {
    return path.join(getMonthStorageDir(targetMonth), `raw_context.jsonl`);
}

export function getRepoContextFilePath(targetMonth) {
    return CONFIG.REPO_CONTEXT_PATH;
}
