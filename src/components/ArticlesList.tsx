import { FC } from "react";
import { MainItem } from "./MainItem";

interface ArticleListProps {
    articles?: {
        ref: any,
        ts: any,
        data: {
            title: string,
            content: string,
            images: string
        }
    }[];
}

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
    return (
        <div className='t-pb-20 t-flex t-flex-col t-gap-20'>

            { articles && articles.map((item: any) => (
                <MainItem key={item.ts} article={item} />
            )) }
        </div>
    );
}