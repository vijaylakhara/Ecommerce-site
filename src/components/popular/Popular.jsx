import React from 'react'
import dataCollection from '../../Assets/data'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Item from '../item collection/Item'
import './popular.css'
const Popular = () => {
  return (
    <div className='popular'>
    <h1>POPULAR IN WOMEN</h1>
    <hr />
    <div className="container">
     {dataCollection.map((item)=>{
      return(
     <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
      )
     })}
     </div>      
    </div>
  )
}

export default Popular
