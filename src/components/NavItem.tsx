import React from "react";
import Link from "next/link";

interface NavItemProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    href?: string;
    isCurPage: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ children, href = "/", isCurPage = false }) => {
    return (
        <Link href={href}>
            <div className={`text-xs 2xs:text-base xs:text-lg sm:text-xl py-4 px-2 lg:px-4 ${ !isCurPage ? "bg-white" : "bg-indigo-200"} hover:bg-slate-400`}>
                { children }
            </div>
        </Link>
    );
}