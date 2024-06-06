import React, { useContext } from 'react'
import './productshow.css'
import { ShopContext } from '../Context/ShopContext'

const ProductShow = (props) => {
    const { product } = props
    const {addCart}=useContext(ShopContext)
  
    return (
        <div className='productshow'>
            <div className="product-leftside">
                <div className="product-sideimage">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-imagebig">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="product-rightside">
                <h4>{product.name}</h4>
                <div className="product-price">
                    <p>{product.old_price}</p>
                    <p>${product.new_price}</p>
                </div>
                <div className="product-detail">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptatibus molestiae hic similique fuga, laborum modi, non saepe iste illum est officiis.</p>
                </div>
                    <p>Select Size</p>
                <p className="size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </p>
                <button onClick={()=>addCart(product.id)}>ADD TO CART</button>
                <div className="product-category">
               
                 <p><b>Category:- </b>{product.category} ,T-Shirt,Crop Top</p> 
                  <p><b>Tags:-</b> Modern,Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductShow
