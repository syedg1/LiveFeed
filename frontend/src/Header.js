import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ path }) {
    return (
        <Navbar variant="dark" className='navlink'>
            <Navbar.Brand href="/">Disaster Updates Dashboard</Navbar.Brand>
            <Nav className="mr-auto" activeKey={path}>
                <Nav.Link as={Link} to="/" href='/' className='navlink'>Home</Nav.Link>
                <Nav.Link as={Link} to="/livefeed" href='/livefeed' className='navlink'>Live Feed</Nav.Link>
                <Nav.Link as={Link} to="/analytics" href='/analytics' className='navlink'>Analytics</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header
