const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

async function listBlogs() {
    if (!token) { console.error("Missing token"); return; }
    
    // Try v1/v2 API (often more reliable for listing groups)
    const v2Res = await fetch("https://api.hubapi.com/content/api/v2/blogs", {
        headers: { Authorization: `Bearer ${token}` }
    });
    if (v2Res.ok) {
        const data = await v2Res.json();
        console.log("--- v2 Blogs ---");
        console.log(JSON.stringify(data.objects.map(b => ({ name: b.name, id: b.id, portal: b.portal_id })), null, 2));
    } else {
        console.error("v2 fetch failed:", v2Res.status);
    }

    // Try v3 API search/settings (if we can find it)
    // Actually, v3 blogs listing is often via settings or posts.
}
listBlogs();
