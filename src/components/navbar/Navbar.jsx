import React, { useContext, useState } from 'react'
import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {
  const {getTotalCartItem}=useContext(ShopContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt="" />
          <h1 className="navbar-brand" >SHOPPER</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/men">Men</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/women">Women</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kids">Kids</NavLink>
              </li>
            </ul>
            <div className="d-flex ">
              <NavLink to='/cart'><img src={cart} alt="" className='cart_img' /></NavLink>
              <div className="nav-cart-count">{getTotalCartItem()}</div>
              <NavLink to="/login"><button className="btn btn-outline-success" >Login</button></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
