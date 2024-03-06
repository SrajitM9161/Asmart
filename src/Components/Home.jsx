import React from 'react';
import "../CSS/Home.css";
import Ig from "../assets/photo1.png";
import Card from '../Components/Card';
// import Footer from '../Components/Footer';
const Home = () => {
  return (
    <>
      <div className='image'>
        <img src={Ig} alt="Image" />
        <div className='dark-overlay'></div>
      </div>
      <div className='text'>
        <h1>Need more food? Need more farmers?</h1>
        <h3>Want to do barganing?</h3>
      </div>
      <Card/>
      {/* <Footer/> */}
    </>
  );
}

export default Home;
