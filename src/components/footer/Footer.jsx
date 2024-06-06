import React from 'react'
import './footer.css'
import Logo from '../../Assets/logo.png'
import Inst from '../../Assets/instagram_icon.png'
import Pinterest from '../../Assets/pintester_icon.png'
import WhatsApp from '../../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-head">
        <img src={Logo} alt="" />
        <h2>SHOPPER</h2>
      </div>
      <div className="footer-list">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
     <div className="social-link">
      <img src={Inst} alt="" />
      <img src={Pinterest} alt="" />
      <img src={WhatsApp} alt="" />
     </div>
     <hr />
     <p>Copyright @ 2024-All Right Reserved</p>
    </div>
  )
}

export default Footer
