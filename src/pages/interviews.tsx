import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'
import { Loading } from "@/components/Loading";
import { useLoadData } from '@/hooks/useLoadData';

const articleName = "interview_articles";

export default function Interview() {
    const {data, isLoading} = useLoadData(articleName);

    if (isLoading) {
        return <Loading />;
    }
    if (!data) {
        return <Loading />
    }
    const items: any[] = data.data as any[];
    
    return (
        <Main currentPage='/interviews'>
            <ArticleList articles={items}/>
        </Main>
    )
}