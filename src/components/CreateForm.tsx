import { FC, useCallback, useState } from "react";
import { BarLoader } from "react-spinners";
import { Input } from "./Input";
import { InputList } from "./InputList";
import { MainItem } from "./MainItem";

interface CreateFormProps {
    articleName: string;
    articleTitle: string;
}

const postArticles = async (articleName: string, body: string) => {
    const res = await fetch("/api/" + articleName, {
        method: "POST",
        body: body
    });

    return res;
};

export const CreateForm: FC<CreateFormProps> = ({ articleName, articleTitle }) => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [inputImageList, setInputImageList] = useState([{ id: 0, value: "" }]);
    const [articlePreview, setArticlePreview] = useState({ref: null, ts: "", data: {title: "", content: "", images: ""}} as {ref: any;
        ts: any;
        data: {
            title: string;
            content: string;
            images: string;
        }});

    const handleAddInput = (e: any) => {
        e.preventDefault();
        addInputImage()
    }

    const handleSubmit = async () => {
        setLoading(true);
        let clearInputList: any[] = [];
        inputImageList.map((item) => {
            if (item.value.includes("http")) {
                clearInputList.push({id: clearInputList.length, value: item.value});
            }
        });
        

        const body = JSON.stringify({ title, content, images: clearInputList });
        const res = await postArticles(articleName, body);
        if (res.status === 200) {
            setArticlePreview({ ref: null, ts: "", data: { title, content, images: JSON.stringify(clearInputList) } })
        }
        setLoading(false);
    }

    // setArticlePreview({ title: title, content: content,  })

    const addInputImage = () => {
        let copy = [...inputImageList];
        if (inputImageList.length < 10) {
            copy = [...copy, { id: inputImageList.length, value: ""}];
            setInputImageList(copy);
        }
    }

    return (
        <>
        <div className="t-flex t-flex-col t-justify-center t-items-center t-gap-4">
            <p className="t-text-2xl t-font-bold t-text-center">Создать статью для страницы: { articleTitle }</p>
            <Input placeholder="название" onChange={(e) => setTitle(e)}/>
            <Input type="" placeholder="текст" onChange={(e) => setContent(e)}/>

            <InputList inputList={inputImageList} setInputList={setInputImageList}/>

            { inputImageList.length < 10 ? <button onClick={handleAddInput} className="t-bg-indigo-300 hover:t-bg-indigo-400 t-p-2 t-rounded-md t-text-white t-font-bold t-w-full xs:t-w-[90%] md:t-w-[70%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]">Добавить поле</button> : ""}

            <button onClick={handleSubmit} className="t-h-10 t-bg-indigo-500 hover:t-bg-indigo-700 t-p-2 t-rounded-md t-text-white t-font-bold t-w-full xs:t-w-[90%] md:t-w-[70%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]">{ !loading ? "Отправить" : <div className="t-h-full t-flex t-justify-center t-items-center"><BarLoader color="#ffffff"/></div>}</button>
            
        </div>
        <hr className="t-mt-8" />
        { !!articlePreview.data?.title && !!articlePreview.data?.content ? (<div className="t-flex t-flex-col t-justify-center t-my-2 t-gap-2">
            <div className="t-p-4 t-text-xl">Статья успешно создана</div>
            { !!articlePreview.data && (
                <MainItem article={articlePreview} displayShowMoreButton={false}/>
            ) }
            </div>) : ''}
        </>
    );
}