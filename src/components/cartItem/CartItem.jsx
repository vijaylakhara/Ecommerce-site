import React, { useContext } from 'react'
import './cartItem.css'
import Remove from '../../Assets/cart_cross_icon.png'
import { ShopContext } from '../Context/ShopContext'
const CartItem = () => {
const {all_product,cartItem,removeCart,totalCartAmount}=useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="head-item">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
   {all_product.map((e)=>{
    if(cartItem[e.id]>0){
      return(
        <div className='cartItem-content'>
        <div className="cartItem-list">
    <img src={e.image} alt="" width='7%' className='cart-img'/>
    <p className='title'>{e.name}</p>      
    <p className='cart-price'>${e.new_price}</p>
    <button className='cart-btn'>{cartItem[e.id]}</button>
    <p className='total-price'>${e.new_price*cartItem[e.id]}</p>
    <img src={Remove} alt="" className='remove-icon' onClick={()=>{removeCart(e.id)}}/>      
      </div>
      <hr />
      </div>)
    }
   })} 
   <div className="cart-otherSide">
   <div className="cart-total">
    <h5>Cart Totals</h5>
    <div className="cart-sutotal">
      <p>Subtotal</p>
      <p>${totalCartAmount()}</p>
    </div>
    <hr />
    <div className="cart-shipping">
      <p>Shipping Cost</p>
      <b>Free</b>
    </div>
    <hr />
    <div className="Total-cost">
      <b>Total</b>
      <b>${totalCartAmount()}</b>
    </div>
    <button className='proceed-btn'>PROCEED TO CHECKOUT</button>
   </div>
   <div className="coupon-code">
    <p>If you have coupon code enter here</p>
    <input type="text" placeholder='coupon-code' />
    <button className='btn-coupon'>submit</button>
   </div>
   </div>
 
    </div>
  )
}

export default CartItem
