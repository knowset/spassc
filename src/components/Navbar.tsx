import { FC, useCallback, useEffect, useState } from "react";
import { DropdownNavItem } from "./DropdownNavItem";
import { Layout } from "./Layout";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

interface NavbarProps {
    currentPage?: string;
}

//  новости клуба

//  # Мероприятия
//  фото с мероприятий, видео с мероприятий
//
//  # Статьи о спорте
//  Знаменитые спортсмены региона
//  спортивные достижения
//  историю спорта (те интересные факты о спорте)
//
//  # Интервью

const dropdownNavItemVarsForMobile = [
    {
        id: 1,
        title: "Главная",
        route: ""
    },{
        id: 2,
        title: "Мероприятия",
        route: "events"
    },{
        id: 3,
        title: "Интервью",
        route: "interviews"
    },
    {
        id: 4,
        title: "Знаменитые спортсмены региона",
        route: "famous_sportsmen"
    },{
        id: 5,
        title: "Спортивные достижения",
        route: "achievements"
    },{
        id: 6,
        title: "История спорта",
        route: "sports_history"
    }
]

const dropdownNavItemVars = [
    {
        id: 1,
        title: "Знаменитые спортсмены региона",
        route: "famous_sportsmen"
    },{
        id: 2,
        title: "Спортивные достижения",
        route: "achievements"
    },{
        id: 3,
        title: "Историю спорта",
        route: "sports_history"
    },
]


export const Navbar: FC<NavbarProps> = ({ currentPage }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [scroll, setSroll] = useState(0)
    const [lastScroll, setLastScroll] = useState(0);
  
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll); 
    }, [])

    const toggleDropdown = useCallback(() => {
        setShowDropdown((current) => !current);
        setLastScroll(document.body.scrollTop || 
            document.documentElement.scrollTop)
    }, []);

    const listenToScroll = () => {
    // let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setSroll(winScroll);
    if (winScroll !== lastScroll) {
        setShowDropdown(false);
    }
    };

    return (
        <nav className="t-shadow-2xl t-w-full t-fixed t-z-50 t-bg-white">
            <div className="t-flex t-justify-center t-bg-zinc-800 t-w-full t-p-4">
                <h1 className="t-text-[0.7rem] xs:t-text-xs lg:t-text-xl t-text-white t-font-bold t-text-center t-m-0 t-w-[70%]">Школьный Спортивный Клуб Спасской средней школы в Непотягово</h1>    
            </div>
            <Layout>

            <div className="t-hidden sm:t-flex t-flex-row t-justify-between t-items-center t-gap-2 t-px-2">
                <Logo />
                <div className="t-flex t-flex-row">
                <NavItem isCurPage={currentPage === '/'} href="/">Главная</NavItem>
                <NavItem isCurPage={currentPage === '/events'} href="/events">Мероприятия</NavItem>
                <NavItem isCurPage={currentPage === '/interviews'} href="/interviews">Интервью</NavItem>
                {/* <NavItem isCurPage={currentPage === '/achievements'} href="/achievements">Спортивные достижения</NavItem>
                <NavItem isCurPage={currentPage === '/'}>Интервью</NavItem> */}
                <DropdownNavItem onClick={toggleDropdown} toggleDropdown={toggleDropdown} showDropdown={showDropdown} title="Статьи о спорте" dropdownNavItemVars={dropdownNavItemVars}/>
                </div>
            </div>
            </Layout>
            <div className="t-flex sm:t-hidden t-flex-row t-justify-between t-items-center t-gap-2 t-px-2 t-bg-white">
                <Logo />
                <DropdownNavItem  onClick={toggleDropdown} showDropdown={showDropdown} toggleDropdown={toggleDropdown} title="Меню" dropdownNavItemVars={dropdownNavItemVarsForMobile}/>
            </div>
        </nav>
    );
}