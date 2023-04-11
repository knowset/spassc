import { FC, HTMLProps } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavItem } from "../components/NavItem";
import { motion } from "framer-motion";

interface DropdownNavItemProps extends HTMLProps<HTMLDivElement> {
    title: string;
    dropdownNavItemVars: { id: number, title: string, route: string}[];
    showDropdown: boolean;
}


export const DropdownNavItem: FC<DropdownNavItemProps> = ({ title, dropdownNavItemVars, showDropdown, ...props }) => {
    return (
        <div className="t-inline-flex t-cursor-pointer" {...props}>
            {/* <a
                href="#"
                className="t-px-4 t-py-2 t-text-sm t-text-gray-600 hover:t-text-gray-700 hover:t-bg-gray-50 t-rounded-l-md"
            > */}
            {/* </a> */}

            <div className="t-relative">
                <div className="t-flex t-justify-center t-items-center">

                <NavItem isCurPage={false}>
                    { title }
                    <button data-showDropdown={showDropdown} className="t-flex t-justify-center t-items-center  t-text-base sm:t-text-base t-m-1">{
                        <>
                        <motion.div 
                            animate={{ rotate: showDropdown ? 90 : 270 }}
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
                    animate={{ opacity: showDropdown ? 100 : 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                    }}
                >
                    <div className={`t-fixed sm:t-absolute ${showDropdown ? "" : "t-hidden"} t-px-2 sm:t-px-0 t-right-0 t-z-10 t-w-[100vw] sm:t-w-56 t-mt-4 t-origin-top-right`}>
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