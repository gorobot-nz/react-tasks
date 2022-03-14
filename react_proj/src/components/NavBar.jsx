import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { routes } from "./AppRouter";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setUserAction, setIsAuthAction } from "../redux/user/userReducer"

const NavBar = () => {
    const navigate = useNavigate()
    const { user, isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleButton = () => {
        dispatch(setUserAction({}))
        dispatch(setIsAuthAction(false))
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Books Store</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isAuth ?
                        <>
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => navigate(routes.BOOKS)}>Books</Nav.Link>
                                <Nav.Link onClick={() => navigate(routes.CART)}>Cart</Nav.Link>
                                <Nav.Link onClick={() => navigate(routes.ORDERS)}>Orders</Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    user.roleId === 2 ?
                                        <Button className="ms-5" variant="outline-success" onClick={() => navigate(routes.ADMIN)}>Admin</Button>
                                        :
                                        <></>
                                }
                                <Button className="ms-5" variant="outline-success" onClick={handleButton}>Leave</Button>
                            </Nav>
                        </>
                        :
                        <>
                            <Nav>
                                <Nav.Link onClick={() => navigate(routes.SIGNUP)}>Sign Up</Nav.Link>
                                <Nav.Link onClick={() => navigate(routes.SIGNIN)}>Sign In</Nav.Link>
                            </Nav>
                        </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar