const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
if (!token) {
    console.error("Missing HUBSPOT_PRIVATE_APP_TOKEN");
    process.exit(1);
}

async function listBlogs() {
    const response = await fetch("https://api.hubapi.com/cms/v3/blogs/posts", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    // Actually, listing blogs is better via /cms/v3/blog-settings/settings or /cms/v3/blogs/posts might not show the groups
    // The correct endpoint for listing blog groups is /cms/v3/blogs/posts (for posts)
    // but for the "blogs" (content groups) themselves, it's:
    const blogsResponse = await fetch("https://api.hubapi.com/cms/v3/blogs/posts/content-groups", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    // Wait, the v3 API for content groups is /cms/v3/blogs/posts/content-groups? No.
    // Let's try the settings endpoint or search.
    // Actually, I'll just try to get all posts and see their contentGroupIds.
    // Better: /cms/v3/blogs/posts/content-groups is not likely valid for v3.
    // It's /cms/v3/blog-settings/settings for a specific one or something else.
    // Let me try to search for blogs specifically.
}

// I'll use a simpler script to just fetch /cms/v3/blogs/posts and look at the first few.
async function run() {
    const res = await fetch("https://api.hubapi.com/cms/v3/blogs/posts?limit=10", {
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    console.log(JSON.stringify(data.results.map(p => ({ title: p.name, blogId: p.contentGroupId })), null, 2));
}
run();
