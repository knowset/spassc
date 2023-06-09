import { FC, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement & HTMLTextAreaElement> {
    onChange(e:any): any;
    type?: string;
}

export const Input: FC<InputProps> = ({onChange, type = "input", ...props}) => {
    return (
        type === "input" ? 
            <input {...props} onChange={(e: any) => onChange(e.target.value)} className="t-bg-zinc-800 t-text-white t-p-2 t-rounded-md t-w-full xs:t-w-[90%] md:t-w-[70%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]"/> :
            <textarea {...props} onChange={(e: any) => onChange(e.target.value)} className="t-bg-zinc-800 t-text-white t-p-2 t-rounded-md t-w-full xs:t-w-[90%] md:t-w-[70%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]" />
    );
}