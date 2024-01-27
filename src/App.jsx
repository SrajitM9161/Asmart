import React from 'react'
import NavBar from './Routings/NavBar'
import Home from './Components/Home'
import Price from'./Components/Price'
import Cart from'./Components/Cart'
import Trade from'./Components/Trade'
import Contact from './Components/Contact'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
 
     <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/trade' element={<Trade/>}></Route>
<Route path='/price' element={<Price/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
