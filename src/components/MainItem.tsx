import React, { useCallback, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { CarouselItem } from "./CarouselItem";
import { motion } from "framer-motion";
import { useLockScroll } from "@/hooks/useLockScroll";

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
}

export const MainItem: React.FC<MainItemProps> = ({ article }) => {
    const [open, setOpen] = useState(false);

    useLockScroll(open);

    const toggleItemOpen = useCallback(() => {
        setOpen((current) => !current);
    }, [])



    return (
        <>
        <div className={`t-mx-2 t-flex t-flex-col t-shadow-2xl t-border t-rounded-md ${ !article ? "t-bg-slate-600" : "" }`}>
            {!!article?.data.images ? <div className="t-h-[100] t-w-full t-flex t-justify-center t-gap-2">

            <CarouselItem imagesString={article?.data.images}/>
            </div> : ''}
            { (article?.data.title || article?.data.content) && <div className="t-flex t-flex-col t-py-4 t-lg:py-0 t-px-4 t-gap-2">
                { article?.data.title && <p className='t-text-xl t-font-bold t-m-0'>{ article?.data.title }</p>}
                { article?.data.content && <p className="t-flex t-flex-col t-m-0">{ article?.data.content.slice(0, 500) + "..." } <button onClick={toggleItemOpen} className='t-ml-auto t-mr-2 t-text-zinc-700 t-underline t-cursor-pointer'>Читать далее</button></p>}
            </div>}
        </div>
        { open && (
            <motion.div animate={{ opacity: open ? 100 : 0}}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 0.2,
                    delay: 0.1,
                }}>
                    <div className="t-overflow-hidden t-mx-[2%] md:t-mx-0 t-fixed t-flex t-flex-col t-top-[8rem] t-w-[96%] md:t-w-[90%] lg:t-w-[80%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%] t-h-[80%] t-z-[60] t-text-black t-bg-zinc-200 t-shadow-2xl t-border t-border-zinc-300 t-rounded-md">

                <div onClick={toggleItemOpen} className="t-flex t-justify-end t-pt-3 t-px-3 t-text-xl"><GrClose className="t-cursor-pointer" /></div>
                <hr className="t-text-zinc-400" />
                <div className="t-overflow-y-scroll t-w-full t-h-full t-z-[70]">

                { !!article?.data.images ? <CarouselItem isView p="t-pb-4" imagesString={article?.data.images}/> : '' }
                { !!article?.data.title || !!article?.data.content ? (
                    <div className="t-flex t-flex-col t-px-4 t-gap-2">
                        <div className="t-text-xl sm:t-text-2xl">
                        {article?.data.title}
                        </div>
                        <div className="t-overscroll-contain t-pb-4">
                        {article?.data.content}
                        </div>
                    </div>
                ) : '' }
                </div>
            </div>
                </motion.div>
        )}
        </>
    );
}