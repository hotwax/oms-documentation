const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const slug = "release-notes/2026-02";

async function findPost() {
    if (!token) { console.error("Missing token"); return; }
    // Search for any post with the slug
    const url = `https://api.hubapi.com/cms/v3/blogs/posts?slug=${slug}`;
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
}
findPost();
