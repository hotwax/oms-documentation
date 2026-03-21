import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { stripFrontmatter, stripTitle } from "../publishing/metadata.js";

marked.setOptions({
    gfm: true,
    breaks: false
});

export function markdownToHtml(markdownContent) {
    const rawHtml = marked.parse(stripTitle(stripFrontmatter(markdownContent)));
    return sanitizeHtml(rawHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
            "img",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6"
        ]),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            a: ["href", "name", "target", "rel"],
            img: ["src", "alt", "title"]
        },
        allowedSchemes: ["http", "https", "mailto"]
    });
}
