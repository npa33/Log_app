import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/vt_logo.png';
import Avatar from './assets/logo.png';



const CustomNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="mx-auto">
              <span className="navbar-text-center">HỆ THỐNG GHI LOG ĐO LƯỜNG</span>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title={<span><img src={Avatar} alt="Avatar" className="avatar" /></span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tasks">My Tasks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
