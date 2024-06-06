import React, { createContext, useState } from 'react'
import all_product from '../../Assets/all_product'
 const ShopContext= createContext(null)
 const defaultValue=()=>{
    let cart={}
    for (let index = 1; index <all_product.length+1; index++) {
         cart[index]=0;
    }
    return cart
}

const ShopContextProvider=(props)=>{
    const [cartItem,setCartItem] =useState(defaultValue())
 
    const addCart=(itemId)=>{
        setCartItem((prev)=>(
            {...prev,[itemId]:prev[itemId]+1}))
 
    }
    const removeCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
    }
    
    const totalCartAmount=()=>{
        let total=0;
        for(let itemIds in cartItem){
           if(cartItem[itemIds]>0)
             {
            let itemInfo= all_product.find((product)=>product.id==itemIds)
               total +=itemInfo.new_price*cartItem[itemIds]
        }
    }
    return total
    }
    const getTotalCartItem=()=>{
        let totalItem=0;
        for(let items in cartItem){
            if(cartItem[items]>0){
                totalItem+=cartItem[items]
            }
        }
        return totalItem
    }
    
    const contextValue={all_product,cartItem,addCart,removeCart,totalCartAmount,getTotalCartItem}
    return(
        <ShopContext.Provider value={contextValue}>
         {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
export {ShopContext}
