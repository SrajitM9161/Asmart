import React from 'react'
import "../CSS/NavBar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Weather from '../Wheather/Wheather'

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [sign, setSign] = useState("signup");

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
        <img src="src\assets\LogoAg.png" alt='logo'></img>
        <h2>AGRISMART</h2>
  
        <Weather className='weather-info'/>
      </div>

      <div className="right-nav">

        <div className={`menu ${isMobile ? 'open' : 'close'}`}>
        <Link className='menu-opt' to="/">Home</Link>
        <Link className='menu-opt' to="/trade">Trade</Link>
        <Link className='menu-opt' to="/price">Price</Link>
        <Link className='menu-opt' to="/cart">Soil Detction</Link>
        <Link to="/"><button className="btnComp"><h3>Login</h3></button></Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileNav}>
          <div className='arrow'>☰</div>
        </button>

      </div> 

    </div>

  );
}

export default NavBar
