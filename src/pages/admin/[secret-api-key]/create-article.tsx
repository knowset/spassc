import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Main } from "../../../components/Main";
import { Input } from "@/components/Input";

const postPost = async ({ title, content, images }: {title: string, content: string, images: string}) => {
    const res = await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify({ title: title, content: content, images: images })
    })
};

const CreateArticle = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [image5, setImage5] = useState("");


    const buttonOnClick = async () => {
        await createArticle();
    }

    const createArticle = async () => {
        let images = "";
        images += (image1.includes("http") ? image1 + ";" : "");
        images += (image2.includes("http") ? image2 + ";" : "");
        images += (image3.includes("http") ? image3 + ";" : "");
        images += (image4.includes("http") ? image4 + ";" : "");
        images += (image5.includes("http") ? image5 + ";" : "");

        await postPost({ title, content, images });
        router.push("/");
    }
    
    return (
        
        <Main currentPage="">
            <div className="t-flex t-flex-col t-gap-4 t-pt-8 t-px-12 t-mb-12">
                <div className="t-flex t-flex-col t-justify-center t-items-center t-gap-4">
                    <p className="t-text-2xl t-font-bold">Создать статью</p>
                <Input placeholder="название" onChange={setTitle}/>
                <Input placeholder="текст" onChange={setContent}/>
                <Input placeholder="ссылка на картинку (необязательно)" onChange={setImage1}/>
                <Input placeholder="ссылка на картинку (необязательно)"  onChange={setImage2}/>
                <Input placeholder="ссылка на картинку (необязательно)" onChange={setImage3}/>
                <Input placeholder="ссылка на картинку (необязательно)" onChange={setImage4}/>
                <Input placeholder="ссылка на картинку (необязательно)" onChange={setImage5}/>

                <button className="t-bg-indigo-500 hover:t-bg-indigo-700 lg:t-w-[60%] t-p-2 t-rounded-md t-text-white t-font-bold" onClick={buttonOnClick}>Отправить</button>
            
                </div>
            </div>
        </Main>
    );
}

export default CreateArticle;

