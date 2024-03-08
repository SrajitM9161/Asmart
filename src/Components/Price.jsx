import React from 'react';
import PAPI from '../PriceAPI/PAPI';
import '../CSS/Price.css';
import Footer from './Footer';

const Price = () => {
  return (
    <>
      <div className='container' id='container'>
        <PAPI />
        <Footer/>
      </div>
    </>
  );
};

export default Price;
