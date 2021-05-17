import {Navbar, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky={"top"} className="justify-content-center">
            <Nav className="mr-auto">
            <Nav.Link href="#info">Projektidee</Nav.Link>
            <Nav.Link href="#process">Prozess</Nav.Link>
            <Nav.Link href="#design">Design</Nav.Link>
            <Nav.Link href="#dummy">Click-Dummy</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;