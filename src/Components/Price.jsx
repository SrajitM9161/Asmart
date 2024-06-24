import React from 'react';
import PAPI from '../PriceAPI/PAPI';
import Footer from './Footer';
import '../CSS/Price.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Price = () => {
  useEffect(()=>{
    const currentTime = new Date();

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
