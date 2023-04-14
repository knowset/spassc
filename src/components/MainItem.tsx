import React, { useCallback, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { CarouselItem } from "./CarouselItem";
import { motion } from "framer-motion";
import { useLockScroll } from "@/hooks/useLockScroll";
import { BarLoader } from "react-spinners";
import { Input } from "./Input";
import { useUpdateArticle } from "@/hooks/useUpdateArticle";
import { useDeleteArticle } from "@/hooks/useDeleteArticle";

interface MainItemProps {
    articlePageName?: string;
    article?: {
        ref: any,
        ts: any,
        data: {
            title: string,
            content: string,
            images: string
        }
    };
    displayShowMoreButton?: boolean;
    update?: boolean;
    delete?: boolean;
}

export const MainItem: React.FC<MainItemProps> = ({ article: artc, articlePageName, displayShowMoreButton = true, update: updateState, delete: deleteState }) => {
    const [deleted, setDeleted] = useState(false);
    const [open, setOpen] = useState(false);
    const [article, setArticle] = useState(artc);
    const [title, setTitle] = useState(article?.data.title || "");
    const [content, setContent] = useState(article?.data.content || "");
    useLockScroll(open);

    const handleUpdateArticle = async () => {
        setOpen(true);
    }

    const handleUpdateButton = async () => {
        let res;
        if (!!articlePageName) {
            res = await useUpdateArticle(articlePageName, JSON.stringify({ method: "UPDATE", article: {
                ref: article?.ref,
                ts: article?.ts,
                data: {
                    title,
                    content,
                    images: article?.data.images
                }
            }}));
        }
        if (res?.status === 200) {
            setArticle({ ref: article?.ref, ts: article?.ts, data: { title, content, images: article?.data.images || "" } })
        }
        setOpen(false);
    }

    const handleDeleteArticle = async () => {
        let res;
        if (!!articlePageName) {
            res = await useDeleteArticle(articlePageName, JSON.stringify({ method: "DELETE", article }))
        }
        if (res?.status === 200) {
            setDeleted(true);
        }
    }

    const toggleItemOpen = useCallback(() => {
        setOpen((current) => !current);
    }, [])

    return (
        <>
        { !deleted ? <div className={`t-overflow-hidden t-mx-2 t-flex t-flex-col t-shadow-2xl t-border t-rounded-md ${ !article ? "t-bg-slate-600" : "" }`}>
            {article?.data.images.length !== 0 ? <div className="t-h-[100] t-w-full t-flex t-justify-center t-gap-2">

            <CarouselItem imagesString={article?.data.images}/>
            </div> : ''}
            { (article?.data.title || article?.data.content) && <div className="t-flex t-flex-col t-py-4 t-lg:py-0 t-px-4 t-gap-2 t-overflow-hidden">
                { article?.data.title && <p className='t-text-xl t-font-bold t-m-0'>{ article?.data.title }</p>}
                { article?.data.content && <p className="t-flex t-flex-col t-m-0 t-w-full t-overflow-hidden">{ article?.data.content.slice(0, 500) + "..." } { displayShowMoreButton ? <button onClick={toggleItemOpen} className='t-ml-auto t-mr-2 t-text-zinc-700 t-underline t-cursor-pointer'>Читать далее</button> : ''}</p>}
            </div>}
            { updateState || deleteState ? <div className="t-px-4 t-pb-2 t-flex t-gap-4">
                { updateState ? <div>
                    <button onClick={handleUpdateArticle} className="t-bg-indigo-500 hover:t-bg-indigo-700 t-py-2 t-px-4 t-rounded-md t-text-white t-font-bold">обновить</button>
                </div> : ''}
                { deleteState && !!articlePageName ? <div>
                    <button onClick={handleDeleteArticle} className="t-h-10 t-bg-indigo-500 hover:t-bg-indigo-700 t-py-2 t-px-4 t-rounded-md t-text-white t-font-bold">Удалить</button>
                </div> : ''}
            </div> : '' }
        </div> : ''}
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
                {
                    !!updateState ? (
                        <div className="t-flex t-flex-col t-px-4 t-gap-2">
                                <div className="t-flex t-flex-col t-items-center t-justify-center t-text-xl sm:t-text-2xl">
                                    <p className="t-mb-1">Название</p>
                                    <Input onChange={(e) => setTitle(e)} value={title}/>
                                </div>
                                <div className="t-flex t-flex-col t-items-center t-justify-center t-text-xl sm:t-text-2xl t-pb-4">
                                    <p className="t-mb-1">Содержание</p>
                                    <Input onChange={(e) => setContent(e)} type="textarea" value={content} />
                                </div>
                                <div className="t-flex t-flex-col t-items-center t-justify-center t-pb-4">
                                    <button onClick={handleUpdateButton} className="t-h-10 t-bg-indigo-500 hover:t-bg-indigo-700 t-p-2 t-rounded-md t-text-white t-font-bold t-w-full xs:t-w-[90%] md:t-w-[70%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]">Обновить</button>
                                </div>
                            </div>
                        ) : 
                    
                        (article?.data.images.length !== 0 ? <CarouselItem isView p="t-pb-4" imagesString={article?.data.images}/> : '' ) &&
                        (!!article?.data.title || !!article?.data.content ? (
                            <div className="t-flex t-flex-col t-px-4 t-gap-2">
                                <div className="t-text-xl sm:t-text-2xl">
                                {article?.data.title}
                                </div>
                                <div className="t-overscroll-contain t-pb-4">
                                {article?.data.content}
                                </div>
                            </div>
                        ) : '' )
                        
                }
                
                </div>
            </div>
                </motion.div>
        )}
        </>
    );
}