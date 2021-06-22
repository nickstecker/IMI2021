import React from 'react';
import {Jumbotron, Row, Col} from "react-bootstrap";
import '../App.css'

const Tschernobyl = () => {
    return (
        <Jumbotron fluid className={"jumbo"} id={"tschernobyl"}>
            <Row className="hazard" style={{marginRight: "10%", marginLeft: "10%"}}>
                <Col><p className="sec-head"><b>EXPLORE THE FORBIDDEN</b></p></Col>
            </Row>
        
            <hr className={"spacer"}/>
            
            <div className={"textContainer"}>
                <p>Holiday VR bringt dich an Orte die kaum oder gar nicht zu erreichen sind.
                Lassen sie sich in das Post-Apokalyptische Tschernobyl entführen und erleben sie hautnah wie sich die Natur alles zurück hohlt.
                Eine unvergessliche VR Experience für jeden der über den Tellerand hinausschauen möchte und bequem von Zuhause Abenteuer erleben möchte.</p>
            </div>
        
        </Jumbotron>
    );
}

export default Tschernobyl;