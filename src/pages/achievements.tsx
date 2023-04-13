import { ArticleList } from '@/components/ArticlesList';
import { Loading } from '@/components/Loading';
import { Main } from '@/components/Main'
import { useLoadData } from '@/hooks/useLoadData';

const articleName = "achievement_articles";

export default function Achievements(adminProps: {
    update: boolean,
    delete: boolean
}) {
    const {data, isLoading} = useLoadData(articleName);

    if (isLoading) {
        return <Loading />;
    }
    if (!data) {
        return <Loading />
    }
    const items: any[] = data.data as any[];
    
    return (
        <Main currentPage='/achievements'>
            <ArticleList articles={items} articlesPageName={articleName} adminProps={adminProps}/>
        </Main>
    )
}

