import React from 'react';
import logo from "../logo.svg";
import new_logo from './files/logo.png'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <Navbar className="justify-content-end" style={{backgroundColor: "black"}} sticky="top">
                <a style={{marginRight: "10px"}} href="/main"><button className={"noselect"}></button></a>
        </Navbar>

    );
}

export default Header
