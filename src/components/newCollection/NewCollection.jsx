import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './newCollection.css'
import Newcollection from '../../Assets/new_collections'
import Item from '../item collection/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="container">
     {Newcollection.map((item)=>{
      return(
     <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
      )
     })}
     </div>      
    </div>
  )
}

export default NewCollection 
