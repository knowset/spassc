import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'
import { Loading } from "@/components/Loading";
import { useLoadData } from '@/hooks/useLoadData';

const articleName = "articles";

export default function Home(adminProps: {
    update: boolean,
    delete: boolean
}) {
    const {data, isLoading} = useLoadData(articleName);

    console.log(adminProps);

    if (isLoading) {
        return <Loading />;
    }
    if (!data) {
        return <Loading />
    }
    const items: any[] = data.data as any[];
    
    return (
        <Main currentPage='/'>
            <ArticleList articles={items} articlesPageName={articleName} adminProps={adminProps}/>
        </Main>
    )
}
