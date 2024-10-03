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
    height: '100vh',
    width: '100%'
  };

  return (
    <div style={bgImage}>
      <div className='flex justify-between items-center'>
        <div className="">
          <h1 className="text-5xl font-bold text-white p-6">Send Money <br /> <span className="text-red-600">without</span> Borders</h1>
          <p className=" text-white font-semibold text-xs ml-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut minus et <br /> possimus repudiandae
            ecusandae optio omnis, quos consequuntur ab neque explicabo <br /> repellendus nulla architecto vero!
          </p>
        </div>
          <img src={FormImg} className='w-4/12 mr-10 mt-12' />
      </div>
    </div>
  )
}

export default Hero;