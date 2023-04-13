import { Handler } from '@netlify/functions'
import { getArticles, postArticle } from '../../utils/functions';

const articleName = "interview_articles";

export const handler: Handler = async (event, context) => {

    let res;

    if (event.httpMethod === "GET") {
        res = await getArticles(articleName);
    } else if (event.httpMethod === "POST") {
        res = await postArticle(articleName, event.body);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(res),
    }
}

