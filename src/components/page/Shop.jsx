import React from 'react'
import Hero from '../hero/Hero'
import Item from '../item collection/Item'
import dataCollection from '../../Assets/data'
import './shop.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Popular from '../popular/Popular'
import Offer from '../offer/Offer'
import NewCollection from '../newCollection/NewCollection'
import Email from '../mail/Email'

const Shop = () => {
  return (
    <>
     <Hero/>
     <Popular/>
     <Offer/>
    <NewCollection/>
    <Email/> 
    </>
    
  )
}

export default Shop
