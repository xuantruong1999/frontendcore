import Carousel from './Carousel';
import React from 'react';
import { Row, Col} from "react-bootstrap";
import '../Sass/home.scss';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            images: ["../images/slider-1.png", "../images/slider-2.jpg", "../images/slider-3.jpg"]
        }
    }
    render() {
        return (
            <>
                <div className="mx-auto-2 mx-auto-lg-4 mx-auto-md-3 p-3" id="banner"> 
                    <Row className="h-100">
                        <Col xs={7} className="pr-0 h-100 pr-1" id="banner-carousel">
                            <Carousel></Carousel>
                        </Col>
                        <Col xs={5} className="pl-0 h-100 rounded">
                            <div className="d-flex flex-column align-items-stretch h-100">
                                <div className="banner-image-up mb-1  rounded"></div>
                                <div className="banner-image-down rounded"></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}
export default Home;