import React from 'react';
import {Jumbotron, Alert, Button} from "react-bootstrap";
import '../App.css'

const Dummy = () => {
    return (
        <Jumbotron fluid className={"jumbo"} id={"dummy"}>
            <h2 className={"sec-head"}><u>Click-Dummy</u></h2>
            <br />
            <Button variant={"outline-info"} size={"lg"}>Coming soon..!</Button>
        </Jumbotron>
    );
}

export default Dummy;
