import React from 'react'
import Navbar from './components/navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/page/Product'
import Shop from './components/page/Shop'
import ShopType from './components/page/ShopType'
import Cart from './components/page/Cart'
import Login from './components/page/Login'
import Footer from './components/footer/Footer'
import menbanner from './Assets/banner_mens.png'
import womenbanner from './Assets/banner_women.png'
import kidsbanner from './Assets/banner_kids.png'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopType  banner={menbanner} category='men'/>}/>
          <Route path='/women' element={<ShopType   banner={womenbanner} category='women'/>}/>
          <Route path='/kids' element={<ShopType banner={kidsbanner} category='kid'/>}  />
          <Route path='/product' element={<Product />} >
          <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
