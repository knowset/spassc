import { Handler } from '@netlify/functions'
import { handler as hd } from '../../utils/handler';

const articleName = "sports_history_articles";

export const handler: Handler = async (event, context) => {
    return hd(articleName, event);
}

