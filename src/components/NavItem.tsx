import React from "react";
import Link from "next/link";

interface NavItemProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    href?: string;
    isCurPage: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ children, href = "/", isCurPage = false }) => {
    return (
        <Link className="t-no-underline" href={href}>
            <div className={`t-text-xs 2xs:t-text-base xs:t-text-lg sm:t-text-xl t-py-4 t-px-2 lg:t-px-4 t-text-black ${ !isCurPage ? "t-bg-white" : "t-bg-indigo-200"} hover:t-bg-slate-400`}>
                { children }
            </div>
        </Link>
    );
}