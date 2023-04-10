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



const CreatePost = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [image5, setImage5] = useState("");

    console.log(title);
    console.log(content);

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

        console.log(images);
        
        const status = await apiCreatePost(title, content, images);

        console.log("STATUS: ", status);
    }
    
    return (
        <Main currentPage="">
            <div className="flex flex-col gap-4">
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

// CreatePost.getInitialProps = async (ctx: any) => {

//     console.log(ctx);
//     return { createPost: createPost() };
// }

export default CreatePost;

