import React from 'react';
import PAPI from '../PriceAPI/PAPI';
import Footer from './Footer';

import '../CSS/Price.css';

const Price = () => {
  return (
    <>
    <div className='container-price'>
      <div  className='price-css'>
        <PAPI />
      </div>
      </div>
    </>
  );
};

export default Price;
