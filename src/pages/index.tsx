import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'
import { domain } from '@/constant';


export default function Home({ articles: articlesData }: any) {
    const items: any[] = articlesData.data as any[];
    console.log(items);
    
    return (
        <Main currentPage='/'>
            <ArticleList articles={items}/>
        </Main>
    )
}

export async function getServerSideProps() {
    const res = await fetch(domain + "/api/articles");
    const items = await res.json();

    return {
        props: {
            articles: items as any[]
        }
    }
}

// Home.getInitialProps = async (ctx: any) => {
//     const res = await fetch(domain + "/api/articles");
//     const items = await res.json();

//     return {
//         articles: items as any[]
//     }
// };
