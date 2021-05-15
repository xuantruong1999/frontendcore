import React from 'react';
import { Row, Col} from "react-bootstrap";
import Slider from "./Slider";
import "../Sass/components/home.scss";

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="mx-auto-2 mx-auto-lg-4 mx-auto-md-3 p-3" id="banner"> 
                    <Row className="h-100">
                        <Col xs={7} className="pr-0 pr-1 rounded" id="banner-carousel">
                            <Slider />
                        </Col>
                        <Col xs={5} className="pl-0 rounded">
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