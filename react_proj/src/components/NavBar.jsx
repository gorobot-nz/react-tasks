import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { routes } from "./AppRouter";
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Books Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate(routes.BOOKS)}>Books</Nav.Link>
                    <Nav.Link onClick={() => navigate(routes.CART)}>Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar