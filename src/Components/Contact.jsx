import React from 'react'
// import "../CSS/Contact.css";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
    <div className="container">

      <form action="" className="action">
        <h2 className='heading'>Contact Us</h2>
          <p className='subHeading'>"Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals & happiness."</p>
        <div className='content'>
        <div className="content1">
          <label id='Fname'>Full Name</label>
            <div className="input-box">
              <input type="text" className="Fname" placeholder='Enter Full Name' required />
            </div>
          <label id='PhoneNumber'>Phone Number</label>
            <div className="input-box">
              <input type="text" className="PhoneNumber" placeholder='+91-1234567891' required />
            </div>
          <label id='FAddress'>Full Address</label>
            <div className="input-box">
              <input type="text" className="FAddress" placeholder='Enter Full Address' required />
            </div>

        </div>
        <div className='content2'>
          <label id='Email'>Email Address</label>
            <div className="input-box">
              <input type="email" className="Email" placeholder='abc@gmail.com' required />
            </div>
          <label id='Adhar'>Adhar Card Number</label>
            <div className="input-box">
              <input type="text" className="Adhar" placeholder='123456789123' required />
            </div>
          <label id='Landmark'>Landmark</label>
            <div className="input-box">
              <input type="text" className="Landmark" placeholder='Near ---' required />
            </div>

        </div>
        </div>
          
          <div class='button-container'>
            <button type="submit" className='submitButton'>Confirm</button>
          </div>

      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
