import React from "react";
import Carousel from "react-bootstrap/Carousel";


interface CarouselItemProps {
    imagesString: any;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({imagesString}) => {
    let imagesStringArr: string[] = [];
    if (typeof imagesString === "string") {
        imagesStringArr = imagesString.split(";");
        if (imagesStringArr[imagesStringArr.length - 1] === "") {
            imagesStringArr.pop();
        }
    }

    return (
        <div className="t-w-full lg:t-w-[72rem]">
        <Carousel>

            { imagesStringArr.map((image => (
            <Carousel.Item>
                <img className="t-h-[16rem] xs:t-h-[24rem] t-w-full lg:t-h-[36rem] lg:t-w-[72rem] t-object-cover t-rounded-t-md" src={image} />
            </Carousel.Item>
            )))}
        </Carousel>
        </div>
    );
}