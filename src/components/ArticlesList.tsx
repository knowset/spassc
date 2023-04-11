import { FC } from "react";
import { MainItem } from "./MainItem";

interface ArticleListProps {
    articles: {
        ref: any,
        ts: any,
        data: {
            title: string,
            content: string,
            images: string
        }
    }[]
}

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
    return (
        <div className='t-pt-10 t-pb-20 t-flex t-flex-col t-gap-20'>

            { articles.map((item: any) => (
                <MainItem key={item.ts} images={item.data.images}>

                    <p className='t-text-xl t-font-bold'>{ item.data.title }</p>
                    <p>{ item.data.content.slice(0, 500) + "..." }</p>
                    <p className='t-ml-auto t-mr-2 t-text-zinc-700 t-underline t-cursor-pointer'>Читать далее</p>
    
                </MainItem>
            )) }
        </div>
    );
}