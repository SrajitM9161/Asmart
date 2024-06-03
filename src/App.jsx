import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Components/Admin'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import CropDetection from './Components/CropDetection'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import Price from './Components/Price'
import Signup from './Components/Signup'
import Trade from './Components/Trade'
import NavBar from './Routings/NavBar'

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/trade' element={<Trade />}></Route>
          <Route path='/price' element={<Price />}></Route>
          <Route path='/cropDetection' element={<CropDetection />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
        
        <Footer className='footer'/>
      </BrowserRouter>
    </>
  )
}

export default App
