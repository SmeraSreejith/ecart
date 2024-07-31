import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faArrowLeft, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';


function Wishlist() {
  const wishlistArray = useSelector((state)=>(state.wishlistReducer))
  console.log(wishlistArray);
   
  const dispatch = useDispatch()

  const handlecart = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  

  
  return (
    <>
     {wishlistArray?.length>0?<Row className='w-100 p-3  my-5'>
      {wishlistArray?.map((item)=>(<Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'>
      <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" src={item.thumbnail} className='w-100' style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        <p className='text-center fw-bolder fs-4 text-primary'>Price : $ {item.price}</p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button variant="danger" onClick={()=>dispatch(removeFromWishlist(item.id))}><FontAwesomeIcon icon={faTrash} /></Button>
          <Button variant="success" onClick={()=>handlecart(item)}><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
      </Card.Body>
    </Card>
          
      </Col>))}

    </Row>
    :
       
     <div style={{width:'100%',height:'70vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no image" />
      <Link to={'/'}><button className='btn btn-primary mt-4' ><FontAwesomeIcon icon={faArrowLeft} className='me-2'/> Back to home</button></Link>
     </div>}
    </>
  )
}

export default Wishlist