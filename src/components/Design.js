import React from 'react';
import {
    Jumbotron,
    Container,
    Image,
    Row,
    Col,
    Card,
    ListGroup,
    ListGroupItem,
    CardDeck, Carousel,
} from "react-bootstrap";
import '../App.css'
import Moodboard from './files/HolidayVR.jpg'
import CardImage1 from './files/cityliving.png'
import CardImage2 from './files/random.png'
import CardImage3 from './files/paris.png'
import Image1 from './files/unity1.jpg'
import Image2 from './files/unity2.PNG'


const Design = () => {
    return (
        <Jumbotron fluid className={"jumbo"} id={"design"}>
            <Row className="hazard">
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
                <Col>DO NOT ENTER</Col>
            </Row>
            <h2 className={"sec-head"}><u>Projektdesign</u></h2>
            <Container>
                <Col>
                    <Image src={Moodboard} rounded fluid></Image>
                </Col>
                <hr className={"spacer"}/>
                <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    <Card className={"Designcard"} border={"dark"} style={{flex: '1'}}>
                        <Card.Img variant="top" src={CardImage1}/>
                        <Card.Body className={"Designcardbody"}>
                            <Card.Title><b>Besuchen Sie bekannte Orte im neuen Setting</b></Card.Title>
                            <Card.Text>Betrachten sie die Welt aus mehreren neuen Perspektiven:</Card.Text>
                        </Card.Body>
                        <ListGroup className={"list-group-flush"}>
                            <ListGroupItem> 1000 Jahre in die Zukunft</ListGroupItem>
                            <ListGroupItem>Die Natur hohlt sich ihren Lebensraum zurück</ListGroupItem>
                            <ListGroupItem>Abstrahierte Neuinterpretation</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card className={"Designcard"} border={"dark"} style={{flex: '1', marginLeft: '5px'}}>
                        <Card.Img variant="top" src={CardImage2}/>
                        <Card.Body className={"Designcardbody"}>
                            <Card.Title><b>Entdecken Sie neue Orte auf der ganzen Welt</b></Card.Title>
                            <Card.Text>Jeden Tag etwas neues entdecken</Card.Text>
                        </Card.Body>
                        <ListGroup className={"list-group-flush"}>
                            <ListGroupItem>Zufällige Orte Weltweit</ListGroupItem>
                            <ListGroupItem>HolidayVR bringt Sie wohin Sie möchten</ListGroupItem>
                            <ListGroupItem>Entdecken aus einer neuen Perspektive</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card className={"Designcard"} border={"dark"} style={{flex: '1', marginLeft: '5px'}}>
                        <Card.Img variant="top" src={CardImage3}/>
                        <Card.Body className={"Designcardbody"}>
                            <Card.Title><b>Besuchen Sie die Touristen Hotspots auf der ganzen Welt</b></Card.Title>
                            <Card.Text>Besuchen Sie die bekanntesten Orte der Welt bequem von Zuhause</Card.Text>
                        </Card.Body>
                        <ListGroup className={"list-group-flush"}>
                            <ListGroupItem>Große Städte und Denkmäler</ListGroupItem>
                            <ListGroupItem>Sightseeing goes VR</ListGroupItem>
                            <ListGroupItem>Attraktionen</ListGroupItem>
                        </ListGroup>
                    </Card>
                </CardDeck>
                <Card border={"dark"} style={{marginTop: '20px', backgroundColor: '#181818'}}>
                    <Card.Title><h2 className={"sec-head"} style={{marginTop: '10px'}}><u>3D-Visualisierung</u></h2>
                    </Card.Title>
                    <Card.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className={"d-block w-100"}
                                    src={Image1}
                                    width={"20px"}
                                    height={"10%"}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={"d-block w-100"}
                                    src={Image2}
                                    width={"20px"}
                                    height={"10%"}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
            </Container>
        </Jumbotron>
    );
}

export default Design;
