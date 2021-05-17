import React from 'react';
import {Jumbotron} from "react-bootstrap";
import '../App.css'

const Dummy = () => {
    return (
        <Jumbotron fluid className={"jumbo"}>
            <p className={"sec-head"} id={"dummy"}><b>Click-Dummy</b></p>
        </Jumbotron>
    );
}

export default Dummy;
