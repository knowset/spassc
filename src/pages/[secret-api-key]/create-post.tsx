import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const CreatePost = ({ st }: any) => {
    const router = useRouter();
    useEffect(() => {
        if (process.env.SECRET_API_KEY || "123123" != router.query["secret-api-key"]) {
            router.push("/");
        }
    }, []);
    
    return (
        <div>1231111</div>
    );
}

CreatePost.getInitialProps = async (ctx: any) => {
    console.log("123123", ctx);
    return { st: "1" };
}

export default CreatePost;

