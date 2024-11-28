/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import BgImg from '../../assets/img/Rectangle 14.png';
import Svg from '../../assets/img/Vector.svg';

function Closer() {
    const bgImage = {
        backgroundImage: `linear-gradient(rgba(40, 20, 8, 0.75), rgba(40, 20, 8, 0.75)), url(${BgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div
            style={bgImage}
            className="text-center p-6 lg:p-16 leading-loose w-full h-[400px] md:h-[500px]">
            <div className="flex flex-col items-center justify-center h-full">
                {/* Heading */}
                <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-6 text-center">
                    We are closer than you think
                </h2>

                {/* Paragraph */}
                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-6 md:leading-7 mb-6 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros <br />
                    tortor, consectetur eget libero non, condimentu
                </p>

                {/* Button */}
                <NavLink to={'/SignUp'} className="text">
                    <button
                        className="flex items-center justify-around gap-3 text-white bg-red-600 p-2 rounded-lg font-semibold text-base md:text-xl lg:text-2xl leading-7 py-2 md:py-3 px-10 md:px-16 lg:px-24">
                        Register
                        <img src={Svg} className="w-5 md:w-6 lg:w-7" alt="Arrow Icon" />
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default Closer;