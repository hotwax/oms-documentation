import { Octokit } from "@octokit/rest";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

const SOURCE_REPOS = process.env.SOURCE_REPOS;
const MONTH = process.env.MONTH; // Format: YYYY-MM (e.g., 2026-01)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!SOURCE_REPOS || !GITHUB_TOKEN || !GEMINI_API_KEY) {
    console.error("Missing required environment variables");
    process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const repos = SOURCE_REPOS.split(",").map(r => r.trim());

// ✅ ONLY use models that WORK
const GEMINI_MODELS = [
    "gemini-3-flash-preview",
    "gemini-2.5-flash",
    "gemini-1.5-flash"
];

// Get target month (defaults to previous month if not specified)
function getTargetMonth() {
    if (MONTH) return MONTH;

    const now = new Date();
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const year = prevMonth.getFullYear();
    const month = String(prevMonth.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

// Check if a release was published in the target month
function isInTargetMonth(publishedAt, targetMonth) {
    const releaseDate = new Date(publishedAt);
    const year = releaseDate.getFullYear();
    const month = String(releaseDate.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}` === targetMonth;
}

// Fetch all releases from a repository published in the target month
async function fetchMonthlyReleases(owner, repo, targetMonth) {
    const { data } = await octokit.repos.listReleases({ owner, repo, per_page: 100 });
    return data.filter(release => isInTargetMonth(release.published_at, targetMonth));
}

// Extract PR references and create interlinks
function extractPRRefsWithLinks(text, owner, repo) {
    const regex = /#(\d+)/g;
    const matches = text.matchAll(regex);
    const prRefs = [];

    for (const match of matches) {
        const prNumber = match[1];
        const prUrl = `https://github.com/${owner}/${repo}/pull/${prNumber}`;
        prRefs.push({ number: prNumber, url: prUrl, text: `#${prNumber}` });
    }

    return prRefs;
}

async function analyzeWithGemini(prompt) {
    for (const modelName of GEMINI_MODELS) {
        try {
            console.log(`Trying Gemini model: ${modelName}`);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (e) {
            console.warn(`${modelName} failed: ${e.message}`);
        }
    }
    throw new Error("All Gemini models failed");
}

(async () => {
    const targetMonth = getTargetMonth();
    console.log(`Generating release notes for ${targetMonth}...`);

    let styleGuide = "";
    try {
        styleGuide = fs.readFileSync("style guide.md", "utf8");
    } catch (e) {
        console.warn("style guide.md not found, using default.");
    }

    // Aggregate all releases from all repos for the target month
    const allReleases = [];

    for (const repoFull of repos) {
        const [owner, repo] = repoFull.split("/");
        console.log(`Fetching releases from ${repoFull}...`);

        try {
            const releases = await fetchMonthlyReleases(owner, repo, targetMonth);

            for (const release of releases) {
                const prRefs = extractPRRefsWithLinks(release.body, owner, repo);
                allReleases.push({
                    repo: repoFull,
                    repoName: repo,
                    tag: release.tag_name,
                    publishedAt: release.published_at,
                    body: release.body,
                    prRefs: prRefs
                });
            }

            console.log(`  Found ${releases.length} release(s)`);
        } catch (error) {
            console.error(`  Error fetching releases: ${error.message}`);
        }
    }

    if (allReleases.length === 0) {
        console.log(`No releases found for ${targetMonth}`);
        return;
    }

    console.log(`\nTotal releases found: ${allReleases.length}`);

    // Map repository names to user-facing app/product names
    const repoToAppMap = {
        'hotwax/receiving': 'Receiving App',
        'hotwax/bopis': 'BOPIS App',
        'hotwax/fulfillment': 'Fulfillment App',
        'hotwax/inventory-count': 'Inventory Count App',
        'hotwax/transfers': 'Transfers App',
        'hotwax/facilities': 'Facilities App',
        'hotwax/preorder': 'Pre-Order App',
        'hotwax/oms': 'OMS',
    };

    // Group releases by app/product
    const releasesByApp = {};
    for (const release of allReleases) {
        const appName = repoToAppMap[release.repo] || 'OMS';
        if (!releasesByApp[appName]) {
            releasesByApp[appName] = [];
        }
        releasesByApp[appName].push(release);
    }

    // Prepare consolidated data organized by app
    const consolidatedData = Object.entries(releasesByApp).map(([appName, releases]) => {
        const releaseInfo = releases.map(r => {
            const prLinks = r.prRefs.map(pr => `[${pr.text}](${pr.url})`).join(", ");
            return `
Version: ${r.tag}
Published: ${r.publishedAt}
PR References: ${prLinks || "None"}

Release Notes:
${r.body}
`;
        }).join("\n---\n");

        return `
## ${appName}

${releaseInfo}
`;
    }).join("\n");

    // Format month for title (e.g., "January 2026")
    const [year, month] = targetMonth.split('-');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[parseInt(month) - 1];
    const formattedMonth = `${monthName} ${year}`;

    const prompt = `
You are a Product Manager writing consolidated monthly release notes for HotWax Commerce.

${styleGuide ? `Please follow this Style Guide strictly:\n${styleGuide}\n` : ""}

Context:
Month: ${formattedMonth}
Number of releases: ${allReleases.length}
Apps/Products updated: ${Object.keys(releasesByApp).join(", ")}

All Release Data (organized by app):
${consolidatedData}

Task:
Generate consolidated monthly release notes following this EXACT structure and methodology:

# ${formattedMonth} Release Notes

[Write ONE introductory paragraph that:
- Summarizes the month's key themes and focus areas
- Lists the apps/products that received updates
- Highlights the overall business impact
- Keeps it concise (2-3 sentences max)
Example: "The ${formattedMonth} release introduces updates across [list apps] to [key themes]. These changes help [overall impact]."]

[For each app/product that has updates, create a section:]

## [App/Product Name]:

[For each feature/update in this app, use this problem-solution structure:]

### [Feature Name]
[Problem statement - 1-2 sentences describing the user challenge or business need that existed before this feature]
[Solution - 1-2 sentences explaining what the feature does and how it works]

CRITICAL FORMATTING RULES:
1. Title format: "${formattedMonth} Release Notes" (not "HotWax Commerce Product Update")
2. Organize by app/product (Receiving App, BOPIS App, OMS, etc.) - NOT by feature type
3. Each feature follows: Problem → Solution → Impact
4. NO emoji sections (🚀 or ⚡)
5. NO "User Benefit:" labels - integrate benefits into the narrative
6. Use sentence-style capitalization
7. Keep each feature description to 3-4 sentences total
8. Problem statement should describe what users struggled with BEFORE
9. Solution should explain what the feature does NOW
10. Impact should explain how this HELPS users

STYLE REQUIREMENTS:
- Be concise and narrative-driven
- Avoid marketing fluff ("seamlessly", "effortlessly", etc.)
- Focus on practical business/operational impact
- Use clear, direct language
- Each section should flow naturally as a story: challenge → solution → benefit
- Write in present tense for solutions ("The app now sends..." not "The app will send...")
- Keep tone professional but warm (following HotWax voice)

ORGANIZATION:
- Group all changes by their app/product
- Within each app section, list features in order of importance
- If a repository doesn't map to a specific app, categorize it under "OMS"

DO NOT:
- Invent features not mentioned in the release data
- List contributors
- Include raw GitHub sections
- Use "User Benefit:" or similar labels
- Categorize by "New Features" vs "Improvements"
- Add extra formatting or sections beyond what's specified

EXAMPLE FORMAT:
# January 2026 Release Notes

The January 2026 release introduces updates across Receiving, BOPIS, Fulfillment and Inventory Count to improve transfer handling, support Ship-to-Store for BOPIS orders and enhance inventory accuracy. These changes help reduce manual intervention and keep store workflows running smoothly.

## Receiving App:

### Push notifications for Transfer Orders
1. Store teams need timely visibility into new and pending transfer orders to take receiving action without delay. The Receiving App now sends push notifications when transfer orders are created or remain pending. This helps with faster response to incoming transfers and reduced reliance on manual order checks.
2. Manually Added Items Shown in Completed Transfers
   Store teams may receive additional or incorrect items while completing transfer receiving and need visibility into those items after they are recorded. The Receiving App now displays manually added items as received within the corresponding Transfer Order. This helps with accurate transfer reconciliation and reduces follow-up between sending and receiving locations. 

## BOPIS App:

### Ship-to-store
1. Limited inventory at the pickup store often results in BOPIS order cancellations and lost sales. These orders can now be converted to Ship-to-Store from the BOPIS App, allowing fulfillment to continue while preserving the original pickup experience.

### OMS
1. Shipping Price Rules Configurable from OMS
   Shipping charges may be adjusted as part of promotional strategies and cost management. Checkout shipping prices are now configurable directly from the OMS, allowing teams to manage pricing centrally without storefront changes.
`;

    let content;
    try {
        content = await analyzeWithGemini(prompt);
    } catch (error) {
        console.warn("Gemini failed — using fallback");
        content = `# ${formattedMonth} Release Notes\n\n${consolidatedData}`;
    }

    // Post-process: Re-inject PR links
    // Build a map of all PR numbers to their URLs across all releases
    const prLinkMap = new Map();
    for (const release of allReleases) {
        for (const pr of release.prRefs) {
            prLinkMap.set(pr.number, pr.url);
        }
    }

    // Replace all #123 patterns with [#123](url) if not already linked
    content = content.replace(/#(\d+)/g, (match, prNumber, offset, fullString) => {
        // Check if this PR number is already in a markdown link format
        // Peek at the character before the match
        const charBefore = offset > 0 ? fullString[offset - 1] : '';
        if (charBefore === '[') {
            // Already part of a markdown link, don't modify
            return match;
        }

        // If we have a URL for this PR, create a link
        if (prLinkMap.has(prNumber)) {
            return `[#${prNumber}](${prLinkMap.get(prNumber)})`;
        }

        // Otherwise, leave as-is
        return match;
    });

    // Output to drafts/YYYY-MM.md
    const outFile = path.join("drafts", `${targetMonth}.md`);
    fs.mkdirSync("drafts", { recursive: true });
    fs.writeFileSync(outFile, content);

    console.log(`\n✓ Generated consolidated release notes: ${outFile}`);
})();

