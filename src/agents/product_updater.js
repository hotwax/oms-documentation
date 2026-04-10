import { analyzeWithGemini } from "../services/gemini.js";
import { CONFIG } from "../config/index.js";
import { saveAgentPrompt } from "../storage/index.js";
import fs from "fs";
import path from "path";

/**
 * Parses simple YAML-like frontmatter from a markdown file.
 * Returns an object with the frontmatter fields and the remaining content.
 */
function parseFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return { data: {}, content };

    const data = {};
    const lines = match[1].split('\n');
    lines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            data[key.trim()] = valueParts.join(':').trim();
        }
    });

    return { 
        data, 
        content: content.slice(match[0].length).trim() 
    };
}

/**
 * Loads all pending PR FAQs from the configured directory.
 */
export function loadPendingPRFAQs() {
    if (!fs.existsSync(CONFIG.PR_FAQS_DIR)) return [];

    const files = fs.readdirSync(CONFIG.PR_FAQS_DIR);
    const pendingFAQs = [];

    files.forEach(file => {
        if (file.endsWith('.md')) {
            const filePath = path.join(CONFIG.PR_FAQS_DIR, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const { data, content: body } = parseFrontmatter(content);

            if (data.status === 'pending') {
                pendingFAQs.push({
                    filename: file,
                    filePath,
                    title: data.title || file,
                    body,
                    metadata: data
                });
            }
        }
    });

    return pendingFAQs;
}

/**
 * Uses AI to match pending PR FAQs with logical clusters from the release notes.
 */
export async function identifyProductUpdateMatches(targetMonth, clusters, pendingFAQs) {
    if (clusters.length === 0 || pendingFAQs.length === 0) return [];

    const prompt = `
You are a Product Strategist at HotWax Commerce. 
Your task is to identify which "Press Release FAQs" (proposed features) match the "Logical Clusters" (actual implementations) from this month's release.

Pending Press Release FAQs:
${pendingFAQs.map((faq, i) => `[FAQ ${i}] Title: ${faq.title}\nDescription: ${faq.body.slice(0, 500)}...`).join('\n\n')}

Logical Clusters from GitHub:
${clusters.map((c, i) => `[Cluster ${i}] Name: ${c.name}\nContext: ${c.reason}`).join('\n\n')}

Identify matches where a Cluster represents the implementation of a Feature described in an FAQ.
A single cluster might match an FAQ, or an FAQ might be split across multiple clusters (though rare).

Output ONLY a JSON array of match objects:
[
  { "faqIndex": 0, "clusterIndices": [0] },
  ...
]
If no matches are found, output an empty array [].
`;

    if (CONFIG.DRY_RUN) {
        saveAgentPrompt("product_updater_matcher", targetMonth, prompt);
        // Mock matching logic: return empty by default in dry run
        return []; 
    }

    const result = await analyzeWithGemini(prompt, CONFIG.MODEL_CONFIG.PRODUCT_UPDATER);
    try {
        const jsonMatch = result.match(/\[[\s\S]*\]/);
        return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch (e) {
        console.error("Error parsing matcher result:", e);
        return [];
    }
}

/**
 * Generates a high-quality product update draft.
 */
export async function runProductUpdater(targetMonth, cluster, clusterItems, faq) {
    const prompt = `
You are a specialized Product Copywriter at HotWax Commerce. 
Your goal is to draft a "Product Update" - a deep dive into a significant new feature.

This update should bridge the original "Vision" (from the PR FAQ) with the "Reality" (from the GitHub implementation).

--- VISION (PR FAQ) ---
Title: ${faq.title}
Content:
${faq.body}

--- REALITY (GitHub Implementation) ---
Cluster: ${cluster.name}
Technical Context: ${cluster.reason}
Raw Pull Request Data:
${JSON.stringify(clusterItems.map(item => ({ 
    title: item.title, 
    body: item.body || "", 
    linkedIssues: item.linkedIssues?.map(i => i.body) || []
})), null, 2)}

--- DRAFTING GUIDELINES ---

Role:
You are a Technical Product Writer for an enterprise retail software company.

Input:
- A PRFAQ {source of product intent and customer value}
- A corresponding Release Note {summary of shipped change}
- Corresponding merged Pull Requests and Issues
- An Implementation Document {source of detailed workflow, architecture, and system behavior}

Task:
Generate a clear, well-structured product update for retail operations and product teams by synthesizing the inputs. Do not repeat content verbatim from the Release Note, Pull Requests, Issues, or Implementation Document.

Content Expectations:
The product update should naturally cover the following themes, using sectioning, headings, or narrative flow as appropriate to the change:
- How the workflow or system behaved before the change
- What has changed in the new design or approach
- How the new flow or architecture works, including key transitions and responsibilities
- The operational or business impact of the change

Guidelines:
- Use clear, plain language appropriate for retail operations and product teams.
- Accurately reflect the underlying implementation without requiring the reader to understand or read code.
- Do not omit relevant details from the implementation document. Translate implementation details into product-level explanations that describe responsibilities, transitions, and system behavior.
- Implementation concepts (such as services, states, data entities, integrations, or batch processes) referenced when they help explain how the system operates, but they must be framed in terms of what they enable or improve, not how they are coded.
- Write in short, readable paragraphs with clear transitions between ideas. Avoid cluttered or overly list-driven structure unless it improves clarity.
- Apply the Context–Action–Benefit (CAB) framework implicitly throughout the narrative. Do not label or surface Context, Action, or Benefit in the output.
- Use a neutral, factual tone. No marketing language or hype. Minimal bullets and points unless necessary.

Parsing Rules:
- Treat the PRFAQ as the primary source of intent and customer value.
- Treat the Release Note as confirmation of what shipped.
- Treat Pull Requests and Issues as evidence to validate scope, sequencing, and edge cases, not as narrative sources.
- Treat the Implementation Document as authoritative for workflow sequencing and architectural responsibilities, and translate its details into reader-friendly explanations.
- Resolve conflicts by prioritizing PRFAQ intent, then Release Note facts, and finally implementation evidence.

Output:
Return only the product update content, formatted in clean, standard Markdown suitable for committing to a repository.
`;

    if (CONFIG.DRY_RUN) {
        saveAgentPrompt(`product_update_${faq.title.replace(/\s+/g, "_")}`, targetMonth, prompt);
        return `Mock Product Update for ${faq.title}. This is a deep-dive draft based on the PR FAQ vision and GitHub reality.`;
    }

    return await analyzeWithGemini(prompt, CONFIG.MODEL_CONFIG.PRODUCT_UPDATER);
}
