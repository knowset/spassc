import { Input } from "./Input";
import { FC } from "react";

interface InputListProps {
    inputList: any[];
    setInputList: any;
}

export const InputList: FC<InputListProps> = ({ inputList, setInputList }) => {
    const handleInput = (id: number, value: string) => {
        const input = inputList.find(x => x.id === id);
        const index = inputList.indexOf(input);
        inputList[index].value = value;
        setInputList(inputList);
    }
    return (
        <>
        { inputList.map((input) => (
            
            <Input key={input.id} placeholder="ссылка на картинку (необязательно)" onChange={(e) => handleInput(input.id, e)}/>
        ))}
        {/* <button onClick={() => 1} className="t-bg-indigo-300 hover:t-bg-indigo-400 lg:t-w-[60%] t-p-2 t-rounded-md t-text-white t-font-bold">Добавить</button> */}
        </>
    );
}