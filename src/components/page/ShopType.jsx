import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './shopType.css'
import Item from '../item collection/Item'

const ShopType = (props) => {
  const {all_product} =useContext(ShopContext)
  
  return (
    <div className='shop-type'>
      <img id='banner' src={props.banner} alt="" />  
        <div className="container">
     {all_product.map((item,i)=>{
       if(all_product[i].category==props.category){
      return(
        <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
      )
       }
       else{
        return null
       }
     })}
        </div>
    </div>
  )
}

export default ShopType
