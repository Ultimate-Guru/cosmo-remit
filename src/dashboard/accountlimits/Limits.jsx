/* eslint-disable no-unused-vars */
import React from "react";

function Limits() {
  return (
    <div className="bg-neutral-100 p-10">
      {/* Account Limits Title */}
      <h1 className="font-extrabold text-xl text-left ml-40 mb-6">Account Limits</h1>
      
      {/* Current Limits Section */}
      <div className="ml-10">
        <h2 className="font-bold text-lg mb-4 ml-48">Current Limits</h2>

        {/* Limits Card */}
        <div className="flex items-center justify-between p-8 bg-white rounded-lg max-w-3xl shadow-lg ml-48">
          {/* Daily Limit */}
          <div className="text-left">
            <p className="text-gray-400 font-semibold">Daily limit</p>
            <p className="text-black text-lg">20,000 UK</p>
          </div>

          {/* Yearly Limit */}
          <div className="text-left">
            <p className="text-gray-400 font-semibold">Yearly limit</p>
            <p className="text-black text-lg">1,000,000 UK</p>
          </div>

          {/* Increase Limits Button */}
          <button className="bg-red-600 text-white font-bold p-3 rounded-md w-48">
            Increase Limits
          </button>
        </div>
      </div>
    </div>
  );
}

export default Limits;