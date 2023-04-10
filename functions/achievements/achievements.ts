import { Handler } from '@netlify/functions'
import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({ 
  secret: "fnAFBMmpjOAA0PxNMhn5i4o0JjkAS0HL5v2bvKv6"
});

const getAchievements = async () => {
  return new Promise<any>( async (resolve, reject) => {

    try {
      const req = await client.query(q.Reverse(
        q.Map(
          q.Paginate(q.Documents(q.Collection("achievement"))),
          q.Lambda("X", q.Get(q.Var("X")))
          )
          ))
          .then((ret) => {
            resolve(ret);
            // console.log("RET: ", ret);
          })
          .catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
            )) as any;
            
            console.log("DATAL: ", await req);
            
            return { statusCode: 200, body: JSON.stringify(await req) };
          } catch (err) {
            console.log(err);
          }
  });
}

const postAchievement = async (data: any) => {
  try {
    const post = {
      data: JSON.parse(data)
    };
    const req = await client.query(
      q.Create(
        q.Collection('achievement'),
        {
          data: {
            title: post.data.title,
            content: post.data.content,
            images: post.data.images,
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

export const handler: Handler = async (event, context) => {

  let res;

  if (event.httpMethod === "GET") {
    res = await getAchievements();
  } else if (event.httpMethod === "POST") {
    res = await postAchievement(event.body);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  }
}
