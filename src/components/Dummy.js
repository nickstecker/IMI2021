import React from 'react';
import {Jumbotron} from "react-bootstrap";
import '../App.css'

const Dummy = () => {
    return (
        <Jumbotron fluid className={"jumbo"} id={"dummy"}>
            <p className={"sec-head"}><b>Click-Dummy</b></p>
        </Jumbotron>
    );
}

export default Dummy;
