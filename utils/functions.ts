import faunadb from "faunadb";


const q = faunadb.query;
const client = new faunadb.Client({ 
  secret: "fnAFBMmpjOAA0PxNMhn5i4o0JjkAS0HL5v2bvKv6"
});


export const getArticles = async (articleName: string) => {
    return new Promise<any>( async (resolve, reject) => {

        try {
          const req = await client.query(q.Reverse(
            q.Map(
                q.Paginate(q.Documents(q.Collection(articleName))),
                q.Lambda("X", q.Get(q.Var("X")))
                )
                ))
                .then((ret) => {
                    resolve(ret);
                })
                .catch((err) => console.error(
                    'Error: [%s] %s: %s',
                    err.name,
                    err.message,
                    err.errors()[0].description,
                )) as any;
                    
                return { statusCode: 200, body: JSON.stringify(await req) };
        } catch (err) {
        console.log(err);
        }
    });
}

export const postArticle = async (articleName: string, data: any) => {
    try {
        const post = {
          data: JSON.parse(data)
        };
        const req = await client.query(
            q.Create(
                q.Collection(articleName),
                {
                    data: {
                        title: post.data.title,
                        content: post.data.content,
                        images: JSON.stringify(post.data.images),
                },
                },
            )
        )
        .then((ret) => console.log(ret))
        .catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
        ))
    
        return { statusCode: 200, body: JSON.stringify({ newMem: req }) };
    } catch (err) {
        console.log(err);
    }
}