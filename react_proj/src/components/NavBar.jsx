import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { routes } from "./AppRouter";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const NavBar = () => {
    const navigate = useNavigate()
    const { isAuth } = useSelector(state => state.user)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Books Store</Navbar.Brand>
                <Nav className="me-auto">
                    {isAuth ?
                        <>
                            <Nav.Link onClick={() => navigate(routes.BOOKS)}>Books</Nav.Link>
                            <Nav.Link onClick={() => navigate(routes.CART)}>Cart</Nav.Link>
                        </>
                        : 
                        <>
                            <Nav.Link onClick={() => navigate(routes.SIGNUP)}>Sign Up</Nav.Link>
                            <Nav.Link onClick={() => navigate(routes.SIGNIN)}>Sign In</Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar