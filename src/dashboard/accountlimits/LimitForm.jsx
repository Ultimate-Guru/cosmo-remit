/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function RequestLimitForm() {
  const navigate = useNavigate();

  // Function to handle the clicking event
  const handleNextPage = () => {
    navigate('/Residence');
  }

  return (
    <div className="bg-neutral-100 p-10 h-screen flex justify-center items-center">
      {/* Form Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full h-96">
        {/* Reason for Request */}
        <div className="mb-6 mt-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Reason for request</label>
            <select className="outline-none text-sm w-full p-3 bg-gray-100 text-gray-400 rounded-md">
                <option>-Select-</option>
                <option>Rewards and Benefits</option>
                <option>Enhanced Financial Flexibility</option>
                <option>Improved Creditworthiness</option>
            </select>
        </div>

        {/* Enter Limit */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Enter limit</label>
          <input type="number" className="outline-none w-full p-3 bg-gray-100 rounded-md"/>
        </div>

        {/* Proceed Button */}
        <button className="bg-red-600 text-white font-bold p-3 w-52 ml-24 mt-9 rounded-md" onClick={handleNextPage}>Proceed</button>
      </div>
    </div>
  );
}

export default RequestLimitForm;