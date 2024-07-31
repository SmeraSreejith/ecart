import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { faCartPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector ((state)=>state.cartReducer)
  return (
    <>
   <Navbar expand='lg' className="bg-primary w-100" style={{top:'0px',position:'fixed', zIndex:'1'}}>
      <Container>
        <Navbar.Brand className='text-white'>
         <FontAwesomeIcon icon={faCartShopping} bounce className='me-3'/>
          <b>E-Cart</b>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link >
             <Link to='/Wishlist'>
                <button className='btn btn-outline-light border rounded'><FontAwesomeIcon icon={faHeart} style={{color:"red",}} className='me-2'/>Wishlist<Badge bg="secondary" className='rounded ms-2'>{wishlistArray.length}</Badge>
                </button>
  
             </Link>
            </Nav.Link>

            <Nav.Link > 
              <Link to='/Cart'>
                <button className='btn btn-outline-light border rounded'><FontAwesomeIcon icon={faCartPlus} style={{color:"#d2ec09",}} className='me-2'/>Cart<Badge bg='secondary' className='rounded ms-2'>{cartArray.length}</Badge>
                </button>
              </Link>
              </Nav.Link>


           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header