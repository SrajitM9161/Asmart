import React from 'react'
import NavBar from './Routings/NavBar'
import Home from './Components/Home'
import Price from'./Components/Price'
import Cart from'./Components/Cart'
import Trade from'./Components/Trade'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
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
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
