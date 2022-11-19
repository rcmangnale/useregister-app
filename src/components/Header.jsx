import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar  bg="dark" variant="dark">
                <Container >
                    <Nav className="me-auto">
                        <NavLink to="/" className="mx-2 text-decoration-none text-light">Home</NavLink>
                    </Nav>
                    <NavLink to="/" className="mx-2 text-decoration-none text-light">Registration form</NavLink>
                    <NavLink to="/login" className="mx-2 text-decoration-none text-light">SignIn</NavLink>
                   <NavLink to="/" className="mx-2 text-decoration-none text-light">SignUp</NavLink>
                </Container>
            </Navbar>
        </>
    )
}

export default Header