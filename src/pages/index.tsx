import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
import { getAllPosts } from '@/openDB';
import { GetStaticProps } from 'next';
import { getPosts } from '../../lib/db';
import { genSSP } from '../../lib/genSSP';
import Post from '../../model/post';
// import { } from "../../public";


export default function Home({ posts }: any) {
    console.log("POSTS", posts);
    return (
        <Main currentPage='/'>
            <div className='pt-10 pb-20 flex flex-col gap-20'>

            { posts.map((post: any) => (
                <div key={post.id}>
                    <p>{ post.title }</p>
                    <p>{ post.content }</p>
                </div>
            )) }
            </div>
        </Main>
    )
}

export const getServerSideProps: any = genSSP(async (_) => ({
    posts: await getPosts()
}));