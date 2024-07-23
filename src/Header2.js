import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header2() {
  return (
    <div className='sticky-top'>
    <Navbar bg="primary" className='border-0 sticky-top' data-bs-theme="dark">
   <Container >
     <Navbar.Brand className='me-auto icon' href="/"><span className='icon'>PhonePhobia</span></Navbar.Brand>
     <Nav className="ms-auto">
       <Nav.Link className='menu' href="/"><span>Home</span></Nav.Link>
       <Nav.Link className='menu' href=""><span>Add Review</span></Nav.Link>
       <Nav.Link className='menu' href="#"><span>Favourites</span></Nav.Link>

     </Nav>
   </Container>
 </Navbar>

</div>
  )
}

export default Header2