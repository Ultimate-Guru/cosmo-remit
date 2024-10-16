/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import bgCoverImg from "../../assets/img/Vector.png";
import Svg from "../../assets/img/Vector.svg";
import Vector from "../../assets/img/faster.png"

const Fastest = () => {
    const BgImg = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: '1512px',
        height: '361px',
    };
    return (
        <div style={BgImg} className="text-center p-12">
            <div className="flex items-center justify-center flex-col mr-60 mt-12">
                <h2 className="text-white text-2xl font-medium h-9">
                    We are the fastest way to
                </h2>

                <p className="font-semibold text-4xl h-14 text-red-600">send money abroad</p>

                <NavLink to={"/SignUp"} className="text">
                    <button className="flex items-center justify-around gap-3 text-white bg-red-600 p-1.5 rounded-lg font-semibold text-2xl leading-7 mt-6 py-4 px-14">
                        Register
                        <img src={Svg} className="w-7" />
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Fastest;
