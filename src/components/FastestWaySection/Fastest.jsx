/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import bgCoverImg from "../../assets/img/fast.png";
import Svg from "../../assets/img/Vector.svg";
import Vector from "../../assets/img/faster.png";

const Fastest = () => {
    const BgImg = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <div
            style={BgImg}
            className="text-center p-20 lg:p-20 bg-gray-900 w-full h-[250px] lg:h-[365px]"
        >
            <div className="flex flex-col items-center justify-center gap-0">
                {/* Title */}
                <h2 className="text-white text-[12px] lg:text-2xl font-medium mb-0">
                    We are the fastest way to
                </h2>

                {/* Subtitle */}
                <p className="font-semibold text-[18px] lg:text-4xl text-red-600 mt-0">
                    send money abroad
                </p>

                {/* Button */}
                <NavLink to="/SignUp">
                    <button className="flex items-center justify-center gap-[6px] text-white bg-red-600 p-3 rounded-lg font-semibold text-[12px] lg:text-2xl leading-7 mt-4 lg:mt-6 py-[4px] px-[22px] lg:py-4 lg:px-14">
                        Register
                        <img src={Svg} className="w-[13px] lg:w-7" alt="Arrow icon" />
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Fastest;