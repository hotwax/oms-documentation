import { Octokit } from "@octokit/rest";
import { CONFIG } from "../config/index.js";
import { isInTargetMonth, isDefaultBody } from "../utils/index.js";

function getOctokit() {
    if (!CONFIG.GITHUB_TOKEN) {
        throw new Error("Missing required environment variable: GITHUB_TOKEN");
    }

    return new Octokit({ auth: CONFIG.GITHUB_TOKEN });
}

export async function fetchMonthlyReleases(owner, repo, targetMonth) {
    const octokit = getOctokit();
    const { data } = await octokit.repos.listReleases({ owner, repo, per_page: 100 });
    return data.filter(release => isInTargetMonth(release.published_at, targetMonth));
}

export async function fetchContext(owner, repo, refNumber) {
    const octokit = getOctokit();
    try {
        const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: refNumber });
        const { data: files } = await octokit.pulls.listFiles({ owner, repo, pull_number: refNumber, per_page: 30 });
        
        let body = pr.body || "";
        
        if (!body.trim() || isDefaultBody(body)) {
            const botSummary = await fetchBotSummary(owner, repo, refNumber);
            if (botSummary) body = `(Bot-generated summary)\n${botSummary}`;
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
        try {
            const { data: issue } = await octokit.issues.get({ owner, repo, issue_number: refNumber });
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

export async function fetchRepoReadme(owner, repo) {
    const octokit = getOctokit();
    try {
        const { data: readme } = await octokit.repos.getReadme({ owner, repo });
        return Buffer.from(readme.content, 'base64').toString('utf8').substring(0, 500);
    } catch (e) {
        return "";
    }
}

export async function fetchBotSummary(owner, repo, issueNumber) {
    const octokit = getOctokit();
    try {
        const { data: comments } = await octokit.issues.listComments({
            owner,
            repo,
            issue_number: issueNumber,
            per_page: 20
        });

        const botComment = comments.find(c => 
            c.user && (c.user.login === 'gemini-code-assist[bot]' || c.user.login.includes('gemini-code-assist'))
        );

        if (botComment && botComment.body) {
            const summaryMatch = botComment.body.match(/## Summary of Changes\n\n([\s\S]*?)(?:\n\n###|\n\n<details>)/i);
            let summary = summaryMatch ? summaryMatch[1].trim() : botComment.body.trim();
            summary = summary.replace(/^Hello @\w+, I'm Gemini Code Assist[^!]+! I'm currently reviewing this pull request and will post my feedback shortly\. In the meantime, here's a summary to help you and other reviewers quickly get up to speed!\n+/i, "");
            summary = summary.replace(/\[\^\d+\]:[\s\S]*$/, "").trim();
            return summary;
        }
    } catch (e) {
        console.warn(`    Failed to fetch bot summary for #${issueNumber}: ${e.message}`);
    }
    return null;
}
