import { getPosts } from "../../../../lib/db";

export default async (req: any, res: any) => {
    if (req.method !== "POST") {
        res.status(405).send("");
        return;
    }

    console.log(req.body);

    await getPosts().insert({
        ...req.body
    })
} 