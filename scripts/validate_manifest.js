import fs from "fs";
import path from "path";

function resolveManifestPath() {
    if (process.env.MANIFEST_PATH) {
        return process.env.MANIFEST_PATH;
    }

    if (process.env.MONTH) {
        return path.join("drafts", process.env.MONTH, "publish-manifest.json");
    }

    throw new Error("MANIFEST_PATH or MONTH must be provided");
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

const manifestPath = resolveManifestPath();
assert(fs.existsSync(manifestPath), `Publish manifest not found at ${manifestPath}`);

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
assert(typeof manifest.month === "string" && /^\d{4}-\d{2}$/.test(manifest.month), "Manifest month must be YYYY-MM");
assert(manifest.mode === "monthly" || manifest.mode === "replay", "Manifest mode must be monthly or replay");
assert(typeof manifest.requestedAt === "string" && manifest.requestedAt.length > 0, "Manifest requestedAt is required");
assert(typeof manifest.requestedBy === "string" && manifest.requestedBy.length > 0, "Manifest requestedBy is required");
if (manifest.mode === "replay") {
    assert(typeof manifest.replayReason === "string" && manifest.replayReason.trim().length > 0, "Replay manifest must include replayReason");
} else {
    assert(manifest.replayReason === null, "Monthly manifest replayReason must be null");
}
assert(Array.isArray(manifest.items), "Manifest items must be an array");

const seenKeys = new Set();
for (const item of manifest.items) {
    for (const field of ["key", "contentType", "title", "slug", "filePath", "metaDescription", "contentHash"]) {
        assert(typeof item[field] === "string" && item[field].length > 0, `Manifest item missing ${field}`);
    }

    assert(Array.isArray(item.tagNames), `Manifest item ${item.key} must include tagNames[]`);
    assert(fs.existsSync(item.filePath), `Manifest item ${item.key} points to missing file ${item.filePath}`);
    assert(!seenKeys.has(item.key), `Duplicate manifest key ${item.key}`);
    seenKeys.add(item.key);
}

console.log(`Validated manifest ${manifestPath} with ${manifest.items.length} items for ${manifest.month}`);
