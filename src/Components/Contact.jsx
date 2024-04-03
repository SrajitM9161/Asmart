import emailjs from '@emailjs/browser';
import { React, useRef } from 'react';
import "../CSS/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xy67i3g', 'template_iy5ny48' ,form.current, {
        publicKey: 'bWk-x3h-304pPmHxG',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
    <div className="contact-container">

      <form ref={form} onSubmit={sendEmail}>
        <h2 className='contact-heading'>Contact Us</h2>
          <p className='contact-subheading'>"Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals & happiness."</p>
        <div className='contact-content'>
        <div className="contact-content1">
          <label id='Fname'>Full Name</label>
            <div className="contact-input-box">
              <input type="text" id='Fullname' className="Fullname" name="Fullname" placeholder='Enter Full Name' required />
            </div>
          <label id='PhoneNumber'>Phone Number</label>
            <div className="contact-input-box">
              <input type="tel" className="PhoneNumber" name="PhoneNumber" placeholder='+91-1234567891' required />
            </div>
          <label id='FAddress'>Full Address</label>
            <div className="contact-input-box">
              <input type="text" className="FAddress" name="FAddress" placeholder='Enter Full Address' required />
            </div>

        </div>
        <div className='contact-content2'>
          <label id='Email'>Email Address</label>
            <div className="contact-input-box">
              <input type="email" className="Email" name="Email" placeholder='abc@gmail.com' required />
            </div>
          <label id='Adhar'>Adhar Card Number</label>
            <div className="contact-input-box">
              <input type="tel" className="Adhar" name="Adhar" placeholder='123456789123' required />
            </div>
          <label id='Landmark'>Landmark</label>
            <div className="contact-input-box">
              <input type="text" className="Landmark" name="Landmark" placeholder='Near ---'  />
            </div>

        </div>
        </div>
        <label id='Query'>Your Query</label>
            <div className="contact-input-box">
              <textarea rows={3} cols={50} className="Query" name="Query" placeholder='-----' required />
            </div>
          <div class='button-contact-container'>
            <button type="submit" className='contact-submitButton' name='contact-submitButton'>Confirm</button>
          </div>

      </form>
      </div>
    </div>
  )
}

export default Contact
