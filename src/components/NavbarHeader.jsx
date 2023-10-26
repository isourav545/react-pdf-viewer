import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarHeader = () => {
  return (
    <Navbar  expand="lg" className="bg-primary" >
    <Container className='display-flex justify-content-center' >
      <Navbar.Brand className='text-white '>PDF Viewer</Navbar.Brand>
      </Container>
      </Navbar>
  )
}

export default NavbarHeader