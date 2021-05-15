import { React } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider-1.png";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";

export default function Slider(){
    const images = [slider1, slider2, slider3];
    return(
        <>
            <Carousel className="rounded">
                {
                    images.map(function(image, index){
                        return(
                            <Carousel.Item key={index} className="rounded">
                                <img
                                className="d-block w-100 rounded"
                                src={image}
                                alt="Second slide"
                                />
                              
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>

        </>
    );

}