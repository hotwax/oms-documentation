const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

async function listRecentPosts() {
    if (!token) { console.error("Missing token"); return; }
    const res = await fetch(`https://api.hubapi.com/cms/v3/blogs/posts?limit=20&sort=-createdAt`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    console.log(JSON.stringify(data.results.map(p => ({
        id: p.id,
        name: p.name,
        blogId: p.contentGroupId,
        slug: p.slug,
        state: p.state,
        publishedAt: p.publishDate
    })), null, 2));
}
listRecentPosts();
