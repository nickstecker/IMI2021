import React from 'react';
import {Container, Row, Col, Jumbotron, Alert, Button} from "react-bootstrap";
import '../App.css'

const Dummy = () => {
    return (
        <Jumbotron fluid className={"jumbo"} id={"dummy"}>
            <Row className="hazard">
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
            </Row>
            <iframe style={{width:"100%", height:"480px", border: null,  overflow: "hidden" }} src="https://poly.google.com/view/6PRDAc0a5J0/embed?chrome=min"
            frameBorder="0" allowvr="yes"
            allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowFullScreen
            mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""/>
        </Jumbotron>
    );
}

export default Dummy;
