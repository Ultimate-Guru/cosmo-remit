/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Country from '../../assets/img/Frame 24.png';
import CountrySmallScreen from '../../assets/img/Frame 524.png';

const Countries = () => {
  return (
    <div>
      <img 
        src={Country} 
        alt="Countries" 
        className="hidden md:flex w-full"
      />
      <img src={CountrySmallScreen} 
      alt="Countries"
      className="md:hidden w-full"
      />
    </div>
  );
};

export default Countries;