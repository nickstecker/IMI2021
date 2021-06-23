import React from 'react';
import {Container, Image, Jumbotron, Row, Col} from "react-bootstrap";
import '../App.css'
import Architecture from "./files/Architecture.png"
import Technik from './files/technik.png'

const Process = () => {
    return (
        <Jumbotron fluid className={"jumbo2"} id={"process"}>
            <h2 className={"sec-head"}><u><b>Projektprozess</b></u></h2>
            <Container>
                <Row>
                    <Col>
                        <Image src={Architecture} style={{width: '80%'}}></Image>
                    </Col>
                    <Col>

                        <h3>Webapp</h3>
                        <ul className={"textContainer"}>
                            <li>Nutzer sich über das Projekt informieren</li>
                            <li>Nutzer bekommt eine Übersicht über die verwendeten Technologien</li>
                            <li>Nutzer kann auf VR-Anwendung zugreifen</li>
                            <li>Umgesetzt mit React.js und Bootstrap</li>
                        </ul>
                        <hr className={"spacer"}/>
                        <h3>VR-Anwendung</h3>
                        <ul className={"textContainer"}>
                            <li>Mapdaten von Google Street View</li>
                            <li>Soundgenerierung in Unity</li>
                            <li>First Person Ansicht durch Unity</li>
                            <li>Eigene Touren generieren</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Process;
