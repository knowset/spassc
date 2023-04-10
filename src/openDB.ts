import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("./posts.db");

export const getAllPosts: any = async () => {
    return new Promise<any>((resolve, reject) => {

        
        let sql = `select * from post`;
        let posts: any[] = [];
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);    
            }
        });
        console.log("POSTS2: ", posts);
    });
}

export const createPost: any = async (title: string, desc: string, images: string[]) => {
    console.log(title, desc, images);
    // INSERT INTO Post (slug, title, desc) values('Blue', 'Amber', 'sdfsdfsafsdfjsdf');
    // return new Promise<void>((resolve, reject) => {
    //     let sql = `insert into post (slug, title, desc, images) values (${title}, ${title}, ${desc}, ${desc})`;
    // })
}

