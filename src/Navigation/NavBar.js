import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand href="#home">APP </Navbar.Brand>
                    </LinkContainer>

                    <Nav className="me-auto">
                        <LinkContainer to={'/'}>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/signup'}>
                            <Nav.Link href="#features">SignUp</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
