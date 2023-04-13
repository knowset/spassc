import { FC } from "react";
import Link from "next/link";

interface NavItemProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    href?: string;
    isCurPage: boolean;
    p?: string;
    m?: string;
    textSize?: string;
    border?: string;
    bg?: string;
}

interface NavItemContentProps extends NavItemProps {}

// const onScroll = useCallback(() => setSroll(Math.round(window.scrollY)), []);
const NavItemContent: FC<NavItemContentProps> = ({ children, textSize, p, border, bg }) => {
    return (
        <div  className={`t-cursor-pointer t-flex t-flex-row t-justify-center t-items-center t-text-center ${ textSize ? textSize : "t-text-sm 2xs:t-text-base xs:t-text-lg lg:t-text-xl"} ${ p ? p : "t-py-2 t-px-2 lg:t-px-4"} t-text-black sm:hover:t-bg-indigo-200 ${border ? border : ""} t-transition-colors t-duration-200`}>
            { children }
        </div>
    );
}

export const NavItem: FC<NavItemProps> = ({ children, href, isCurPage = false, p, m, textSize, border, bg }) => {
    return (
        <>
        { href ? ( <Link className="t-no-underline" href={href}>
            <NavItemContent isCurPage={isCurPage} textSize={textSize} p={p} border={border} bg={bg}>
                { children }
            </NavItemContent>
        </Link>) : (
            <NavItemContent isCurPage={isCurPage} textSize={textSize} p={p} border={border} bg={bg}>
                { children }
            </NavItemContent>
        )}
        </>
    );
}