/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import bgCoverImg from '../../assets/img/Vector.png';

const Fastest = () => {
    const BgImg = {
        backgroundImage: `url(${bgCoverImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '40vh',
        width: '100%'
      };
  return (
    <div style={BgImg} className='text-center p-12'>
        <h2 className='text-white text-xl font-semibold'>We are the fastest way to</h2>
        <p className='font-medium text-2xl text-red-600'>send money abroad</p>
        <NavLink to={'/SignUp'} className='text'>            
            <button className="animated-button">
                        <svg viewBox="0 0 24 24" className="arr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                        </svg>
                        <span className="text">Register</span>
                       
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1 w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                        </svg>
            </button>
        </NavLink>
    </div>
  )
}

export default Fastest