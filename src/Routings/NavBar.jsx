import React, { useEffect } from 'react'
import "../CSS/NavBar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Weather from '../Wheather/Wheather'
import {auth} from '../Firebase/config';  
import {signOut} from "firebase/auth";
import Logo from "../assets/LogoAg.png"
const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [sign, setSign] = useState("signup");
  const [currUser,setCurrUser]=useState(null);

  
  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrUser(user.displayName);
      });
      return()=>unsubscribe();
  },[]);

  const logoutButton=async()=>{
    try{
        await signOut(auth);
        alert("Logout successfull");
        setCurrUser(null);
        }catch(err){
            alert(err);
        }
 }


  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
    if (sign == "signup") { 
      setSign("sign");
    } else {
      setSign("signup");
    }
  };
  

  return (
    <div className={`navbar ${isMobile ? 'mobile' : ''}`}>

      <div className="logos">
        <img src={Logo} alt='logo'></img>
        <h2>AGRISMART</h2>

        <div className='weather-info'>
          <Weather />
        </div>

      </div>

      <div className="right-nav">

        <div className={`menu ${isMobile ? 'open' : 'close'}`}>
          
          <Link to="/">Home</Link>
          <hr className='menu-opt-hr'/>
          <Link to="/trade">Trade</Link>
          <hr className='menu-opt-hr'/>
          <Link to="/price">Price</Link>
          <hr className='menu-opt-hr'/>
          <Link to="/cropDetection">Crop Detction</Link>
          <hr className='menu-opt-hr'/>
          {currUser?(<><p className='currUser'>{currUser}</p><button className='btnComp out' onClick={logoutButton}>Logout</button></>):(<Link className='menu-btnComp' to="/login"><button className="btnComp">Login</button></Link>)}

        </div>

        <button className="mobile-menu-button" onClick={toggleMobileNav}>
          <div className='arrow'>☰</div>
        </button>

      </div>

    </div>

  );
}

export default NavBar
