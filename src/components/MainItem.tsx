import React from "react";
import { CarouselItem } from "./CarouselItem";

interface MainItemProps {
    article?: {
        ref: any,
        ts: any,
        data: {
            title: string,
            content: string,
            images: string
        }
    };
    reverse?: boolean;
}

export const MainItem: React.FC<MainItemProps> = ({ article, reverse = false }) => {
    return (
        <div className={`t-mx-2 t-flex t-flex-col t-shadow-2xl t-border t-rounded-md ${ !article ? "t-bg-slate-600" : "" }`}>
            {!!article?.data.images ? <div className="t-h-[100] t-w-full t-flex t-justify-center">

            <CarouselItem imagesString={article?.data.images}/>
            </div> : ''}
            { article?.data.title && article?.data.content && <div className="t-flex t-flex-col t-py-4 t-lg:py-0 t-px-4 t-gap-2">
                <p className='t-text-xl t-font-bold'>{ article?.data.title }</p>
                <p>{ article?.data.content.slice(0, 500) + "..." }</p>
                <p className='t-ml-auto t-mr-2 t-text-zinc-700 t-underline t-cursor-pointer'>Читать далее</p>
            </div>}
        </div>
    );
}