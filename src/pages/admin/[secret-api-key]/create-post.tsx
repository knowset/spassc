import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Main } from "../../../components/Main";
import { Formik, Form, Field } from "formik";
import { apiCreatePost } from "../../../../lib/apiComm";
import { Input } from "@/components/Input";
// import { isServer } from "../../../../utils/isServer";


interface CreatePostFormValues {
    title: string;
    desc: string;
}

const postPost = async ({ title, content, images }: {title: string, content: string, images: string}) => {
    const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title: title, content: content, images: images })
    })
};

const CreatePost = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [image5, setImage5] = useState("");


    const buttonOnClick = async () => {
        await createPost();
    }

    const createPost = async () => {
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
            <div className="t-flex t-flex-col t-gap-4 t-pt-8 t-px-12">
                <>
                <Input placeholder="title" onChange={setTitle}/>
                <Input placeholder="content" onChange={setContent}/>
                <Input placeholder="img 1" onChange={setImage1}/>
                <Input placeholder="img 2"  onChange={setImage2}/>
                <Input placeholder="img 3" onChange={setImage3}/>
                <Input placeholder="img 4" onChange={setImage4}/>
                <Input placeholder="img 5" onChange={setImage5}/>

                <button onClick={buttonOnClick}>CLICK</button>
            
                </>
            </div>
        </Main>
    );
}

export default CreatePost;

