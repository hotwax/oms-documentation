export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export function getTargetMonth(configuredMonth) {
    if (configuredMonth) return configuredMonth;

    const now = new Date();
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const year = prevMonth.getFullYear();
    const month = String(prevMonth.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

export function isInTargetMonth(publishedAt, targetMonth) {
    const releaseDate = new Date(publishedAt);
    const year = releaseDate.getFullYear();
    const month = String(releaseDate.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}` === targetMonth;
}

export function extractPRRefsWithLinks(text, owner, repo) {
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

export function extractLinkedIssueNumbers(text) {
    if (!text) return [];
    const regex = /(?:close|closes|closed|fix|fixes|fixed|resolve|resolves|resolved|related issue|issue|ref|leads to)\s*[:\s]*#(\d+)/gi;
    const matches = text.matchAll(regex);
    return [...new Set([...matches].map(m => m[1]))];
}
