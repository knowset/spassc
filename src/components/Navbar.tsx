import React from "react";
import { FcSportsMode} from "react-icons/fc";
import { Layout } from "./Layout";
import { NavItem } from "./NavItem";

interface NavbarProps {
    currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
    return (
        <nav className="t-shadow-2xl t-w-full">
            <div className="t-flex t-justify-center t-bg-zinc-800 t-w-full t-p-4">
                <h1 className="t-text-base lg:t-text-2xl t-text-white t-font-bold t-text-center">Школьный Спортивный Клуб Спасской средней школы в Непотягово</h1>    
            </div>
            <Layout>
                <div className="t-flex t-flex-row t-justify-center lg:t-justify-start t-items-center t-gap-2 t-px-2">
                    <FcSportsMode className="t-hidden sm:t-inline-block t-h-12 t-w-12"/>
                    <NavItem isCurPage={currentPage === '/'}>Главная</NavItem>
                    <NavItem isCurPage={currentPage === '/disciplines'} href="/disciplines">Спортивные достижения</NavItem>
                    <NavItem isCurPage={currentPage === '/about'} href="/about">Интервью</NavItem>
                </div>
            </Layout>
        </nav>
    );
}