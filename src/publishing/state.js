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

    return migrateSyncState(JSON.parse(fs.readFileSync(filePath, "utf8")));
}

export function saveSyncState(state) {
    const filePath = getSyncStatePath();
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(migrateSyncState(state), null, 2) + "\n");
}

function normalizeStateItem(item, fallback = {}) {
    const publishedAt = item.lastPublishedAt || item.firstPublishedAt || item.publishedAt || null;
    return {
        filePath: item.filePath || fallback.filePath || "",
        contentType: item.contentType || fallback.contentType || "",
        slug: item.slug || fallback.slug || "",
        contentHash: item.contentHash || fallback.contentHash || "",
        status: item.status || "pending",
        hubspotPostId: item.hubspotPostId || null,
        hubspotUrl: item.hubspotUrl || null,
        lastAttemptAt: item.lastAttemptAt || null,
        firstPublishedAt: item.firstPublishedAt || publishedAt,
        lastPublishedAt: item.lastPublishedAt || publishedAt,
        lastAction: item.lastAction || (publishedAt ? "publish" : null),
        replayCount: Number.isInteger(item.replayCount) ? item.replayCount : 0,
        lastReplayReason: item.lastReplayReason || null,
        error: item.error || null,
        sourceCommit: item.sourceCommit || fallback.sourceCommit || null
    };
}

export function migrateSyncState(state) {
    const nextState = { months: {} };
    const months = state?.months || {};

    for (const [month, monthState] of Object.entries(months)) {
        const items = {};
        for (const [key, item] of Object.entries(monthState?.items || {})) {
            items[key] = normalizeStateItem(item);
        }
        nextState.months[month] = { items };
    }

    return nextState;
}

export function seedSyncStateForManifest(state, manifest, sourceCommit = null, options = {}) {
    const mode = options.mode || manifest.mode || "monthly";
    if (!state.months) state.months = {};
    if (!state.months[manifest.month]) {
        state.months[manifest.month] = { items: {} };
    }

    const monthState = state.months[manifest.month];
    if (!monthState.items) monthState.items = {};

    for (const item of manifest.items) {
        const existing = normalizeStateItem(monthState.items[item.key] || {}, {
            filePath: item.filePath,
            contentType: item.contentType,
            slug: item.slug,
            contentHash: item.contentHash,
            sourceCommit
        });
        const nextStatus = mode === "replay"
            ? "pending"
            : existing && existing.status === "published" && existing.contentHash === item.contentHash
            ? "published"
            : "pending";

        monthState.items[item.key] = {
            filePath: item.filePath,
            contentType: item.contentType,
            slug: item.slug,
            contentHash: item.contentHash,
            status: nextStatus,
            hubspotPostId: existing.hubspotPostId,
            hubspotUrl: existing.hubspotUrl,
            lastAttemptAt: existing.lastAttemptAt,
            firstPublishedAt: existing.firstPublishedAt,
            lastPublishedAt: nextStatus === "published" ? existing.lastPublishedAt : null,
            lastAction: nextStatus === "published" ? existing.lastAction || "publish" : null,
            replayCount: existing.replayCount,
            lastReplayReason: mode === "replay" ? (options.replayReason || manifest.replayReason || null) : existing.lastReplayReason,
            error: null,
            sourceCommit: sourceCommit || existing.sourceCommit || null
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
