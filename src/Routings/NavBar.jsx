import React, { useEffect, useState } from 'react';
import "../CSS/NavBar.css";
import { Link } from 'react-router-dom';
import Weather from '../Wheather/Wheather';
import { auth } from '../Firebase/config';
import { signOut } from "firebase/auth";
import Logo from "../assets/LogoAg.png";

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [sign, setSign] = useState("signup");
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrUser(user?.displayName); // Use optional chaining to handle null user
    });
    return () => unsubscribe();
  }, []);

  const logoutButton = async () => {
    try {
      await signOut(auth);
      alert("Logout successful");
      setCurrUser(null);
    } catch (err) {
      alert(err);
    }
  };

  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
    if (sign === "signup") {
      setSign("sign");
    } else {
      setSign("signup");
    }
  };

  const handleLogoClick = () => {
    // Navigate to home page on logo click
    window.location.href = "/"; // Use window.location.href for direct navigation
  };

  return (
    <div className={`navbar ${isMobile ? 'mobile' : ''}`}>

      <div className="logos" onClick={handleLogoClick}>
        <img src={Logo} alt='logo' />
        <h2>AGRISMART</h2>

        <div className='weather-info'>
          <Weather />
        </div>

      </div>

      <div className="right-nav">

        <div className={`menu ${isMobile ? 'open' : 'close'}`}>

          <Link to="/">Home</Link>
          <hr className='menu-opt-hr' />
          <Link to="/trade">Trade</Link>
          <hr className='menu-opt-hr' />
          <Link to="/price">Price</Link>
          <hr className='menu-opt-hr' />
          <Link to="/cropDetection">Crop Detction</Link>
          <hr className='menu-opt-hr' />
          {currUser ? (
            <>
              <p className='currUser'>{currUser}</p>
              <button className='btnComp out' onClick={logoutButton}>Logout</button>
            </>
          ) : (
            <Link className='menu-btnComp' to="/login">
              <button className="btnComp">Login</button>
            </Link>
          )}

        </div>

        <button className="mobile-menu-button" onClick={toggleMobileNav}>
          {isMobile ? <div className='cross'>&#x2716;</div> : <div className='arrow'>☰</div>} 
        </button>

      </div>

    </div>
  );
};

export default NavBar;
