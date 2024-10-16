/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import BgImg from '../../assets/img/Rectangle 14.png';
import Svg from '../../assets/img/Vector.svg'

function Closer() {
    const bgImage = {
        backgroundImage: `linear-gradient(rgba(40, 20, 8, 0.75), rgba(40, 20, 8, 0.75)), url(${BgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '1512px',
        height: '500px',
    };

    return (
        <div style={bgImage} className="text-center p-16 leading-loose">
            <div className="flex items-center justify-center flex-col mr-60 mt-10">
                <h2 className="mb-6 text-white text-6xl font-semibold text-center">We are closer than you think</h2>

                <p className="mt-2 text-gray-300 h-12 leading-6 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros <br /> tortor, consectetur eget libero non, condimentu
                </p>

                <NavLink to={'/SignUp'} className='text'>
                    <button
                        className="flex items-center justify-around gap-3 text-white bg-red-600 p-1.5 rounded-lg font-semibold text-2xl leading-7 mt-16 py-3 px-24">
                        Register
                        <img src={Svg} className="w-7" />
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default Closer;