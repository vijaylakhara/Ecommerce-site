import React from 'react'
import hand_icons from '../../Assets/hand_icon.png'
import hero_image from '../../Assets/hero_image.png'
import './hero.css'
const Hero = () => {
  return (
    <>
      <div className="shop-container">
        <div className="shop-text">
         <h4>NEW ARRIVALS ONLY</h4>
         <h1>new<img src={hand_icons} alt="" width='15%' /> collections for everyone</h1>
         <button className='shop-collection-btn'>Latest Collection</button>
        </div>
          <img className="shop-img"   src={hero_image} alt="" />
    </div> 
    </>
  )
}

export default Hero
