import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="row w-100 mt-5 p-3 bg-primary text-white">
      <div className="col-md-4 p-4 ms-md-5 ">
        <h3> <FontAwesomeIcon icon={faCartShopping} className='me-3'/> E-Cart</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga excepturi? Ea laboriosam saepe error omnis dicta, eveniet optio fuga libero quo autem natus odit totam minima, repellendus, ratione pariatur.</p>
      </div>
      <div className="col-md-2 p-4 ms-md-5 d-md-flex justify-content-center">
        <div>
          <h4>Links</h4>
          <p style={{textAlign:'justify'}} className='mt-4'><Link to={'/'} style={{color:'white'}}>Home Page</Link></p>
          <p><Link to={'/wishlist'} style={{color:'white'}}>Wish List</Link></p>
          <p><Link to={'/cart'} style={{color:'white'}}>Cart</Link></p>
        </div>
      </div>
      <div className="col-md-2 p-4">
        <h4>Guides</h4>
        <p className='mt-4'>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className="col-md-3 p-4">
        <h4>Contact Us</h4>
        <div className='d-flex mt-4'>
          <input type="text" className='form-control' placeholder='Email Id' />
          <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex mt-4 justify-content-between'>
        <FontAwesomeIcon icon={faInstagram} size='2xl' />
        <FontAwesomeIcon icon={faTwitter} size='2xl'/>
        <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
        <FontAwesomeIcon icon={faFacebook} size='2xl'/>

        </div>
       
      </div>
       <div className='text-center align-items-center justify-content-center mt-5'>
          <p>Copyright © 2023 Media Player.Built with React</p>
        </div>

      <div className="col-md-1"></div>
      
    </div>
  )
}

export default Footer