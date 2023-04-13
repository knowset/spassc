import { deleteArticle, getArticles, postArticle } from "./functions";

export const handler = async (articleName: string, event: any) => {
    let res;
    
    if (event.httpMethod === "GET") {
        res = await getArticles(articleName);
    } else if (event.httpMethod === "POST") {
        const body = typeof event.body === "string" ? JSON.parse(event.body) : {};
        if (body.method === "DELETE") {
            res = await deleteArticle(articleName, body);
        }
        else {
            res = await postArticle(articleName, event.body);    
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(res),
    }
}