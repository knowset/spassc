import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'
import { domain } from '@/constant';


export default function FamousSportsmen({ articles: articlesData }: any) {
    const items: any[] = articlesData.data as any[];
    console.log(items);
    
    return (
        <Main currentPage='/sports_history'>
            <ArticleList articles={items}/>
        </Main>
    )
}

export async function getServerSideProps() {
    const res = await fetch(domain + "/api/sports_history_articles");
    const items = await res.json();

    return {
        props: {
            articles: items as any[]
        }
    }
}
