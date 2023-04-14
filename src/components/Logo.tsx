import Link from "next/link";
import { FcSportsMode } from "react-icons/fc";

export const Logo = () => {
    return (
        <Link href="/">
            <FcSportsMode className="t-cursor-pointer t-h-10 t-w-10 sm:t-h-10 sm:t-w-10"/>
        </Link>        
        );
}