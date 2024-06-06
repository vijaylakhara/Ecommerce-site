import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  // console.log(props.id)
  return (
    <>
      <div className="card-data" >
        <Link to={`/product/${props.id}` } onClick={window.scrollTo(0,0)}><img src={props.image} className="img-top" alt="..."/></Link>
        <p className='item-name'>{props.name}</p>
        <div className="price">
          <p className="old_price">${props.old_price} </p>
          <p className='new_price'>${props.new_price}</p>
        </div>
      </div>
    </>
  )
}

export default Item
