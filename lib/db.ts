import { Knex, knex } from "knex";
import path from "path";
import Post from "../model/post";

export const db = knex({
    client: "sqlite3",
    connection: {
        filename: path.resolve("./databases/database.db")
    }
})

export const getPosts = (): Knex.QueryBuilder<Post, Post[]> => {
    initializeTables();
    return db("post");
};

export const initializeTables = async () => {
    if (!(await db.schema.hasTable("post"))) {
        await db.schema.createTable("post", (table) => {
            table.increments("id", {
                primaryKey: true
            });
            table.string("title").notNullable();
            table.string("content").notNullable();
            table.string("images").nullable();
        })
    }
}