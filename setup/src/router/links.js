import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";


function NavigationLinks() {
    return (
        <>
            <Nav.Link as={Link} to="/">Home</Nav.Link>,
            <Nav.Link as={Link} to="/app">App</Nav.Link>,
            <Nav.Link as={Link} to="/about">About</Nav.Link>,
            <Nav.Link as={Link} to="/login">Login</Nav.Link>,
            <Nav.Link as={Link} to="/user">User</Nav.Link>,
        </>
    )
}


export default NavigationLinks;
