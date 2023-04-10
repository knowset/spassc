import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
import { getAllPosts } from '@/openDB';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { genSSP } from '../../lib/genSSP';

interface Post {
    id: number;
    title: string;
    content: string;
    images: string;
}

export default function Home({ posts: postsData }: any) {
    // const [posts, setPosts] = useState([]);

    // const getPosts = async () => {
    //     const res = await fetch("/api/posts");
    //     const data = await res.json();
    //     setPosts(data);
    // }

    

    const posts: any[] = postsData.data;

    console.log(posts[0]);

    return (
        <Main currentPage='/'>
            <div className='t-pt-10 t-pb-20 t-flex t-flex-col t-gap-20'>

            { posts.map((post: any) => (
                <MainItem key={post.data.id} images={post.data.images}>

                    <p>{ post.data.title }</p>
                    <p>{ post.data.content }</p>
    
                </MainItem>
            )) }
            </div>
        </Main>
    )
}

Home.getInitialProps = async (ctx: any) => {
    const res = await fetch("https://spassc.netlify.app/api/posts");
    const json = await res.json();

    return {
        posts: json as any[]
    }
};