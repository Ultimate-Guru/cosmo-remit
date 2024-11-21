/* eslint-disable no-unused-vars */
import React from "react";
import Frica from '../../assets/img/Frame 113.png';
import tradeImg from '../../assets/img/TRADING.png';
import fastImg from '../../assets/img/FAST.png';
import safeImg from '../../assets/img/SAFETY.png';

function Choose() {
    return (
        <div className="px-4">
            <h1 className="text-2xl sm:text-4xl leading-normal text-center mt-20 font-semibold">
                Why Choose Frica XChange
            </h1>

            {/* Large screen image */}
            <img src={Frica} className="hidden lg:block lg:w-full lg:p-12 lg:mb-4" alt="Frica Illustration" />

            {/* Small to medium screen layout */}
            <div className="lg:hidden mt-10 mb-10 space-y-8">
                <div className="flex flex-col items-center text-center">
                    <img src={fastImg} className="w-[101px] h-20 mb-4" alt="Fast" />
                    <h2 className="text-[18px] font-semibold">Extremely Fast</h2>
                    <p className="text-xs w-[176px] text-center font-normal mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src={tradeImg} className="w-[101px] h-20 mb-4" alt="Unbeatable Rates" />
                    <h2 className="text-[18px] font-semibold">Unbeatable Rates</h2>
                    <p className="text-xs w-[176px] text-center font-normal mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src={safeImg} className="w-[101px] h-20 mb-4" alt="Secure & Regulated" />
                    <h2 className="text-[18px] font-semibold">Secure & Regulated</h2>
                    <p className="text-xs w-[176px] text-center font-normal mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Choose;