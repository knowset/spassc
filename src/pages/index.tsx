import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
import { domain } from '@/constant';
import { useCallback, useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    images: string;
}

export default function Home({ articles: articlesData }: any) {
    const items: any[] = articlesData.data as any;

    console.log(items);

    return (
        <Main currentPage='/'>
            <ArticleList articles={items}/>
        </Main>
    )
}


Home.getInitialProps = async (ctx: any) => {
    const res = await fetch(domain + "/api/articles");
    const items = await res.json();

    return {
        articles: items as any[]
    }
};