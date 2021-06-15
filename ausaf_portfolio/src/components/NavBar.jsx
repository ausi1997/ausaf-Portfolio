import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import Logo from "../assets/logo/Ausi.png";


const NavBar = ()=>{
    return(
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand className='nav main' href="#home">
 Ausi
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className='nav' href="#home">Home</Nav.Link>
      <Nav.Link className='nav' href="#about">About</Nav.Link>
      <Nav.Link className='nav' href="#skills">Skills</Nav.Link>
      <Nav.Link className='nav' href="#experience">Experience</Nav.Link>
      <Nav.Link className='nav' href="#projects">Projects</Nav.Link>
      <Nav.Link className='nav' href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar;