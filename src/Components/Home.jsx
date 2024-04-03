import React from "react";
import "../CSS/Home.css";
import Ig from "../assets/photo1.png";
import Card from "../Components/Card";
import Pto4 from "../assets/photo4.png";
import Pto11 from "../assets/photo11.png";
import Pto10 from "../assets/photo10.png";
import ptobg from "../assets/bgfarmer.png";
import Card1 from "../Components/Card1";
import Community from "../assets/Community.jpeg"
import pictrade from "../assets/Trading.png"
import price from "../assets/Price.jpeg"
import cropdetection from "../assets/Crop-Detection.png"
import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick_contact = () => {
  
    navigate("/contact");
  };
  return (
    <div>
      <div className="imag">
        <img src={Ig} alt="Image" />
        <div className="dark-overlay"></div>
      </div>
      <div className="text">
        <h1>Need more food? Need more farmers?</h1>
        <h3>Want To Know Your Soil Status ?</h3>
        <button className="Home-Button" type="submit" onClick={handleButtonClick_contact}>Connect To know Your soil fertility</button>
      </div>
      <div className="cardhome-css">
        <div><Card title="Whole Wheat" image={Pto4} /></div>
        <div><Card title="Whole Rice" image={Pto11} /></div>
        <div><Card title="Bajra" image={Pto10} /></div>
      </div>
      <div className="text1">
        <h1>-----What services we can offer you?-----</h1>
        <p>
          “To get rich, never risk your health. For it is the truth that health
          is the wealth of wealth.”
        </p>
      </div>
      <div className="card1-css">
        <Card1
          image={pictrade}
          title="Trading System"
          description="Elevate your farming experience: select, sell, and thrive with our innovative platform connecting farmers to the best crop choices and prices in their nearest mandi."
      
        />
        <Card1 
          image={price}
          title=" Price Detection"
          description="Empowering farmers with real-time market prices for their state district's nearest mandi, ensuring informed decision-making and optimal profitability"
      
        />
        <Card1
          image={cropdetection}
          title="Crop Detection"
          description="Utilizing advanced technology for precise crop detection, revolutionizing agricultural practices with accuracy and efficiency."
      
        />
        <Card1
          image={Community}
          title="Farmer Community "
          description="Building a thriving farmer community through knowledge-sharing, support, and empowerment for sustainable agriculture. "
         
        />
      </div>
      <div className="about_home">
        <h1 id="about-h">About us</h1>
      </div>
      <div className="about-all">
        <div className="about-pleft">
          <h3>Real Time price Detection </h3>
          <p>Providing Real time data of price of
            every <br /> mandi and district<br /> </p>
          <br />
          <h3>Barganing System </h3>
          <p>Sell your crop at your best price </p>
          <br />
          <h3>Crop Detection </h3>
          <p>Enter The Data detect the crop </p>
        </div>
        <div className="about-mid">
          <h2 id="about-p1">Who we are?</h2>
          <p id="about-p2"> Welcome to our world where Farmey revolutionizes agriculture by integrating buying, selling, <br />and predictive crop pricing with cutting-edge soil detection technology! Unearth the future  <br />of farming with us at Farmey! 🚀</p>
          <img id="about_image" src={ptobg} alt="image" />
        </div>
        <div className="about-pright">
          <h3>Farmer Community </h3>
          <p>All Farmers can Talk and Expert farmers give solution</p>
          <br />
          <h3>Market Price data </h3>
          <p>Real Time district Market Wise Price</p>
          <br />
          <h3>Best Crop according to soil </h3>
          <p>Give your soil data and check which crop is best for your soil </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
