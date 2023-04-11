import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="t-flex t-justify-center t-items-center">
            <div className="t-w-full md:t-w-[90%] lg:t-w-[80%] xl:t-w-[70%] 2xl:t-w-[60%] 3xl:t-w-[50%]">
                { children }
            </div>
        </div>
    );
}