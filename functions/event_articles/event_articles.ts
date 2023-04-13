import { Handler } from '@netlify/functions'
import { handler as hd } from '../../utils/handler';

const articleName = "event_articles";

export const handler: Handler = async (event, context) => {
    return hd(articleName, event);
}

