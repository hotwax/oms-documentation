import fs from "fs";
import path from "path";

function resolveStatePath() {
    return process.env.STATE_PATH || path.join("state", "hubspot-sync-state.json");
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function extractObjectRange(source, startIndex) {
    let depth = 0;
    let inString = false;
    let escaped = false;

    for (let index = startIndex; index < source.length; index += 1) {
        const char = source[index];
        if (inString) {
            if (escaped) {
                escaped = false;
            } else if (char === "\\") {
                escaped = true;
            } else if (char === "\"") {
                inString = false;
            }
            continue;
        }

        if (char === "\"") {
            inString = true;
            continue;
        }

        if (char === "{") depth += 1;
        if (char === "}") {
            depth -= 1;
            if (depth === 0) {
                return source.slice(startIndex, index + 1);
            }
        }
    }

    throw new Error("Unbalanced JSON object while scanning state file");
}

function getImmediateChildKeys(objectSource) {
    const keys = [];
    let depth = 0;
    let inString = false;
    let escaped = false;
    let capturingKey = false;
    let buffer = "";

    for (let index = 0; index < objectSource.length; index += 1) {
        const char = objectSource[index];

        if (inString) {
            if (escaped) {
                escaped = false;
                if (capturingKey) buffer += char;
                continue;
            }

            if (char === "\\") {
                escaped = true;
                if (capturingKey) buffer += char;
                continue;
            }

            if (char === "\"") {
                inString = false;
                if (capturingKey) {
                    const rest = objectSource.slice(index + 1).trimStart();
                    if (depth === 1 && rest.startsWith(":")) {
                        keys.push(buffer);
                    }
                    capturingKey = false;
                    buffer = "";
                }
                continue;
            }

            if (capturingKey) buffer += char;
            continue;
        }

        if (char === "\"") {
            inString = true;
            capturingKey = depth === 1;
            buffer = "";
            continue;
        }

        if (char === "{") {
            depth += 1;
            continue;
        }

        if (char === "}") {
            depth -= 1;
        }
    }

    return keys;
}

function findDuplicateKeys(objectSource) {
    const counts = new Map();
    for (const key of getImmediateChildKeys(objectSource)) {
        counts.set(key, (counts.get(key) || 0) + 1);
    }
    return [...counts.entries()].filter(([, count]) => count > 1).map(([key]) => key);
}

const statePath = resolveStatePath();
assert(fs.existsSync(statePath), `Sync state not found at ${statePath}`);
const rawState = fs.readFileSync(statePath, "utf8");
const monthsToken = "\"months\":";
const monthsIndex = rawState.indexOf(monthsToken);
assert(monthsIndex !== -1, "Sync state must contain a months object");
const monthsObjectStart = rawState.indexOf("{", monthsIndex);
const monthsObjectSource = extractObjectRange(rawState, monthsObjectStart);
const duplicateMonths = findDuplicateKeys(monthsObjectSource);
assert(duplicateMonths.length === 0, `Duplicate month keys found: ${duplicateMonths.join(", ")}`);

const state = JSON.parse(rawState);
assert(state && typeof state === "object", "Sync state must be a JSON object");
assert(state.months && typeof state.months === "object", "Sync state must contain months");

for (const [month, monthState] of Object.entries(state.months)) {
    assert(/^\d{4}-\d{2}$/.test(month), `Invalid month key ${month}`);
    assert(monthState && typeof monthState === "object", `Month ${month} must be an object`);
    assert(monthState.items && typeof monthState.items === "object", `Month ${month} must contain items`);

    const allowedStatuses = new Set(["pending", "published", "failed"]);
    const allowedActions = new Set(["publish", "replay", null]);
    const itemKeys = new Set();
    const monthToken = `"${month}":`;
    const monthIndex = rawState.indexOf(monthToken);
    assert(monthIndex !== -1, `Month ${month} must exist in raw state`);
    const monthObjectStart = rawState.indexOf("{", monthIndex);
    const monthObjectSource = extractObjectRange(rawState, monthObjectStart);
    const itemsToken = "\"items\":";
    const itemsIndex = monthObjectSource.indexOf(itemsToken);
    assert(itemsIndex !== -1, `Month ${month} must contain items in raw state`);
    const itemsObjectStart = monthObjectSource.indexOf("{", itemsIndex);
    const itemsObjectSource = extractObjectRange(monthObjectSource, itemsObjectStart);
    const duplicateItemKeys = findDuplicateKeys(itemsObjectSource);
    assert(duplicateItemKeys.length === 0, `Duplicate item keys found in ${month}: ${duplicateItemKeys.join(", ")}`);

    for (const [itemKey, item] of Object.entries(monthState.items)) {
        assert(!itemKeys.has(itemKey), `Duplicate item key ${itemKey} in month ${month}`);
        itemKeys.add(itemKey);
        assert(item && typeof item === "object", `State item ${itemKey} in ${month} must be an object`);
        for (const field of ["filePath", "contentType", "slug", "contentHash"]) {
            assert(typeof item[field] === "string" && item[field].length > 0, `State item ${itemKey} missing ${field}`);
        }
        assert(allowedStatuses.has(item.status), `State item ${itemKey} has invalid status ${item.status}`);
        assert(allowedActions.has(item.lastAction ?? null), `State item ${itemKey} has invalid lastAction ${item.lastAction}`);
        assert(fs.existsSync(item.filePath), `State item ${itemKey} points to missing file ${item.filePath}`);
        assert(!item.slug.includes("//"), `State item ${itemKey} has malformed slug ${item.slug}`);

        if (item.status === "published") {
            assert(typeof item.hubspotPostId === "string" && item.hubspotPostId.length > 0, `Published item ${itemKey} missing hubspotPostId`);
            assert(typeof item.hubspotUrl === "string" && item.hubspotUrl.length > 0, `Published item ${itemKey} missing hubspotUrl`);
            assert(typeof item.firstPublishedAt === "string" && item.firstPublishedAt.length > 0, `Published item ${itemKey} missing firstPublishedAt`);
            assert(typeof item.lastPublishedAt === "string" && item.lastPublishedAt.length > 0, `Published item ${itemKey} missing lastPublishedAt`);
        }

        const replayCount = item.replayCount ?? 0;
        assert(Number.isInteger(replayCount) && replayCount >= 0, `State item ${itemKey} has invalid replayCount`);
        if (replayCount > 0) {
            assert(item.lastAction === "replay", `Replayed item ${itemKey} must have lastAction replay`);
            assert(typeof item.lastReplayReason === "string" && item.lastReplayReason.length > 0, `Replayed item ${itemKey} missing lastReplayReason`);
        }
    }
}

console.log(`Validated sync state ${statePath}`);
