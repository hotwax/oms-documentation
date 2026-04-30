import fs from "fs";
import { CONFIG } from "../config/index.js";
import { markdownToHtml } from "../services/markdown.js";
import {
    createDraftPost,
    ensureTag,
    findPostBySlug,
    getAuthorById,
    getBlogById,
    getPostById,
    publishDraftPost,
    pushDraftLive,
    updateDraftPost
} from "../services/hubspot.js";
import { updateSyncStateItem } from "./state.js";

async function ensureTagIds(tagNames, language) {
    const tags = await Promise.all(tagNames.map((tagName) => ensureTag(tagName, language)));
    return tags.map((tag) => tag.id);
}

export async function validatePublishingTargets() {
    const { blogId, authorId } = CONFIG.PUBLISHING.hubspot;
    if (!blogId || !authorId) {
        throw new Error("Publishing config must define hubspot.blogId and hubspot.authorId");
    }

    await Promise.all([getBlogById(blogId), getAuthorById(authorId)]);
}

export async function publishManifestItem(manifestItem, stateItem, state, month) {
    const markdownContent = fs.readFileSync(manifestItem.filePath, "utf8");
    const html = markdownToHtml(markdownContent);
    const tagIds = await ensureTagIds(manifestItem.tagNames, CONFIG.PUBLISHING.hubspot.language);

    let existingPost = null;
    if (stateItem?.hubspotPostId) {
        try {
            existingPost = await getPostById(stateItem.hubspotPostId);
        } catch (error) {
            console.warn(`HubSpot post ${stateItem.hubspotPostId} was not found. Falling back to slug lookup. ${error.message}`);
        }
    }

    if (!existingPost) {
        existingPost = await findPostBySlug(CONFIG.PUBLISHING.hubspot.blogId, manifestItem.slug).catch(() => null);
    }

    const [year, monthNum] = month.split("-").map(Number);
    const publishDate = new Date(Date.UTC(year, monthNum - 1, 1)).toISOString();

    let post;
    if (!existingPost) {
        post = await createDraftPost(manifestItem, html, tagIds, publishDate);
        post = await publishDraftPost(post.id, manifestItem, html, tagIds, publishDate);
    } else {
        post = await updateDraftPost(existingPost.id, manifestItem, html, tagIds, publishDate);
        if (
            existingPost.currentState === "PUBLISHED" ||
            existingPost.publishStatus === "PUBLISHED" ||
            existingPost.currentlyPublished
        ) {
            await pushDraftLive(existingPost.id);
            post = await getPostById(existingPost.id);
        } else {
            post = await publishDraftPost(existingPost.id, manifestItem, html, tagIds, publishDate);
        }
    }

    return updateSyncStateItem(state, month, manifestItem.key, {
        status: "published",
        hubspotPostId: post.id,
        hubspotUrl: post.url,
        lastAttemptAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        error: null
    });
}
