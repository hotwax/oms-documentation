const { Octokit } = require("@octokit/rest");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const REPOSITORIES = process.env.REPOSITORIES || process.env.GITHUB_REPOSITORY;

const octokit = new Octokit({ auth: GITHUB_TOKEN });
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function getIssueDetails(owner, repo, issueNumber) {
    try {
        const { data: issue } = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
            owner,
            repo,
            issue_number: issueNumber
        });
        return `Issue Title: ${issue.title}\nIssue Description: ${issue.body ? issue.body.slice(0, 500) + "..." : "No description provided."}`;
    } catch (e) {
        console.warn(`Could not fetch issue #${issueNumber} for ${owner}/${repo}: ${e.message}`);
        return null;
    }
}

async function getMergedPRs(owner, repo) {
    try {
        const prs = await octokit.paginate("GET /repos/{owner}/{repo}/pulls", { owner, repo, state: 'closed', per_page: 50 });
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const merged = prs.filter(pr => pr.merged_at && new Date(pr.merged_at) > thirtyDaysAgo);
        
        const results = [];
        for (const pr of merged) {
            let issueContext = "";
            const issueMatch = pr.body && pr.body.match(/(?:fix|fixes|fixed|close|closes|closed|resolve|resolves|resolved)\s+#(\d+)/i);
            if (issueMatch) {
                const issueNumber = issueMatch[1];
                const details = await getIssueDetails(owner, repo, issueNumber);
                if (details) issueContext = details;
            }
            results.push({ repository: `${owner}/${repo}`, title: pr.title, context: issueContext });
        }
        return results;
    } catch (e) { return []; }
}

async function generateWithRetry(modelName, prompt, attempt = 1) {
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (e) {
        if ((e.status === 503 || e.status === 429) && attempt < 3) {
            console.log(`Model ${modelName} busy. Waiting 3s...`);
            await new Promise(r => setTimeout(r, 3000));
            return generateWithRetry(modelName, prompt, attempt + 1);
        }
        throw e;
    }
}

async function main() {
    try {
        const repoList = REPOSITORIES.split(',').map(r => r.trim());
        let allUpdates = [];
        for (const repoStr of repoList) {
            const [o, r] = repoStr.split('/');
            const prs = await getMergedPRs(o, r);
            allUpdates = allUpdates.concat(prs);
        }

        if (allUpdates.length === 0) return console.log("Nothing to report.");

        let style = "Professional.";
        // Prioritize .gemini/styleguide.md, fallback to root
        if (fs.existsSync('.gemini/styleguide.md')) {
            style = fs.readFileSync('.gemini/styleguide.md', 'utf8');
        } else if (fs.existsSync('STYLE_GUIDE.md')) {
            style = fs.readFileSync('STYLE_GUIDE.md', 'utf8');
        }
        
        const prSummaries = allUpdates.map(p => {
            let item = `- [${p.repository}] ${p.title}`;
            if (p.context) item += `\n  Context (Linked Issue): ${p.context.replace(/\n/g, ' ')}`;
            return item;
        }).join("\n");

        const instruction = `
Role: You are a Product Marketing expert writing a customer-facing Product Update.
Task: Transform raw technical pull request titles into a polished, user-friendly Product Update.

Instructions:
1. Categorize updates clearly (e.g., 🚀 New Features, ⚡ Improvements, 🐛 Bug Fixes).
2. Explain each item in customer-friendly, non-technical language.
3. Clearly state the User Benefit for every major update.
4. Use the provided 'Context (Linked Issue)' to explain the "why" and customer value.
5. STRICTLY follow the provided Style Guide (tone, formatting, structure).
6. Do not invent features or details; keep vague PRs high-level.
7. Write with a product marketing tone (value-led, confident, announcement-style — not technical).
8. Exclude internal maintenance tasks (e.g., dependency updates, CI/CD changes) that have no visible impact on the user.

Output: Scannable, customer-ready Product Update suitable for release notes or announcements.
`;

        const prompt = `${instruction}\n\nStyle Guide:\n${style}\n\nChanges:\n${prSummaries}`;

        const models = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-1.5-flash"];
        let content = null;
        for (const m of models) {
            try { content = await generateWithRetry(m, prompt); break; }
            catch (e) { console.log(`${m} failed, trying next...`); }
        }

        if (!content) throw new Error("AI servers are unavailable. Try again in 5 minutes.");
        
        if (!fs.existsSync('product-updates')) fs.mkdirSync('product-updates');
        fs.writeFileSync(`product-updates/${new Date().getFullYear()}.md`, content);
        console.log("SUCCESS!");
    } catch (e) { console.error("FATAL:", e.message); process.exit(1); }
}
main();