import React from 'react'
import './descriptionProduct.css'
import data_product from '../../Assets/data'
// import data_product from '../../Assets/all_product'
import Item from '../item collection/Item'

const DescriptionProduct = (props) => {
    const {product}=props;
    // console.log(product.category)

  return (
    <div className='popular'>
    <h1>RELATED PRODUCT</h1>
    <hr />
    <div className="container">
     {data_product.map(( item,i)=>{
        {/* console.log(item.category) */}
        if(data_product[i].category==props.category){
      return(
     <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
      )}
      else{
        return null;
      }
     })}
     </div>      
    </div>
  )
}

export default DescriptionProduct
