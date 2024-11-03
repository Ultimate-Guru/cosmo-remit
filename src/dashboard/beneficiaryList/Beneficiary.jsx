/* eslint-disable no-unused-vars */
import React from "react";
import Search from "../../assets/img/ic_sharp-search.png";
import AddImg from "../../assets/img/ic_baseline-person-add.png";
import { NavLink } from "react-router-dom";

const Beneficiary = () => {
  return (
    <div className="p-32">
      <div className="flex justify-between items-center p-9 w-[1000px] ml-[90px]">
        {/* Title and Search */}
        <div className="flex flex-col gap-5 w-[466px] h-[96.16px] absolute left-[280px]">
          <h1 className="text-[26px] h-11 w-[466.59px] font-medium text-black">Beneficiary</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[466px] h-12 bg-gray-300 rounded-3xl outline-none pl-4 pr-10 placeholder:text-gray-400"
            />
            <img
              src={Search}
              alt="search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>

        {/* Add Beneficiary Button */}
        <div className="relative left-[630px] top-[-20px]">
          <NavLink to={"/AddBeneficiary"}>
            <button className="bg-red-600 text-white flex items-center gap-2 px-4 py-3 rounded-lg">
              <img
                src={AddImg}
                alt="Add Beneficiary"
                className="w-5 h-5 filter invert"
              />
              Add beneficiary
            </button>
          </NavLink>
        </div>
      </div>

      {/* Beneficiary List */}
      <div className="w-[980px] mx-auto bg-white rounded-xl shadow-lg p-14 ml-[-30px] mt-[35px]">
        <div className="flex justify-between items-center text-gray-600 text-lg font-medium mb-6 w-[460px]">
          <h2>Account name</h2>
          <h2>Country</h2>
        </div>

        {/* Beneficiary Rows */}
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 w-[900px] h-[62px] rounded-[15px] mb-10 flex justify-between items-center px-6"
            >
              <div className="flex gap-16">
                <h1 className="text-black text-lg font-normal">John Swead</h1>
                <h1 className="text-black text-lg font-normal ml-44">NGR - Naira</h1>
              </div>
              <div className="flex gap-12 mr-10">
                <button className="text-black text-lg font-normal">View</button>
                <button className="text-red-600 text-lg font-normal">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Beneficiary;