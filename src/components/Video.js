import React from 'react';
import {Container,Row, Jumbotron, Badge, Image, Col} from "react-bootstrap";
import '../App.css'

const Video = () => {
    return (
        <div>
        <Row className="hazard" style={{width: "100.65%"}}>
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
        </Row>
        <div className="text middle" data-text="Keep Out">
            Keep Out
        </div>
            <div style={{textAlign: "center"}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tJwXL4Toc3w?controls=0"
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
            </div>
        </div>
    );
}

export default Video;