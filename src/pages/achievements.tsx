import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'
import { domain } from '@/constant';

export default function Achievements({ achievements: achievementsData }: any) {
    const items: {
        ref: any,
        ts: any,
        data: {
            title: string,
            content: string,
            images: string
        }
    }[] = achievementsData.data;
    console.log(items);
    return (
        <Main currentPage='/achievements'>
            <ArticleList articles={items}/>
        </Main>
    )
}


Achievements.getInitialProps = async (ctx: any) => {
    const res = await fetch(domain + "/api/achievements");
    const items = await res.json();

    return {
        achievements: items as any[]
    }
};
