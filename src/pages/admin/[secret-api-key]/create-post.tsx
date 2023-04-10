import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Main } from "../../../components/Main";
import { Formik, Form, Field } from "formik";
import { createPost } from "../../../openDB";
// import { isServer } from "../../../../utils/isServer";




const CreatePost = ({ st }: any) => {
    const router = useRouter();
    // useEffect(() => {
    //     if (process.env.SECRET_API_KEY || "123123" != router.query["secret-api-key"]) {
    //         router.push("/");
    //     }
    // }, []);

    // const crPst = createPost();

    
    return (
        <Main currentPage="">
            <div>
                <Formik initialValues={{ title: '', desc: '' }}
                        onSubmit={async (values, errors) => {
                            // try {
                            //     if (isServer) {
                            //         console.log(isServer)
                            //         // await createPost(title, )
                            //     }
                            // } catch (err) {
                            //     console.log(err);
                            // }

                        }}
                >
                    <Form>
                        <Field name="title" />
                        <Field name="desc" />
                        <button>submit</button>
                    </Form>
                </Formik>
            </div>
        </Main>
    );
}

// CreatePost.getInitialProps = async (ctx: any) => {

//     console.log(ctx);
//     return { createPost: createPost() };
// }

export default CreatePost;

