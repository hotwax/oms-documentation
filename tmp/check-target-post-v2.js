const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const postId = "326245032649";

async function checkPost() {
    if (!token) { console.error("Missing token"); return; }
    const res = await fetch(`https://api.hubapi.com/cms/v3/blogs/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    console.log("Status:", res.status);
    const body = await res.text();
    console.log("Body:", body);
}
checkPost();
