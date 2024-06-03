import React from 'react';
import PAPI from '../PriceAPI/PAPI';
import Footer from './Footer';
import '../CSS/Price.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

const Price = () => {
  useEffect(()=>{
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >=17 || currentHour < 6) {
        toast.warning("The market is closed from 5:00 PM to 9:00 AM.");
    }
  },[]);
  return (
    <>
      <div className='container-price'>
      <ToastContainer/>
        <div className='price-css'>
          <PAPI />
        </div>
      </div>
    </>
  );
};

export default Price;
