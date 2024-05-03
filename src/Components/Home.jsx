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
import Farmervector from "../assets/farmervector4.png"
import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick_contact = () => {

    navigate("/contact");
  };
  return (
    <div>
      <div className="home-top">
        <div>
          <h1>Need more food? Need more farmers?</h1>
          <h3>Want To Know Your Soil Status?</h3>
          <button className="Home-Button" type="submit" onClick={handleButtonClick_contact}>Connect To know Your soil fertility</button>
        </div>
      </div>
      <div className="text">
      </div>
      <div className="cardhome-css">
        <div><Card title="Whole Wheat" image={Pto4} /></div>
        <div><Card title="Whole Rice" image={Pto11} /></div>
        <div><Card title="Bajra" image={Pto10} /></div>
      </div>
      <hr />
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
      <hr />
      <div className="about_home">
        <div className="about-left">
          <h1 id="about-h" className="about-h">About us</h1>
        </div>
        <div className="about-right">
          <p>
            Agrismart is a on hand delivery , organic Agriculture website.
            We provide organic reliable and cheapest product based on the quality and quantity of the item.
          </p>
          <div className="about-img">
            <img src={Farmervector} alt="farmerImage" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
