export const useDeleteArticle = async (articleName: string, body: string) => {
    const res = await fetch("/api/" + articleName, {
        method: "POST",
        body
    })
    return res;
};