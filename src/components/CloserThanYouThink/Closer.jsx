/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import BgImg from '../../assets/img/Rectangle 14.png';
// import './Closer.css'

function Closer() {
    const bgImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${BgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50vh',
        width: '100%'
      };
    return(
        <div style={bgImage} className="text-center p-16">
            <h2 className="mb-6 text-white text-3xl font-bold text-center">We are closer than you think</h2>
            <p className="mt-2 text-white h-6 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam accusamus nostrum distinctio <br /> expedita at numquam! Facilis, libero necessitatibus.
            </p>
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
    );
}

export default Closer;