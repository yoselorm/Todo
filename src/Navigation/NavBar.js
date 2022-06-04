import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navy.css';

const NavBar = () => {
    return (
        <div className='Navy'>

            <Navbar variant="dark">
                <Container>
                    <Nav className="me-auto cont">
                        <LinkContainer to={'/'}>
                            <Nav.Link href="#home">MyList</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/signup'}>
                            <Nav.Link href="#features" >Add</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
