import React from 'react'
import arrow_icons from '../../Assets/breadcrum_arrow.png'
import './breadcrum.css'
import ProductShow from '../product show/ProductShow'

const Breadcrums = (props) => {
  const {product}=props
  return (
    <>
    <div className='Breadcrums'>
      <p className="location">Home <img src={arrow_icons} alt="" />shop <img src={arrow_icons} alt="" />{product.category}<img src={arrow_icons} alt="" />{product.name}</p>
    </div>
    {/* <ProductShow product={product}/> */}
    </>
  )
}

export default Breadcrums
