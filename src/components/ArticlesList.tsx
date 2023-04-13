import { FC } from "react";
import { MainItem } from "./MainItem";

interface ArticleListProps {
    articlesPageName: string;
    articles?: {
        ref: {
            '@Ref': any
        },
        ts: any,
        data: {
            title: string,
            content: string,
            images: string
        }
    }[];
    adminProps: any;
}

export const ArticleList: FC<ArticleListProps> = ({ articles, adminProps, articlesPageName }) => {
    return (
        <div className='t-pb-20 t-flex t-flex-col t-gap-20'>

            { articles && articles.map((item: any) => (
                <MainItem key={item.ts} article={item} articlePageName={articlesPageName} update={adminProps.update} delete={adminProps.delete} />
            )) }
        </div>
    );
}