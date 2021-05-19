import React from 'react';
import logo from "../logo.svg";
import new_logo from './files/logo.png'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
            <Navbar.Brand>
                <img src={logo} height="45px"/>
            </Navbar.Brand>

            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-center">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#info">Projektidee</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#process">Prozess</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#design">Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#dummy">Click-Dummy</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;
