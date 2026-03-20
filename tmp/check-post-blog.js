const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const postId = "326230966998"; // January Release Notes post ID from sync state

async function getPostDetails() {
    if (!token) { console.error("Missing token"); return; }
    const res = await fetch(`https://api.hubapi.com/cms/v3/blogs/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) {
        console.error("Fetch failed:", res.status, await res.text());
        return;
    }
    const post = await res.json();
    console.log(JSON.stringify(post, null, 2));
}
getPostDetails();
