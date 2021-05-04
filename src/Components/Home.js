import React from 'react';
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import '../css/home.css';

class Home extends React.Component {

    render() {
        return (
            <>
                <Jumbotron className="m-2 m-lg-4 m-md-3">
                    <Container>
                        <Row>
                            <Col>
                                <div>1</div>
                            </Col>
                            <Col>
                                <div>2</div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </>
        );
    }
}
export default Home;