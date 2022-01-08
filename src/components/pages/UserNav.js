import React, {Component} from "react";
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import logo from '../landscape.png'
import './UserNav.css'
function UserNav()  {
    return (            
<>

  <Navbar className="navbar" collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="/Prototype">
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
      <Nav.Link href="/Prototype/#/about" className="hvr">About Us</Nav.Link>
      <Nav.Link href="/Prototype/#/contact" className="hvr">Contact Us</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="/Prototype/signout" className="hvr">        
        Sign Out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  </>

    );
  }
  
  export default UserNav;
  


