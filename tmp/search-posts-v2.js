const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

async function searchPosts() {
    if (!token) { console.error("Missing token"); return; }
    // Search for name containing February
    const url = `https://api.hubapi.com/cms/v3/blogs/posts?name__icontains=February`;
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
}
searchPosts();
