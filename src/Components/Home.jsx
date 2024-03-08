import React from 'react';
import "../CSS/Home.css";
import Ig from "../assets/photo1.png";
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Pto4 from "../assets/photo4.png"
import Pto11 from "../assets/photo11.png"
import Pto10 from "../assets/photo10.png"
const Home = () => {
  return (
    <>
      <div className='imag'>
        <img src={Ig} alt="Image" />
        <div className='dark-overlay'></div>
      </div>
      <div className='text'>
        <h1>Need more food? Need more farmers?</h1>
        <h3>Want to do barganing?</h3>
      </div>
     <div className='cardhome-css'>
      <Card 
    title="Whole Wheat"
    image={Pto4}
     />
     <Card 
    title="Whole Rice"
    image={Pto11}
     />
     <Card 
    title="Bajra"
    image={Pto10}
     />
     </div>
     <Footer  />
    </>
  );
}

export default Home;