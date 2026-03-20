import fs from "fs";
import path from "path";
import { CONFIG } from "../config/index.js";

export function getSyncStatePath() {
    return CONFIG.SYNC_STATE_PATH;
}

export function loadSyncState() {
    const filePath = getSyncStatePath();
    if (!fs.existsSync(filePath)) {
        return { months: {} };
    }

    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function saveSyncState(state) {
    const filePath = getSyncStatePath();
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(state, null, 2) + "\n");
}

export function seedSyncStateForManifest(state, manifest, sourceCommit = null) {
    if (!state.months) state.months = {};
    if (!state.months[manifest.month]) {
        state.months[manifest.month] = { items: {} };
    }

    const monthState = state.months[manifest.month];
    if (!monthState.items) monthState.items = {};

    for (const item of manifest.items) {
        const existing = monthState.items[item.key];
        const nextStatus = existing && existing.status === "published" && existing.contentHash === item.contentHash
            ? "published"
            : "pending";

        monthState.items[item.key] = {
            filePath: item.filePath,
            contentType: item.contentType,
            slug: item.slug,
            contentHash: item.contentHash,
            status: nextStatus,
            hubspotPostId: existing?.hubspotPostId || null,
            hubspotUrl: existing?.hubspotUrl || null,
            lastAttemptAt: existing?.lastAttemptAt || null,
            publishedAt: nextStatus === "published" ? existing?.publishedAt || null : null,
            error: null,
            sourceCommit: sourceCommit || existing?.sourceCommit || null
        };
    }

    return state;
}

export function getMonthState(state, month) {
    return state.months?.[month]?.items || {};
}

export function updateSyncStateItem(state, month, key, updates) {
    if (!state.months?.[month]?.items?.[key]) {
        throw new Error(`No sync state entry found for ${month} ${key}`);
    }

    state.months[month].items[key] = {
        ...state.months[month].items[key],
        ...updates
    };

    return state.months[month].items[key];
}
