import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full xl:w-[80%] 2xl:w-[70%] 3xl:w-[60%]">
                { children }
            </div>
        </div>
    );
}