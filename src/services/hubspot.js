import { CONFIG } from "../config/index.js";

const HUBSPOT_API_BASE = "https://api.hubapi.com";

function requireHubSpotToken() {
    if (!CONFIG.HUBSPOT_PRIVATE_APP_TOKEN) {
        throw new Error("Missing required environment variable: HUBSPOT_PRIVATE_APP_TOKEN");
    }
}

async function hubspotRequest(path, { method = "GET", query = {}, body } = {}) {
    requireHubSpotToken();

    const url = new URL(`${HUBSPOT_API_BASE}${path}`);
    for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null || value === "") continue;
        url.searchParams.set(key, value);
    }

    const response = await fetch(url, {
        method,
        headers: {
            Authorization: `Bearer ${CONFIG.HUBSPOT_PRIVATE_APP_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HubSpot API ${method} ${path} failed (${response.status}): ${errorText}`);
    }

    if (response.status === 204) return null;
    return response.json();
}

async function collectResults(path, query = {}) {
    const results = [];
    let after;

    do {
        const response = await hubspotRequest(path, {
            query: { ...query, after, limit: 100 }
        });
        results.push(...(response.results || []));
        after = response.paging?.next?.after;
    } while (after);

    return results;
}

export async function getBlogById(blogId) {
    return hubspotRequest(`/cms/v3/blog-settings/settings/${blogId}`);
}

export async function getAuthorById(authorId) {
    return hubspotRequest(`/cms/v3/blogs/authors/${authorId}`);
}

export async function findPostBySlug(blogId, slug) {
    try {
        const response = await hubspotRequest("/cms/v3/blogs/posts", {
            query: {
                slug__eq: slug,
                contentGroupId__eq: blogId,
                limit: 10
            }
        });
        const exactMatch = (response.results || []).find((post) => post.slug === slug && String(post.contentGroupId) === String(blogId));
        if (exactMatch) return exactMatch;
    } catch (error) {
        console.warn(`HubSpot filtered post lookup failed, falling back to pagination: ${error.message}`);
    }

    const posts = await collectResults("/cms/v3/blogs/posts", {});
    return posts.find((post) => post.slug === slug && String(post.contentGroupId) === String(blogId)) || null;
}

export async function getPostById(postId) {
    return hubspotRequest(`/cms/v3/blogs/posts/${postId}`);
}

export async function ensureTag(name, language = "en") {
    let existing = null;
    try {
        const response = await hubspotRequest("/cms/v3/blogs/tags", {
            query: {
                name__eq: name,
                limit: 10
            }
        });
        existing = (response.results || []).find((tag) => tag.name.toLowerCase() === name.toLowerCase());
    } catch (error) {
        console.warn(`HubSpot filtered tag lookup failed, falling back to pagination: ${error.message}`);
    }

    if (!existing) {
        const tags = await collectResults("/cms/v3/blogs/tags");
        existing = tags.find((tag) => tag.name.toLowerCase() === name.toLowerCase()) || null;
    }

    if (existing) return existing;

    return hubspotRequest("/cms/v3/blogs/tags", {
        method: "POST",
        body: {
            name,
            language,
            slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }
    });
}

function buildPostPayload(item, html, tagIds, publishDate) {
    return {
        name: item.title,
        contentGroupId: CONFIG.PUBLISHING.hubspot.blogId,
        slug: item.slug,
        blogAuthorId: CONFIG.PUBLISHING.hubspot.authorId,
        metaDescription: item.metaDescription,
        useFeaturedImage: false,
        postBody: html,
        postSummary: item.metaDescription,
        htmlTitle: item.title,
        tagIds,
        publishDate: publishDate || undefined,
        language: CONFIG.PUBLISHING.hubspot.language
    };
}

export async function createDraftPost(item, html, tagIds, publishDate) {
    return hubspotRequest("/cms/v3/blogs/posts", {
        method: "POST",
        body: buildPostPayload(item, html, tagIds, publishDate)
    });
}

export async function updateDraftPost(postId, item, html, tagIds, publishDate) {
    return hubspotRequest(`/cms/v3/blogs/posts/${postId}/draft`, {
        method: "PATCH",
        body: buildPostPayload(item, html, tagIds, publishDate)
    });
}

export async function publishDraftPost(postId, item, html, tagIds, publishDate) {
    return hubspotRequest(`/cms/v3/blogs/posts/${postId}`, {
        method: "PATCH",
        body: {
            ...buildPostPayload(item, html, tagIds, publishDate),
            state: "PUBLISHED"
        }
    });
}

export async function pushDraftLive(postId) {
    return hubspotRequest(`/cms/v3/blogs/posts/${postId}/draft/push-live`, {
        method: "POST"
    });
}
