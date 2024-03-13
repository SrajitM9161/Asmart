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
    <>
      <div className="imag">
        <img src={Ig} alt="Image" />
        <div className="dark-overlay"></div>
      </div>
      <div className="text">
        <h1>Need more food? Need more farmers?</h1>
        <h3>Want to do barganing?</h3>
      </div>
      <div className="cardhome-css">
        <Card title="Whole Wheat" image={Pto4} />
        <Card title="Whole Rice" image={Pto11} />
        <Card title="Bajra" image={Pto10} />
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
        <h3>Fresh</h3>
        <p>yha p likhna hai</p>
        <br />
        <h3>Premium</h3>
        <p>yha likho</p>
        <br />
        <h3>on time delievery</h3>
        <p>yha likho</p>
        </div>
        <div className="about-mid">
          <h2 id="about-p1">Who we are?</h2>
          <p id="about-p2">     We are bla bla bla bla bla bla bla bla bla bla bla  <br />bla bla bla bla <br />bla bla bla bla</p>
          <img id="about_image" src={ptobg} alt="image" />
        </div>
        <div className="about-pright">
          <h3>Naturally grown</h3>
          <p>hjjjndjnf</p>
          <br />
          <h3>pesticide free</h3>
          <p>hakxj</p>
          <br />
          <h3>real time data</h3>
          <p>hsbsb</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
