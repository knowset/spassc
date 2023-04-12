import React from "react";
import Carousel from "react-bootstrap/Carousel";


interface CarouselItemProps {
    imagesString: any;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({imagesString}) => {
    let images: any[] = [];
    if (typeof imagesString === "string") {
        images = JSON.parse(imagesString);
    }

    return (
        <div className="t-w-full lg:t-w-[72rem]">
        <Carousel>

            { images.map((image => (
            <Carousel.Item key={"carousel_item_" + image.id}>
                <img  key={"id_" + image.id} className="t-h-[16rem] xs:t-h-[24rem] t-w-full lg:t-h-[36rem] lg:t-w-[72rem] t-object-cover t-rounded-t-md" src={image.value} />
            </Carousel.Item>
            )))}
        </Carousel>
        </div>
    );
}