import { FC, useCallback, useState } from "react";
import { Input } from "./Input";
import { InputList } from "./InputList";

interface CreateFormProps {
    articleName: string;
    articleTitle: string;
}

const postArticles = async (articleName: string, body: string) => {
    const res = await fetch("/api/" + articleName, {
        method: "POST",
        body: body
    })
};

export const CreateForm: FC<CreateFormProps> = ({ articleName, articleTitle }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [inputImageList, setInputImageList] = useState([{ id: 0, value: "" }]);

    const handleAddInput = (e: any) => {
        e.preventDefault();
        addInputImage()
    }

    const handleSubmit = async () => {
        let clearInputList: any[] = [];
        inputImageList.map((item) => {
            if (item.value.includes("http")) {
                clearInputList.push({id: clearInputList.length, value: item.value});
            }
        });
        

        const body = JSON.stringify({ title, content, images: clearInputList });
        await postArticles(articleName, body);
    }

    const addInputImage = () => {
        let copy = [...inputImageList];
        if (inputImageList.length < 10) {
            copy = [...copy, { id: inputImageList.length, value: ""}];
            setInputImageList(copy);
        }
    }

    return (
        <div className="t-flex t-flex-col t-justify-center t-items-center t-gap-4">
            <p className="t-text-2xl t-font-bold t-text-center">Создать статью для страницы: { articleTitle }</p>
            <Input placeholder="название" onChange={(e) => setTitle(e)}/>
            <Input type="" placeholder="текст" onChange={(e) => setContent(e)}/>

            <InputList inputList={inputImageList} setInputList={setInputImageList}/>

            { inputImageList.length < 10 ? <button onClick={handleAddInput} className="t-bg-indigo-300 hover:t-bg-indigo-400 t-p-2 t-rounded-md t-text-white t-font-bold t-w-full xs:t-w-[90%] md:t-w-[70%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]">Добавить поле</button> : ""}

            <button onClick={handleSubmit} className="t-bg-indigo-500 hover:t-bg-indigo-700 t-p-2 t-rounded-md t-text-white t-font-bold t-w-full xs:t-w-[90%] md:t-w-[70%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]">Отправить</button>
            
        </div>
    );
}