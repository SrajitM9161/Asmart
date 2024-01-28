import React from 'react'
import "../CSS/NavBar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Weather from '../Wheather/Wheather'

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [sign, setSign] = useState("signup");
  const [arrow, setArrow] = useState("👇");

  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
    if (sign == "signup") {
      setSign("sign");
    } else {
      setSign("signup");
    }
    if (arrow == "👇") {
      setArrow("👆");
    } else {
      setArrow("👇")
    }
  };

  return (
    <div className={`navbar ${isMobile ? 'mobile' : ''}`}>

      <div className="logos">  
        <img src="src\assets\LogoAg.png" alt='logo'></img>
        <h2>AGRISMART</h2>
  
        <Weather/>
      </div>

      <div className="right-nav">

        <button className="mobile-menu-button" onClick={toggleMobileNav}>
          <h2 className='arrow'>{arrow}</h2>
        </button>

        <div className={`menu ${isMobile ? 'open' : 'close'}`}>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/trade"><h3>Trade</h3></Link>
        <Link to="/price"> <h3>Price</h3></Link>
        <Link to="/cart"><h3>Cart</h3></Link>
        <Link to="/login"><button className="btnComp"><h3>Login</h3></button></Link>
        </div>

      </div> 

    </div>

  );
}

export default NavBar
