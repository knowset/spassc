import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'
import { domain } from '@/constant';

export default function Interview({ interviews: interviewsData }: any) {
    const items: {
        ref: any,
        ts: any,
        data: {
          title: string,
          content: string,
          images: string
        }
    }[] = interviewsData.data as any;

    return (
        <Main currentPage='/interviews'>
            <ArticleList articles={items}/>
        </Main>
    )
}
    
    
Interview.getInitialProps = async (ctx: any) => {
    const res = await fetch(domain + "/api/interviews");
    const items = await res.json();

    return {
        interviews: items as any
    }
};