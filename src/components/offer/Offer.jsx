import React from 'react'
import './offer.css'
import exclusive_image from '../../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
    <div className='offer-inside'>
       <div className="left-side">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='offer-btn'>Check Now</button>
       </div>
       <img className='offer-img' src={exclusive_image} alt="" />
    </div>
    </div>
  )
}

export default Offer
