import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()

  return (
    <>
    <Row className='w-100 p-3  my-5'>
      {data?.length>0?
      data?.map((item)=>(
        <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'>
        <Card style={{ width: '100%' }} className='border shadow rounded'>
        <Card.Img variant="top" src={item.thumbnail} className='w-100' style={{height:'250px'}} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
           <p className='text-center fw-bolder fs-4 text-primary'>Price : $ {item.price}</p>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button variant="danger" onClick={()=>dispatch(addToWishlist(item))}><FontAwesomeIcon icon={faHeart} /></Button>
            <Button variant="success" onClick={()=>dispatch(addToCart(item))}><FontAwesomeIcon icon={faCartShopping} /></Button>
          </div>
        </Card.Body>
      </Card>
            
        </Col>
      ))
      
      : <p>Nothing to display</p>
       }

    </Row>
     
    </>
  )
}

export default Home