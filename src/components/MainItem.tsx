import React from "react";
import { CarouselItem } from "./CarouselItem";

interface MainItemProps {
    children: React.ReactNode;
    images: any;
    reverse?: boolean;
}

export const MainItem: React.FC<MainItemProps> = ({ children, images, reverse = false }) => {
    console.log("IMGS: ",images);
    return (
        <div className={`t-mx-2 t-flex t-flex-col t-shadow-2xl t-border t-rounded-md`}>
            {images ? <div className="t-h-[100] t-w-full t-flex t-justify-center">

            <CarouselItem imagesString={images}/>
            </div> : ''}
            <div className="t-flex t-flex-col t-py-4 t-lg:py-0 t-px-4 t-gap-2">
            {children}
            </div>
        </div>
    );
}