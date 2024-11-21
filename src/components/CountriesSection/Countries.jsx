/* eslint-disable no-unused-vars */
import React from 'react';
import Country from '../../assets/img/Frame 24.png';

const Countries = () => {
  return (
    <div className="w-full">
      <img 
        src={Country} 
        alt="Countries" 
        className="w-full max-h-[478px] md:min-h-[200px] object-cover" 
      />
    </div>
  );
};

export default Countries;