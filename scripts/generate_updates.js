import { Octokit } from "@octokit/rest";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

const SOURCE_REPOS = process.env.SOURCE_REPOS;
const MONTH = process.env.MONTH; // Format: YYYY-MM (e.g., 2026-01)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const PRODUCTION = process.env.PRODUCTION === 'true';
const DRY_RUN = !PRODUCTION;

if (DRY_RUN) {
    console.log("🛠️  DRY RUN MODE ENABLED: (Safety First) Gemini API calls are disabled. Set PRODUCTION=true in .env to enable.");
} else {
    console.log("🚀 PRODUCTION MODE ENABLED: Calling Gemini API...");
}

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
    "gemini-2.5-flash"
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

// Extract PR references from text (handles both #123 and full GitHub URLs)
function extractPRRefsWithLinks(text, owner, repo) {
    const prRefs = [];
    const seen = new Set();

    // Pattern 1: #123
    const shorthandRegex = /#(\d+)/g;
    for (const match of text.matchAll(shorthandRegex)) {
        const num = match[1];
        if (!seen.has(num)) {
            prRefs.push({ number: num, url: `https://github.com/${owner}/${repo}/pull/${num}`, text: `#${num}` });
            seen.add(num);
        }
    }

    // Pattern 2: https://github.com/owner/repo/pull/123
    const urlRegex = new RegExp(`https:\\/\\/github\\.com\\/${owner}\\/${repo}\\/pull\\/(\\d+)`, 'g');
    for (const match of text.matchAll(urlRegex)) {
        const num = match[1];
        if (!seen.has(num)) {
            prRefs.push({ number: num, url: match[0], text: `#${num}` });
            seen.add(num);
        }
    }

    return prRefs;
}

// Fetch context for a reference (tries PR first, then Issue)
async function fetchContext(owner, repo, refNumber) {
    try {
        // Try to fetch as a Pull Request first
        const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: refNumber });
        const { data: files } = await octokit.pulls.listFiles({ owner, repo, pull_number: refNumber, per_page: 30 });
        
        let body = pr.body || "";
        
        // If PR description is empty, try to get summary from Gemini bot comment
        if (!body.trim()) {
            const botSummary = await fetchBotSummary(owner, repo, refNumber);
            if (botSummary) {
                body = `(Bot-generated summary)\n${botSummary}`;
            }
        }

        return {
            type: 'PR',
            number: refNumber,
            body: body,
            labels: pr.labels.map(l => l.name),
            files: files.map(f => f.filename),
            title: pr.title
        };
    } catch (e) {
        // If not a PR, try as an Issue
        try {
            const { data: issue } = await octokit.issues.get({ owner, repo, issue_number: refNumber });
            // Note: Issues don't have 'files' or 'pull_request' field if they are pure issues
            return {
                type: 'Issue',
                number: refNumber,
                body: issue.body || "",
                labels: issue.labels.map(l => typeof l === 'string' ? l : l.name),
                files: [],
                title: issue.title
            };
        } catch (issueError) {
            console.warn(`    No PR or Issue found for #${refNumber} in ${owner}/${repo}`);
            return null;
        }
    }
}

