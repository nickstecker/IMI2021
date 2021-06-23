import React from 'react';
import {Container, Jumbotron, Badge, Image, Col} from "react-bootstrap";
import Vid from './files/bg1.jpg'
import '../App.css'
import Logo from "./files/logo.png";
import TextTransition, {presets} from "react-text-transition";


const TEXTS = [
    "Beach",
    "Sea",
    "City",
    "Village",
    "Past",
    "Future",
]

const Frontpage = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            1000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <Container>
            <Col>
                <Image src={Logo} fluid ></Image>
                <hr className={"spacer"} style={{color: 'white', height: '2px'}}/>
                <section style={{visibility: "true", fontSize: "120px", color: 'black', position: 'sticky', webkitTextStroke: '1px white', textAlign: 'center'}}>
                <TextTransition text={ TEXTS[index % TEXTS.length] }
                                springConfig={presets.wobbly} style={{visibility: "true", fontSize: "100px", color: 'white'}} inline={"true"}/>
                     VR
                </section>
            </Col>
        </Container>
    );
}

export default Frontpage;
