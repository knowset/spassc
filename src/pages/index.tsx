import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
import { getAllPosts } from '@/openDB';
import { GetStaticProps } from 'next';
import { Post } from '../../model/post';
// import { } from "../../public";

export interface HomeProps {
    posts: Post[];
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "./";

export default function Home({ posts }: HomeProps) {
    console.log("POSTS", posts);
    return (
        <Main currentPage='/'>
            <div className='pt-10 pb-20 flex flex-col gap-20'>

            { posts.map((post) => (
                <div key={post.id}>
                    <p>{ post.title }</p>
                    <p>{ post.desc }</p>
                </div>
            )) }
            </div>
        </Main>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    // db.all(`

    
    // INSERT INTO Post (slug, title, desc) values('Blue', 'Amber', 'sdfsdfsafsdfjsdf');
    // INSERT INTO Post (slug, title, desc) values('Blue1', 'Amber1', 'sdfsdfsafsdfjsdf');
    // INSERT INTO Post (slug, title, desc) values('Blue2', 'Amber2', 'sdfsdfsafsdfjsdf');
    // INSERT INTO Post (slug, title, desc) values('Blue3', 'Amber3', 'sdfsdfsafsdfjsdf');
    // INSERT INTO Post (slug, title, desc) values('Blue4', 'Amber4', 'sdfsdfsafsdfjsdf');
    // `);
    const posts = await getAllPosts();

    return { props: { posts } };
}