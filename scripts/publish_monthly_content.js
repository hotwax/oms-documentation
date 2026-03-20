import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { publishManifestItem, validatePublishingTargets } from "../src/publishing/publisher.js";
import { getMonthState, loadSyncState, saveSyncState, seedSyncStateForManifest, updateSyncStateItem } from "../src/publishing/state.js";

function resolveManifestPath() {
    if (process.env.MANIFEST_PATH) {
        return process.env.MANIFEST_PATH;
    }

    if (process.env.MONTH) {
        return path.join("drafts", process.env.MONTH, "publish-manifest.json");
    }

    throw new Error("MANIFEST_PATH or MONTH must be provided");
}

async function main() {
    const manifestPath = resolveManifestPath();
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const sourceCommit = process.env.GITHUB_SHA || execSync("git rev-parse HEAD").toString().trim();

    await validatePublishingTargets();

    const state = seedSyncStateForManifest(loadSyncState(), manifest, sourceCommit);
    const monthState = getMonthState(state, manifest.month);
    const failures = [];

    for (const item of manifest.items) {
        const stateItem = monthState[item.key];
        if (stateItem?.status === "published" && stateItem.contentHash === item.contentHash) {
            console.log(`Skipping already-published item ${item.key}`);
            continue;
        }

        try {
            const result = await publishManifestItem(item, stateItem, state, manifest.month);
            console.log(`Published ${item.key} -> ${result.hubspotUrl}`);
        } catch (error) {
            failures.push(item.key);
            updateSyncStateItem(state, manifest.month, item.key, {
                status: "failed",
                lastAttemptAt: new Date().toISOString(),
                publishedAt: null,
                error: error.message,
                sourceCommit
            });
            console.error(`Failed to publish ${item.key}: ${error.message}`);
        }
    }

    saveSyncState(state);

    if (failures.length > 0) {
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
