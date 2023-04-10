import { FC, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
    onChange(e:any): any;
}

export const Input: FC<InputProps> = ({onChange, ...props}) => {
    return (
        <input {...props} onChange={(e: any) => onChange(e.target.value)} className="bg-zinc-800 text-white p-2 rounded-md"/>
    );
}