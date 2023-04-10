import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
import { getAllPosts } from '@/openDB';
import { GetStaticProps } from 'next';
import { getPosts } from '../../lib/db';
import { genSSP } from '../../lib/genSSP';

interface Post {
    id: number;
    title: string;
    content: string;
    images: string;
}

export default function Home({ posts }: any) {
    return (
        <Main currentPage='/'>
            <div className='t-pt-10 t-pb-20 t-flex t-flex-col t-gap-20'>

            { posts.map((post: any) => (
                <MainItem key={post.id} images={post.images}>

                    <p>{ post.title }</p>
                    <p>{ post.content }</p>
    
                </MainItem>
            )) }
            </div>
        </Main>
    )
}

export const getServerSideProps = genSSP(async (_) => ({
    posts: await getPosts().orderBy("id", "desc")
}));