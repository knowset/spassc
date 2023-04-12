import { FC, HTMLProps } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavItem } from "../components/NavItem";
import { motion } from "framer-motion";

interface DropdownNavItemProps extends HTMLProps<HTMLDivElement> {
    title: string;
    dropdownNavItemVars: { id: number, title: string, route: string}[];
    showDropdown: boolean;
    toggleDropdown: any;
}


export const DropdownNavItem: FC<DropdownNavItemProps> = ({ title, dropdownNavItemVars, showDropdown, toggleDropdown, ...props }) => {
    return (
        <div className="t-inline-flex t-cursor-pointer" {...props}>
            <div className="t-relative">
                <div className="t-flex t-justify-center t-items-center">

                <NavItem isCurPage={false} onClick={toggleDropdown}>
                    { title }
                    <button className="t-flex t-justify-center t-items-center  t-text-base sm:t-text-base t-m-1">{
                        <>
                        <motion.div 
                            animate={{ rotate: showDropdown ? 90 : 270 }}
                            initial={{ rotate: 270 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.1,
                            }}
                        >
                            <MdArrowBackIosNew />
                        </motion.div>
                        </>
                    }                        
                    </button>
                </NavItem>
                </div>
                <motion.div
                    animate={{ opacity: !showDropdown ? 0 : 100, visibility: !showDropdown ? "hidden" : "visible" }}
                    initial={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                    }}
                >
                    <div className={`t-fixed sm:t-absolute t-px-2 sm:t-px-0 t-right-0 t-z-10 t-w-[100vw] sm:t-w-56 t-mt-4 t-origin-top-right`}>
                        <div className="t-flex t-flex-col t-bg-white t-rounded-md t-shadow-2xl t-p-2 sm:t-px-1 sm:t-py-1 t-gap-1">
                            { dropdownNavItemVars.map((item) => (
                                <NavItem p="t-py-2 t-px-1 lg:t-px-2" textSize="lg:t-text-base" bg="t-bg-zinc-200" border="t-rounded-md"  key={item.id}  isCurPage={false} href={"/" + item.route}>{ item.title }</NavItem>
                                )) }
                            
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}