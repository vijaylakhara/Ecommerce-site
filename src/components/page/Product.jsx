import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from "react-router-dom"
import Breadcrums from '../breadcrums/Breadcrums';
import ProductShow from '../product show/ProductShow';
import Description from '../description/Description';
import DescriptionProduct from '../description product/DescriptionProduct';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductShow product={product}/>
      <Description product={product}/>
      <DescriptionProduct product={product}/>
    </div>
  )
}

export default Product