// Fetch Gemini bot summary from comments if it exists
async function fetchBotSummary(owner, repo, issueNumber) {
    try {
        const { data: comments } = await octokit.issues.listComments({
            owner,
            repo,
            issue_number: issueNumber,
            per_page: 20 // Gemini bot usually comments early
        });

        const botComment = comments.find(c => 
            c.user && (c.user.login === 'gemini-code-assist[bot]' || c.user.login.includes('gemini-code-assist'))
        );

        if (botComment && botComment.body) {
            // Extract the summary section if found
            const summaryMatch = botComment.body.match(/## Summary of Changes\n\n([\s\S]*?)(?:\n\n###|\n\n<details>)/i);
            let summary = summaryMatch ? summaryMatch[1].trim() : botComment.body.trim();
            
            // Remove the bot's introduction preamble if present
            summary = summary.replace(/^Hello @\w+, I'm Gemini Code Assist[^!]+! I'm currently reviewing this pull request and will post my feedback shortly\. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n+/i, "");
            
            // Remove footnotes like [^1]: ...
            summary = summary.replace(/\[\^\d+\]:[\s\S]*$/, "").trim();

            return summary;
        }
    } catch (e) {
        console.warn(`    Failed to fetch bot summary for #${issueNumber}: ${e.message}`);
    }
    return null;
}

// Extract linked issue numbers from text (Closes #123, Related Issue: #456, etc.)
function extractLinkedIssueNumbers(text) {
    if (!text) return [];
    // Expanded regex to include 'Related Issue', 'Issue', 'Ref', etc.
    const regex = /(?:close|closes|closed|fix|fixes|fixed|resolve|resolves|resolved|related issue|issue|ref|leads to)\s*[:\s]*#(\d+)/gi;
    const matches = text.matchAll(regex);
    return [...new Set([...matches].map(m => m[1]))];
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
    console.log(`📅 Target Month: ${targetMonth}`);
    console.log(`🚀 Starting release notes generation...`);

    let styleGuide = "";
    try {
        styleGuide = fs.readFileSync(".gemini/styleguide.md", "utf8");
        console.log("✅ Style guide loaded from .gemini/styleguide.md");
    } catch (e) {
        console.warn("⚠️  Style guide not found, using default PM instructions.");
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
                
                // ENHANCEMENT: Fetch details for each PR/Issue mentioned in the release notes
                const enrichedRefs = [];
                for (const prRef of prRefs) {
                    console.log(`  Fetching context for #${prRef.number}...`);
                    const context = await fetchContext(owner, repo, prRef.number);
                    
                    if (context) {
                        // If it's a PR, also try to find and fetch linked issues
                        const linkedIssues = [];
                        if (context.type === 'PR') {
                            const linkedIssueNumbers = extractLinkedIssueNumbers(context.body);
                            for (const issueNum of linkedIssueNumbers) {
                                console.log(`    Fetching linked Issue #${issueNum}...`);
                                // Note: We use fetchContext recursively but skip linked issues of linked issues
                                const issueDetails = await fetchContext(owner, repo, issueNum);
                                if (issueDetails) linkedIssues.push(issueDetails);
                            }
                        }
                        
                        enrichedRefs.push({
                            ...prRef,
                            ...context,
                            linkedIssues
                        });
                    }
                }

                allReleases.push({
                    repo: repoFull,
                    repoName: repo,
                    tag: release.tag_name,
                    publishedAt: release.published_at,
                    body: release.body,
                    prRefs: prRefs, // Original refs for linking
                    enrichedRefs: enrichedRefs // Detailed context
                });
            }

            console.log(`  Found ${releases.length} release(s)`);
        } catch (error) {
            console.error(`  Error fetching releases: ${error.message}`);
        }
    }

    if (allReleases.length === 0) {
        console.log(`❌ No releases found for ${targetMonth}`);
        return;
    }

    // Group releases by repository to preserve context for Gemini
    const releasesByRepo = {};
    for (const release of allReleases) {
        if (!releasesByRepo[release.repo]) {
            releasesByRepo[release.repo] = [];
        }
        releasesByRepo[release.repo].push(release);
    }

    console.log(`📊 Summary: Found ${allReleases.length} total releases across ${Object.keys(releasesByRepo).length} repositories.`);
    console.log("🧠 Grouping updates and preparing prompt context...");

    // Function to truncate long text to avoid prompt bloat
    const truncate = (text, limit = 4000) => text && text.length > limit ? text.substring(0, limit) + "..." : text;

    // Prepare consolidated data organized by repository with RICH context
    const consolidatedData = Object.entries(releasesByRepo).map(([repoPath, releases]) => {
        const releaseEntries = releases.map(r => {
            // Filter enrichedRefs to only those with meaningful descriptions
            const usefulRefs = r.enrichedRefs.filter(ref => ref.body && ref.body.trim().length > 0);
            
            const refContext = usefulRefs.map(ref => {
                // Filter linked issues to only those with descriptions
                const usefulIssues = (ref.linkedIssues || []).filter(i => i.body && i.body.trim().length > 0);
                const issuesText = usefulIssues.map(i => `Linked Issue Resolved: ${i.title}\nIssue Detail: ${truncate(i.body)}`).join("\n");
                
                return `
---
${ref.type} #${ref.number}: ${ref.title}
Labels: ${ref.labels.join(", ") || "None"}
Files Changed: ${ref.files.slice(0, 10).join(", ")}${ref.files.length > 10 ? " (and more...)" : ""}
Description: ${truncate(ref.body)}
${issuesText}
`;
            }).join("\n");

            // Check if the release body is essentially empty (placeholder or just changelog link)
            const isBodyEmpty = !r.body || r.body.trim().length === 0 || 
                                (r.body.includes("**Full Changelog**") && 
                                 r.body.split('\n').filter(l => l.trim() && !l.includes("**Full Changelog**") && !l.includes("## What's Changed")).length === 0);
            
            // If no useful refs AND empty body, skip this release from the prompt
            if (usefulRefs.length === 0 && isBodyEmpty) return null;

            return `
Version: ${r.tag}
Release Summary: ${r.body}
Detailed Context from PRs/Issues:
${refContext || "No additional detailed context available."}
`;
        }).filter(Boolean);

        // If no releases remain for this repo after filtering, skip the repo
        if (releaseEntries.length === 0) return null;

        return `
# Repository: ${repoPath}
${releaseEntries.join("\n---\n")}
`;
    }).filter(Boolean).join("\n");

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
Repositories with updates: ${Object.keys(releasesByRepo).join(", ")}

