import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="t-flex t-justify-center t-items-center">
            <div className="t-w-full xl:t-w-[80%] 2xl:t-w-[70%] 3xl:t-w-[60%]">
                { children }
            </div>
        </div>
    );
}