import React from 'react';
import {Container, Jumbotron, Badge} from "react-bootstrap";
import Vid from './files/Fall - 23881.mp4'
import '../App.css'

const Frontpage = () => {
    return (
        <Container>
            <video autoPlay loop muted className={"bg-video"}>
                <source src={Vid}/>
            </video>
            <Container>
                <h1>HolidayVR</h1>
            </Container>
        </Container>
    );
}

export default Frontpage;