All Release Data (including rich context from PRs and Issues):
${consolidatedData}

Task:
Generate consolidated monthly release notes following this EXACT structure and methodology:

# ${formattedMonth} Release Notes

[Write ONE introductory paragraph that:
- Summarizes the month's key themes and focus areas
- Lists the primary apps/module that received updates
- Highlights the overall business impact
- Keeps it concise (2-3 sentences max)]

[Your core task is to INTELLIGENTLY GROUP these repository updates into logical user-facing sections using the provided PR context.]

GROUPING RULES:
1. Identify the logical "App" or "Module" for each change. Common apps include: Receiving App, BOPIS App, Fulfillment App, Inventory Count App, OMS, NetSuite Connector, Shopify Integration, Job Manager, etc.
2. CONSOLIDATE ONLY TRULY RELATED CHANGES:
   - Use the "Files Changed" and PR descriptions to identify changes that are part of the SAME user-facing feature across different repositories.
   - DO NOT group unrelated features just because they belong to the same app or connector.
3. If a repository contains core platform changes, group them under "OMS".
4. Do NOT simply list repository names as headings. Use user-friendly App/Module names.

STRUCTURE FOR EACH SECTION:

## [App/Module Name]:

[For each distinct feature/update in this app, use this structure:]

### [Feature Name]
[Problem statement - Use the "Linked Issue Detail" or PR description to describe the user challenge or business need BEFORE this update. Focus on the 'why'.]
[Solution - Explain what the update does NOW and how it works. Mention technical components only if essential.]
[Impact - Describe the practical benefit.]

CRITICAL FORMATTING RULES:
1. Title format: "${formattedMonth} Release Notes"
2. Organize by logical App/Module - NOT by raw repository paths.
3. Each feature follows: Problem → Solution → Impact.
4. NO emoji sections or marketing labels ("Problem/Solution").
5. Keep each feature description to 3-4 sentences total.
6. Be granular: If PR context shows distinct improvements, describe them separately.


DO NOT:
- Invent features not mentioned in the release data.
- List repository paths in the output.
- Include raw GitHub sections or contributor lists.

EXAMPLE FORMAT:
# January 2026 Release Notes

The January 2026 release introduces updates across Receiving, BOPIS, and Fulfillment to improve transfer handling and inventory accuracy.

## Receiving App:

### Push notifications for Transfer Orders
Store teams need timely visibility into new and pending transfer orders to take receiving action without delay. The Receiving App now sends push notifications when transfer orders are created or remain pending. This helps with faster response to incoming transfers and reduced reliance on manual order checks.
`;

    let content;
    if (DRY_RUN) {
        console.log("📝 Safety Check: Saving raw prompt to draft file for review.");
        content = `# DRY RUN - ENHANCED PROMPT PREVIEW\n\n${prompt}`;
    } else {
        try {
            console.log("✨ Sending prompt to Gemini for summarization...");
            content = await analyzeWithGemini(prompt);
            console.log("✅ Received response from Gemini.");
        } catch (error) {
            console.warn("❌ Gemini failed — using fallback consolidated data.");
            content = `# ${formattedMonth} Release Notes\n\n${consolidatedData}`;
        }
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
        const charBefore = offset > 0 ? fullString[offset - 1] : '';
        if (charBefore === '[') return match;

        if (prLinkMap.has(prNumber)) {
            return `[#${prNumber}](${prLinkMap.get(prNumber)})`;
        }
        return match;
    });

    // Output to drafts/YYYY-MM.md
    const outFile = path.join("drafts", `${targetMonth}.md`);
    fs.mkdirSync("drafts", { recursive: true });
    fs.writeFileSync(outFile, content);

    console.log(`\n✓ Generated consolidated release notes: ${outFile}`);
})();


