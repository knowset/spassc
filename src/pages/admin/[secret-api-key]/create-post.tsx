import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Main } from "../../../components/Main";
import { Formik, Form, Field } from "formik";
import { apiCreatePost } from "../../../../lib/apiComm";
// import { isServer } from "../../../../utils/isServer";


interface CreatePostFormValues {
    title: string;
    desc: string;
}



const CreatePost = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    console.log(title);
    console.log(content);

    const buttonOnClick = async () => {
        await createPost();
    }

    const createPost = async () => {
        const status = await apiCreatePost(title, content, "");

        console.log("STATUS: ", status);
    }
    
    return (
        <Main currentPage="">
            <div>
                {/* <Formik initialValues={{ title: '', content: '' }}
                        onSubmit={async (values, errors) => {
                            // try {
                            //     await getPosts().insert({title: values.title, content: values.content, images: ""});
                            // } catch {}

                        }}
                >
                    <Form>
                        <Field name="title" />
                        <Field name="content" />
                        <button>submit</button>
                    </Form>
                </Formik> */}


                <input onChange={(e) => setTitle(e.target.value)}/>
                <input onChange={(e) => setContent(e.target.value)}/>
                <button onClick={buttonOnClick}>CLICK</button>
            
            </div>
        </Main>
    );
}

// CreatePost.getInitialProps = async (ctx: any) => {

//     console.log(ctx);
//     return { createPost: createPost() };
// }

export default CreatePost;

