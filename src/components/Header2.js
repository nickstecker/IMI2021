import React from 'react';
import logo from "../logo.svg";
import new_logo from './files/logo.png'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <Navbar style={{backgroundColor: "black"}} sticky="top" expand="sm">
            
            <Navbar.Brand>
                <img src={logo} height="45px"/>
            </Navbar.Brand>
        
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-between">
                    <p style={{marginLeft: "10px"}}></p>
                    <Nav>
                    <Nav.Item>
                        <Nav.Link href="#info" style={{color: "white"}}>Projektidee</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#process" style={{color: "white"}}>Prozess</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#design" style={{color: "white"}}>Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#new" style={{color: "white"}}>Neues</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <a href="/main"><button className={"noselect"} style={{marginRight: "10px"}}></button></a>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Header