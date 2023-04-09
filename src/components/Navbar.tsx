import React from "react";
import { FcSportsMode} from "react-icons/fc";
import { Layout } from "./Layout";
import { NavItem } from "./NavItem";

interface NavbarProps {
    currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
    return (
        <nav className="shadow-2xl w-full">
            <div className="flex justify-center bg-zinc-800 w-full p-4">
                <h1 className="text-base lg:text-2xl text-white font-bold text-center">Школьный Спортивный Клуб Спасской средней школы в Непотягово</h1>    
            </div>
            <Layout>
                <div className="flex flex-row justify-center lg:justify-start items-center gap-2 px-2">
                    <FcSportsMode className="hidden sm:inline-block h-12 w-12"/>
                    <NavItem isCurPage={currentPage === '/'}>Главная</NavItem>
                    <NavItem isCurPage={currentPage === '/disciplines'} href="/disciplines">Дисциплины</NavItem>
                    <NavItem isCurPage={currentPage === '/about'} href="/about">О клубе</NavItem>
                </div>
            </Layout>
        </nav>
    );
}