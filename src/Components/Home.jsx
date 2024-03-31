import React from "react";
import "../CSS/Home.css";
import Ig from "../assets/photo1.png";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Pto4 from "../assets/photo4.png";
import Pto11 from "../assets/photo11.png";
import Pto10 from "../assets/photo10.png";
import pto14 from "../assets/photo14.png";
import pto8 from "../assets/photo8.png";
import pto3 from "../assets/photo3.png";
import pto15 from "../assets/photo15.png";
import ptobg from "../assets/bgfarmer.png";
import Card1 from "../Components/Card1";
const Home = () => {
  return (
    <div>
      <div className="imag">
        <img src={Ig} alt="Image" />
        <div className="dark-overlay"></div>
      </div>
      <div className="text">
        <h1>Need more food? Need more farmers?</h1>
        <h3>Want to do barganing?</h3>
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
          image={pto14}
          title="corn"
          description="ye hai corn "
          price={20}
        />
        <Card1
          image={pto15}
          title="flower"
          description="ye hai corn "
          price={20}
        />
        <Card1
          image={pto3}
          title="vegi"
          description="ye hai corn "
          price={20}
        />
        <Card1
          image={pto8}
          title="carrot"
          description="ye hai corn "
          price={20}
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
