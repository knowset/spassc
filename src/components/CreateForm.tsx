import { FC, useCallback, useState } from "react";
import { Input } from "./Input";
import { InputList } from "./InputList";

interface CreateFormProps {
    title: string;
}

export const CreateForm: FC<CreateFormProps> = ({ title }) => {
    const [inputImageList, setInputImageList] = useState([{ id: 0, value: "" }]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addInputImage()
    }

    const addInputImage = () => {
        let copy = [...inputImageList];
        if (inputImageList.length < 10) {
            copy = [...copy, { id: inputImageList.length, value: ""}];
            setInputImageList(copy);
        }
        console.log(inputImageList);
    }

    return (
        <div className="t-flex t-flex-col t-justify-center t-items-center t-gap-4">
            <p className="t-text-2xl t-font-bold">Создать статью для страницы: { title }</p>
            <Input placeholder="название" onChange={() => console.log("HERE")}/>
            <Input placeholder="текст" onChange={() => console.log("HERE")}/>

            <InputList inputList={inputImageList} setInputList={setInputImageList}/>

            {/* { inputImageList && inputImageList.map((input) => (
                
                <Input key={input.id} placeholder="ссылка на картинку (необязательно)" onChange={() => console.log("HERE")}/>
                ))} */}
            { inputImageList.length < 10 ? <button onClick={handleSubmit} className="t-bg-indigo-300 hover:t-bg-indigo-400 lg:t-w-[60%] t-p-2 t-rounded-md t-text-white t-font-bold">Добавить</button> : ""}
            {/* 
            <Input placeholder="ссылка на картинку (необязательно)"  onChange={() => console.log("HERE")}/>
            <Input placeholder="ссылка на картинку (необязательно)" onChange={() => console.log("HERE")}/>
            <Input placeholder="ссылка на картинку (необязательно)" onChange={() => console.log("HERE")}/>
            <Input placeholder="ссылка на картинку (необязательно)" onChange={() => console.log("HERE")}/> */}

            <button className="t-bg-indigo-500 hover:t-bg-indigo-700 lg:t-w-[60%] t-p-2 t-rounded-md t-text-white t-font-bold" onClick={() => console.log("HERE")}>Отправить</button>
            
        </div>
    );
}