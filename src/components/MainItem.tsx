import React from "react";

interface MainItemProps {
    children: React.ReactNode;
    imageLink: string;
    reverse?: boolean;
}

export const MainItem: React.FC<MainItemProps> = ({ children, imageLink, reverse = false }) => {
    return (
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <img src={imageLink} className='w-full lg:w-[50%] lg:rounded-md shadow-2xl object-cover'/>
            <div className="flex flex-col py-4 lg:py-0 px-4 gap-2">
            {children}
            </div>
        </div>
    );
}