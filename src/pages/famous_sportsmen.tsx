import { ArticleList } from '@/components/ArticlesList';
import { Loading } from '@/components/Loading';
import { Main } from '@/components/Main'
import { useLoadData } from '@/hooks/useLoadData';

const articleName = "famous_sportsmen_articles";

export default function FamousSportsmen() {
    const {data, isLoading} = useLoadData(articleName);

    if (isLoading) {
        return <Loading />;
    }
    if (!data) {
        return <Loading />
    }
    const items: any[] = data.data as any[];
    
    return (
        <Main currentPage='/famous_sportsmen'>
            <ArticleList articles={items}/>
        </Main>
    )
}