import './index.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import URLs from '../../URLs'


function filter_routes(data) {
    return Number.isInteger(data.navbar_order)
}


function sort_routes(first, second) {
    return first.navbar_order - second.navbar_order
}


function get_routes(data) {
    return <Nav.Link as={Link} to={data.path}>{data.name}</Nav.Link>
}


function NavigationHeader(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">{props.name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {
                            URLs
                                .filter(filter_routes)
                                .sort(sort_routes)
                                .map(get_routes)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavigationHeader;
