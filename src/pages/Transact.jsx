/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PinInput = () => {
  const [pin, setPin] = useState(["", "", "", ""]);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    // If input is valid (only one character), update the state
    if (value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
    }
  };

  return (
    <div className='flex flex-col h-screen items-center gap-20 py-20'>
      <h2 className="font-extrabold text-xl">Set Transaction Pin</h2>
      <p className="text-gray-700 font-bold">Enter Pin</p>
      <div className="flex gap-3">
        {pin.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className="w-16 h-16 text-2xl text-center bg-gray-400 rounded outline-none"/>
        ))}
      </div>
        <button type="submit" className="bg-red-600 text-white font-semibold rounded py-2 md:w-48">Submit</button>
    </div>
  );
};

export default PinInput;