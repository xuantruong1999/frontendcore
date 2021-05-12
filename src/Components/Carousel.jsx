import { useState } from "react";
import slider1 from "../images/slider-1.png";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";
import "../Sass/Carousel.scss";

export default function Carousel(){
    const images = [slider1, slider2, slider3];
    var [currentIndex, setIndex] = useState(0);
    
    const previous = () =>{
        let lastIndex = images.length - 1;
        let nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        setIndex(currentIndex = nextIndex)
    };

    const next = () =>{
        let lastIndex = images.length - 1;
        let nextIndex = currentIndex === lastIndex  ? 0 : currentIndex + 1;
        setIndex(currentIndex = nextIndex)
    };

    const SlideContent = ({src, active}) => {
        var nameclass = active ? "h-100 w-100 rounded image-slider d-block" : "h-100 w-100 rounded image-slider abc";
        return(
            <>
                <img src={src} className={nameclass} alt=""/>
            </>
        );
    }

    return(
        <>
        <div className="h-100 position-relative overflow-hidden w-100 rounded">
            <div id="sliders">
               {
                   images.map((slide, index) => {
                       return(<SlideContent src={slide} active ={currentIndex === index}></SlideContent>);
                   })
               }
            </div>
            <button className="position-absolute" onClick={previous} style={{height: "70px", left: "0px", top:"40%"}}>{"<"}</button>
            <button className="position-absolute" onClick={next} style={{height: "70px", right: "0px", top:"40%"}}>{">"}</button>
        </div>
    </>
    );
}   




