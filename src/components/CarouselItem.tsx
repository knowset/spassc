import React from "react";
import Carousel from "react-bootstrap/Carousel";


interface CarouselItemProps {
    imagesString: any;
    p?: string;
    isView?: boolean;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({imagesString, p, isView = false}) => {
    let images: any[] = [];
    if (typeof imagesString === "string") {
        images = JSON.parse(imagesString);
    }

    return (
        <div className={`t-w-full ${p ? p : ''}`}>
        <Carousel interval={20000}>

            { images.map((image => (
            <Carousel.Item key={"carousel_item_" + image.id}>
                <img  key={"id_" + image.id} className={`t-h-[16rem] xs:t-h-[24rem] t-w-full lg:t-h-[36rem] lg:t-w-[72rem] t-object-cover ${isView ? "" : "t-rounded-t-md"}`} src={image.value} />
            </Carousel.Item>
            )))}
        </Carousel>
        </div>
    );
}