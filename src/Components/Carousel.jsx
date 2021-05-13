import { useEffect} from "react";
import slider1 from "../images/slider-1.png";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";
import "../Sass/Carousel.scss";

export default function Carousel(){

    const images = [slider1, slider2, slider3];
    var [currentIndex, setIndex] = useState(1);

    const previous = () =>{
        let lastIndex = images.length;
        let nextIndex = currentIndex === 1 ? lastIndex : currentIndex - 1;
        setIndex(currentIndex = nextIndex)
    };

    const next = () =>{
        let lastIndex = images.length;
        let nextIndex = currentIndex === lastIndex  ? 1 : currentIndex + 1;
        setIndex(currentIndex = nextIndex)
    };

        return(
        <>
        <div className="h-100 position-relative w-100 rounded">
            <img src={images[currentIndex-1]} alt="img" className="img-fluid h-100 w-100 rounded image-slider"/> 
            <button className="position-absolute" onClick={previous} style={{height: "70px", left: "0px", top:"40%"}}>{"<"}</button>
            
            <button className="position-absolute" onClick={next} style={{height: "70px", right: "0px", top:"40%"}}>{">"}</button>
        </div>
    </>
    );
}
