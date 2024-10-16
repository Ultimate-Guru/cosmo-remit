/* eslint-disable no-unused-vars */
import React from 'react'
import bgCoverImg from '../../assets/img/Vector.png';
import FormImg from '../../assets/img/Frame 256.png';

const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${bgCoverImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '694px',
    width: '100%'
  };

  const ImgStyles = {
    width: '470px'
  }

  return (
    <div style={bgImage}>
      <div className='flex justify-between items-center'>
        <div className="">
          <h1 className="text-7xl leading-tight font-bold text-white ml-11">Send Money <br /> <span className="text-red-600">without</span> Borders</h1>
          <p className="text-gray-400 leading-7 font-normal text-lg ml-11 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros <br /> tortor, consectetur eget libero non, condimentum sagittis mauris. Ut <br /> molestie euismod neque. Proin eget odio
          </p>
        </div>
        <img src={FormImg} style={ImgStyles} className='mr-10 mt-10' />
      </div>
    </div>
  )
}

export default Hero;