import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home">CAR-REPAIR</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/home">Home</NavLink>
                        <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/home#services">Services</NavLink>
                        <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/home#experts">Experts</NavLink>
                        {
                            user?.email ? <Button onClick={logOut} variant="light me-3" size="sm">Log Out</Button> : <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/login">Login</NavLink>
                        }
                    </Nav>
                {
                    user?.email && <Navbar.Text>
                    Signed in as: {user.displayName}
                    </Navbar.Text>
                }
                </Navbar.Collapse>
                </Container>
            </Navbar>            
        </>
    );
};

export default Header;