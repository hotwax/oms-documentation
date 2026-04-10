import fs from "fs";
import path from "path";
import { CONFIG } from "../config/index.js";
import {
    buildMetaDescription,
    computeContentHash,
    createPublishedDocument,
    extractTitleFromMarkdown,
    normalizeSlugSegment,
    renderSlug
} from "./metadata.js";

export function getPublishManifestPath(targetMonth) {
    const baseDir = path.join("drafts", targetMonth);
    return path.join(CONFIG.DRY_RUN ? path.join(baseDir, "test") : baseDir, "publish-manifest.json");
}

export function savePublishManifest(targetMonth, manifest) {
    const filePath = getPublishManifestPath(targetMonth);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2) + "\n");
    return filePath;
}

export function loadPublishManifest(targetMonth) {
    const filePath = getPublishManifestPath(targetMonth);
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getRelativeDraftBaseDir(targetMonth) {
    return CONFIG.DRY_RUN ? path.join("drafts", targetMonth, "test") : path.join("drafts", targetMonth);
}

function buildManifestItem({ targetMonth, contentType, title, body, relativeFilePath, sourceFaq }) {
    const publishingConfig = CONFIG.PUBLISHING.hubspot;
    const slugSegment = normalizeSlugSegment(title);
    const slugPattern = contentType === "release-note"
        ? publishingConfig.releaseNotes.slugPattern
        : publishingConfig.productUpdates.slugPattern;
    const tagNames = contentType === "release-note"
        ? publishingConfig.releaseNotes.tagNames
        : publishingConfig.productUpdates.tagNames;
    const slug = renderSlug(slugPattern, { month: targetMonth, slug: slugSegment });
    const key = contentType === "release-note"
        ? `release-notes:${targetMonth}`
        : `product-update:${targetMonth}:${slugSegment}`;
    const metaDescription = buildMetaDescription(body);
    const contentHash = computeContentHash({
        title,
        slug,
        contentType,
        month: targetMonth,
        metaDescription,
        tagNames,
        sourceFaq,
        body
    });

    return {
        key,
        contentType,
        title,
        slug,
        filePath: relativeFilePath,
        metaDescription,
        tagNames,
        contentHash,
        sourceFaq
    };
}

export function buildReleaseNotesArtifact(targetMonth, body) {
    const title = extractTitleFromMarkdown(body, `${targetMonth} Release Notes`);
    const relativeFilePath = path.join(getRelativeDraftBaseDir(targetMonth), "release-notes.md");
    const manifestItem = buildManifestItem({
        targetMonth,
        contentType: "release-note",
        title,
        body,
        relativeFilePath
    });

    return {
        manifestItem,
        document: createPublishedDocument({
            ...manifestItem,
            month: targetMonth,
            body
        })
    };
}

export function buildProductUpdateArtifact(targetMonth, title, body, sourceFaq) {
    const relativeFilePath = path.join(
        getRelativeDraftBaseDir(targetMonth),
        "product-updates",
        `${normalizeSlugSegment(title).replace(/-/g, "_")}.md`
    );
    const manifestItem = buildManifestItem({
        targetMonth,
        contentType: "product-update",
        title,
        body,
        relativeFilePath,
        sourceFaq
    });

    return {
        manifestItem,
        document: createPublishedDocument({
            ...manifestItem,
            month: targetMonth,
            body,
            sourceFaq
        })
    };
}

export function createPublishManifest(targetMonth, items) {
    return {
        month: targetMonth,
        mode: process.env.GENERATION_MODE === "replay" ? "replay" : "monthly",
        generatedAt: new Date().toISOString(),
        requestedAt: new Date().toISOString(),
        requestedBy: process.env.GITHUB_ACTOR || "local",
        replayReason: process.env.GENERATION_MODE === "replay" ? (process.env.REPLAY_REASON || null) : null,
        items
    };
}
