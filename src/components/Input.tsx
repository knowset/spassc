import { FC, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
    onChange(e:any): any;
}

export const Input: FC<InputProps> = ({onChange, ...props}) => {
    return (
        <input {...props} onChange={(e: any) => onChange(e.target.value)} className="t-bg-zinc-800 t-text-white t-p-2 t-rounded-md t-w-[60%]"/>
    );
}