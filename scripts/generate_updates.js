const { Octokit } = require("@octokit/rest");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

// 1. Setup
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const REPOSITORIES = process.env.REPOSITORIES || process.env.GITHUB_REPOSITORY;

if (!GITHUB_TOKEN || !GEMINI_API_KEY || !REPOSITORIES) {
    console.error("Missing GITHUB_TOKEN, GEMINI_API_KEY, or REPOSITORIES");
    process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function getReposFromOrg(org) {
    console.log(`Auto-discovering repositories for organization: ${org}...`);
    try {
        const repos = await octokit.paginate("GET /orgs/{org}/repos", {
            org,
            type: 'all',
            per_page: 100
        });
        console.log(`- Found ${repos.length} repositories in ${org}.`);
        return repos.map(r => r.full_name);
    } catch (e) {
        console.error(`ERROR fetching repos for org ${org}: ${e.message}`);
        return [];
    }
}


async function getIssueDetails(owner, repo, issueNumber) {
    try {
        const { data: issue } = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
            owner,
            repo,
            issue_number: issueNumber
        });
        return {
            text: `Issue Title: ${issue.title}\nIssue Description: ${issue.body ? issue.body.slice(0, 500) + "..." : "No description provided."}`,
            url: issue.html_url
        };
    } catch (e) {
        console.warn(`Could not fetch issue #${issueNumber} for ${owner}/${repo}: ${e.message}`);
        return null;
    }
}

async function getPRsForRepo(owner, repo) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    console.log(`Checking ${owner}/${repo}...`);
    try {
        const prs = await octokit.paginate("GET /repos/{owner}/{repo}/pulls", { owner, repo, state: 'closed', per_page: 50 });
        const merged = prs.filter(pr => pr.merged_at && new Date(pr.merged_at) > thirtyDaysAgo);

        const results = [];
        for (const pr of merged) {
            let issueContext = "";
            let issueUrl = "";
            // Regex to find "fix #123", "closes #123", "resolves #123" etc.
            const issueMatch = pr.body && pr.body.match(/(?:fix|fixes|fixed|close|closes|closed|resolve|resolves|resolved)\s+#(\d+)/i);

            if (issueMatch) {
                const issueNumber = issueMatch[1];
                console.log(`  -> Found linked issue #${issueNumber} for PR "${pr.title}"`);
                const details = await getIssueDetails(owner, repo, issueNumber);
                if (details) {
                    issueContext = details.text;
                    issueUrl = details.url;
                }
            }

            results.push({
                repository: `${owner}/${repo}`,
                title: pr.title,
                url: pr.html_url,
                context: issueContext,
                issueUrl: issueUrl
            });
        }

        if (results.length > 0) console.log(`- ${owner}/${repo}: Found ${results.length} merged updates.`);
        return results;
    } catch (e) {
        console.error(`- Error fetching PRs for ${owner}/${repo}: ${e.message}`);
        return [];
    }
}

async function generateWithRetry(modelName, prompt, attempt = 1) {
    const maxAttempts = 3;
    try {
        console.log(`AI Attempt ${attempt} using ${modelName}...`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (e) {
        if ((e.status === 503 || e.status === 429) && attempt < maxAttempts) {
            console.log(`AI Overloaded. Waiting 3s and retrying...`);
            await new Promise(r => setTimeout(r, 3000));
            return generateWithRetry(modelName, prompt, attempt + 1);
        }
        throw e;
    }
}

async function main() {
    try {
        let repoList = REPOSITORIES.split(',').map(r => r.trim());
        let finalRepoList = [];

        for (const entry of repoList) {
            if (entry.includes('/')) {
                // Specific repo like "hotwax/oms"
                finalRepoList.push(entry);
            } else {
                // Organization name like "hotwax"
                const orgRepos = await getReposFromOrg(entry.toLowerCase());
                finalRepoList = finalRepoList.concat(orgRepos);
            }
        }

        // Remove duplicates if any
        finalRepoList = [...new Set(finalRepoList)];

        // Parallelize fetching to save time
        const prResults = await Promise.all(finalRepoList.map(repo => {
            const [o, r] = repo.split('/');
            return getPRsForRepo(o, r);
        }));

        const allPRs = prResults.flat();

        if (allPRs.length === 0) {
            console.log("No work to report across any repositories!");
            return;
        }

        console.log("Generating summary with AI...");
        let style = "Professional.";
        if (fs.existsSync('.gemini/styleguide.md')) {
            style = fs.readFileSync('.gemini/styleguide.md', 'utf8');
        } else if (fs.existsSync('STYLE_GUIDE.md')) {
            style = fs.readFileSync('STYLE_GUIDE.md', 'utf8');
        }

        const prSummaries = allPRs.map(p => {
            let item = `- [${p.repository}] ${p.title} (PR: ${p.url})`;
            if (p.context) {
                item += `\n  Context (Linked Issue): ${p.context.replace(/\n/g, ' ')}`;
                if (p.issueUrl) item += ` (Issue: ${p.issueUrl})`;
            }
            return item;
        }).join("\n");

        const instruction = `
Role: You are a Product Marketing expert writing a customer-facing Product Update.
Task: Transform raw technical pull request titles into a polished, user-friendly Product Update with citations.

Core Instructions:
1. Categorize updates clearly (e.g., 🚀 New Features, ⚡ Improvements, 🐛 Bug Fixes).
2. Explain each item in customer-friendly, non-technical language.
3. Clearly state the User Benefit for every major update.
4. Traceability: For every update, include a clickable citation to the source PR or Issue using the provided URLs. (e.g., "Learn more in [PR #123](url)").
5. Cross-Repo Grouping: Identify related items across different repositories. If multiple PRs contribute to the same feature (e.g., 'Ship to Store' logic in backend and UI), combine them into one unified, high-value update with multiple citations to show the complete effort.
6. STRICTLY follow the provided Style Guide (tone, formatting, structure).
7. Do not invent features or details; keep vague PRs high-level.
8. Write with a product marketing tone (value-led, confident, announcement-style — not technical).
9. Exclude internal maintenance tasks (e.g., dependency updates, CI/CD changes) that have no visible impact on the user.

Output: Scannable, customer-ready Product Update with clickable source links, suitable for release notes or announcements.
`;

        const prompt = \`\${instruction}\n\n<STYLE_GUIDE>\n\${style}\n</STYLE_GUIDE>\n\n<RAW_CHANGES>\n\${prSummaries}\n</RAW_CHANGES>\`;

        const models = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-1.5-flash"];
        let content = null;
        for (const m of models) {
            try { content = await generateWithRetry(m, prompt); break; }
            catch (e) { console.log(\`\${m} busy or failed, trying fallback...\`); }
        }

        if (!content) throw new Error("All AI models are currently unavailable.");

        if (!fs.existsSync('product-updates')) fs.mkdirSync('product-updates');
        const now = new Date();
        const fileName = \`\${now.getFullYear()}-\${String(now.getMonth() + 1).padStart(2, '0')}.md\`;
        fs.writeFileSync(\`product-updates/\${fileName}\`, content);
        console.log(\`SUCCESS: Report generated as \${fileName}\`);
    } catch (e) {
        console.error("FATAL ERROR:", e.message);
        process.exit(1);
    }
}

main();
