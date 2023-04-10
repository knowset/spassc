export const apiCreatePost = async (title: string, content: string, images: string) => {
    const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            content,
            images
        })
    });

    console.log("RES: ", res);

    return res.status;
}