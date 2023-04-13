import { Handler } from '@netlify/functions'
import { handler as hd } from '../../utils/handler';

const articleName = "achievement_articles";

export const handler: Handler = async (event, context) => {
    return hd(articleName, event);
}
