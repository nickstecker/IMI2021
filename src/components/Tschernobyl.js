import React from 'react';
import {Jumbotron, Row, Col, Container, Image} from "react-bootstrap";
import '../App.css'
import Moodboard from './files/Tschernobyl_Moodboard.jpg'

const Tschernobyl = () => {
    return (
        <Jumbotron fluid className={"jumbo"} id={"tschernobyl"}>
            <Row className={"hazard sec-head-2"}>
                <Col><p><b>EXPLORE THE FORBIDDEN</b></p></Col>
            </Row>
        
            <hr className={"spacer"}/>
            
            <div className={"textContainer2"}>
                <p>Holiday VR bringt dich an Orte die kaum oder gar nicht zu erreichen sind.
                Lassen sie sich in das Post-Apokalyptische Tschernobyl entführen und erleben sie hautnah wie sich die Natur alles zurück hohlt.
                Eine unvergessliche VR Experience für jeden der über den Tellerand hinausschauen möchte und bequem von Zuhause Abenteuer erleben möchte.</p>
            </div>
            <Container>
                <Col>
                    <Image src={Moodboard} rounded fluid/>
                </Col>
            </Container>
        
        </Jumbotron>
    );
}

export default Tschernobyl;