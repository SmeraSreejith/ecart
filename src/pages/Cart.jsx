import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeItemCart } from '../redux/slice/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {

    const[total,setTotal] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
     
     const cartArray = useSelector((state)=>state.cartReducer)
     console.log(cartArray);
     
    

     const getTotal = ()=>{
      if(cartArray.length>0){
        setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
        
      }
      else{
        setTotal(0)
      }
     }

     const handleCart = ()=>{
      alert('Your order placed successfully')
      dispatch(emptyCart())
      navigate('/')
     }
   
     useEffect(()=>{
        getTotal()
     },[cartArray])

  return (
   <>
     {cartArray?.length>0?
     <div className="row mt-5 w-100" style={{marginTop:'100px'}}>
      <h2 className='mt-5 text-primary text-center'>Cart</h2>
      <div className="col-md-1"></div>
      <div className="col-md-6">
      <table className='table border shadow my-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      { cartArray?.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img src={item.thumbnail} alt='' width={'150px'} height={'150px'}/></td>
          <td>$ {item.price}</td>
          <td><button className='btn btn-danger' onClick={()=>dispatch(removeItemCart(item.id))}><FontAwesomeIcon icon={faTrash}/></button></td>
        </tr>))}
       
      </tbody>
    </table>
      </div>
      <div className="col-md-4 d-flex justify-content-center" style={{height:'330px'}}>
        <div className='border shadow p-4 my-5'>
          <h3 className='text-primary text-center'>Cart Summary</h3>
           <h4 className='mt-3'>Total number of items : {cartArray.length}</h4>
           <h4>Total price : $ {total}</h4>
           <button onClick={handleCart} className='btn btn-success w-100 mt-3'>CheckOut</button>
           
        </div>
      </div>
      <div className="col-md-1"></div>
      
     </div>
     
     :

     <div style={{width:'100%', height:'70vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <img src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png" alt="no image" />
      <Link to={'/'}> <button className='btn btn-primary mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2'/>Back to home</button></Link>
     </div>

  }
   </>
  )
}

export default Cart