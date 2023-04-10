import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
    secret: "fnAFBMmpjOAA0PxNMhn5i4o0JjkAS0HL5v2bvKv6"
});

export const handler = (event: any, context: any, callback: any) => {
    const data = JSON.parse(event.body);
    console.log("DATA: ", data);
    const todoItem = {
        data: data
    };

    return client.query(q.Create(q.Ref("classes/todos"), todoItem))
    .then((response) => {
        console.log(response);

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response)
        });
    }).catch((err) => {
        console.log(err);
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(err)
        })
    })
}