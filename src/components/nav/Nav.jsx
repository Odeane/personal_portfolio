import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './nav.style.css'

function Navi() {
  return (
    <div className='heading'>
      <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top" >
        <Navbar.Brand id='homecl' href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#resume">RESUME</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Navi;
