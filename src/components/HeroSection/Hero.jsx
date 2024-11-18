/* eslint-disable no-unused-vars */
import React from 'react'
import bgCoverImg from '../../assets/img/Vector.png';
import FormImg from '../../assets/img/Frame 256.png';

const Hero = () => {
  return (
    <div
      className="h-[430px] lg:h-[694px] bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${bgCoverImg})` }}
    >
      <div className='flex flex-col lg:flex-row justify-between items-center h-full lg:mt-[-70px]'>
        <div className="mt-12 lg:mt-0">
          <h1 className="lg:text-7xl lg:leading-snug leading-snug font-bold text-white ml-11 text-5xl">Send Money <br /> <span className="text-red-600">without</span> Borders</h1>
          <p className="text-gray-400 leading-7 font-normal lg:text-lg text-base ml-11 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros <br /> tortor, consectetur eget libero non, condimentum sagittis mauris. Ut <br /> molestie euismod neque. Proin eget odio
          </p>
        </div>
        <img src={FormImg} className='mr-10 mt-10 w-[300px] lg:w-[470px]' alt="Form Illustration" />
      </div>
    </div>
  )
}

export default Hero;