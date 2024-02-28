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
          <Link to="/cart">Soil Detction</Link>
          <hr className='menu-opt-hr'/>
          <Link className='menu-btnComp' to="/"><button className="btnComp">Login</button></Link>

        </div>

        <button className="mobile-menu-button" onClick={toggleMobileNav}>
          <div className='arrow'>☰</div>
        </button>

      </div>

    </div>

  );
}

export default NavBar
