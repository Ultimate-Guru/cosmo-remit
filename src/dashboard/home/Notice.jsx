/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Notice = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <h2 className="text-red-600 font-medium text-[36px] w-[320px] h-10 mt-16">
                Important Notice!
            </h2>

            <div className="w-[808px] h-[54px] text-center">
                <h3 className="text-lg font-normal">
                    To complete transfer, payment must come from sender’s account only. <br />
                    Please transfer funds directly to your Frica Xchange unique bank
                    account as shown below
                </h3>
            </div>

            <div className="text-[18px] font-normal text-center h-7">
                <h3 >
                    Your transaction reference number is <span className="text-red-600">888384455322223</span>
                </h3>
            </div>

            <div className="w-[271px] h-[63px] gap-3 text-center text-[18px]">
                <p className="font-medium">
                    Account name: <span className="text-red-600 font-normal">Kabir Akinola</span>
                </p>
                <p className="font-medium">
                    Account number: <span className="text-red-600 font-normal">9867523456</span>
                </p>
            </div>

            <NavLink to={"/Successful"}>
                <button className="w-[320px] h-[68px] bg-gray-200 text-white text-[24px] gap-3 px-14 py-[16px] rounded-xl font-semibold">
                    Done
                </button>
            </NavLink>
        </div>
    );
};

export default Notice;