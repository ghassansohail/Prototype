import React, {Component} from "react";
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import logo from './landscape.png'
import './Bs-nav.css'
function BsNav()  {
    return (      
      
<>

  <Navbar className="navbar" collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Trips n Tour
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#About" className="hvr"  >About Us</Nav.Link>
      <Nav.Link href="#Contact" className="hvr">Contact Us</Nav.Link>
      <Nav.Link href="/plans" className="hvr">Plans</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="/login"  className="hvr">      
        Login
        </Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className="hvr">        
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  </>

    );
  }
  
  export default BsNav;
  