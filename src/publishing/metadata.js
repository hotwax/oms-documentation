import crypto from "crypto";

const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function normalizeSlugSegment(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
}

export function renderSlug(pattern, values) {
    return pattern.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

export function extractTitleFromMarkdown(content, fallback = "Untitled") {
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : fallback;
}

export function parseFrontmatter(documentContent) {
    const match = documentContent.match(FRONTMATTER_REGEX);
    if (!match) {
        return { data: {}, body: documentContent.trim() };
    }

    const data = {};
    for (const line of match[1].split(/\r?\n/)) {
        const separatorIndex = line.indexOf(":");
        if (separatorIndex === -1) continue;
        const key = line.slice(0, separatorIndex).trim();
        const rawValue = line.slice(separatorIndex + 1).trim();

        if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
            data[key] = rawValue
                .slice(1, -1)
                .split(",")
                .map((value) => value.trim())
                .filter(Boolean);
            continue;
        }

        data[key] = rawValue.replace(/^"(.*)"$/, "$1");
    }

    return { data, body: documentContent.slice(match[0].length).trim() };
}

export function stringifyFrontmatter(data) {
    const lines = Object.entries(data)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                return `${key}: [${value.join(", ")}]`;
            }
            const stringValue = String(value).replace(/\r?\n/g, " ").trim();
            return `${key}: ${stringValue}`;
        });

    return `---\n${lines.join("\n")}\n---\n`;
}

export function buildMetaDescription(markdownContent, maxLength = 160) {
    const body = stripFrontmatter(markdownContent);
    const paragraph = body
        .split(/\n{2,}/)
        .map((block) => block.replace(/\r?\n/g, " ").trim())
        .find((block) => block && !block.startsWith("#") && !block.startsWith("*") && !block.startsWith("-"));

    const text = (paragraph || body).replace(/\s+/g, " ").trim();
    return text.length <= maxLength ? text : `${text.slice(0, maxLength - 1).trim()}…`;
}

export function stripFrontmatter(documentContent) {
    return documentContent.replace(FRONTMATTER_REGEX, "").trim();
}

export function stripTitle(markdownContent) {
    return markdownContent.replace(/^#\s+.+$/m, "").trim();
}

export function normalizeMarkdownBody(markdownContent) {
    return stripFrontmatter(markdownContent)
        .replace(/\r\n/g, "\n")
        .replace(/[ \t]+$/gm, "")
        .trim();
}

export function computeContentHash(metadata) {
    const payload = JSON.stringify({
        title: metadata.title,
        slug: metadata.slug,
        contentType: metadata.contentType,
        month: metadata.month,
        metaDescription: metadata.metaDescription,
        tagNames: metadata.tagNames,
        sourceFaq: metadata.sourceFaq || null,
        body: normalizeMarkdownBody(metadata.body)
    });

    return crypto.createHash("sha256").update(payload).digest("hex");
}

export function createPublishedDocument(metadata) {
    const frontmatter = stringifyFrontmatter({
        title: metadata.title,
        slug: metadata.slug,
        contentType: metadata.contentType,
        month: metadata.month,
        metaDescription: metadata.metaDescription,
        tagNames: metadata.tagNames,
        key: metadata.key,
        sourceFaq: metadata.sourceFaq
    });

    return `${frontmatter}\n${normalizeMarkdownBody(metadata.body)}\n`;
}
