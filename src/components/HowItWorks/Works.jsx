/* eslint-disable no-unused-vars */
import React from 'react';
import Working from '../../assets/img/Frame 150.png';
import Work from '../../assets/img/Frame 530.png';

const Works = () => {
  return (
    <div className="w-full">
      {/* Large screen image */}
      <div className="hidden lg:block lg:p-12">
        <img src={Working} alt="Working illustration" className="mb-10 w-full" />
      </div>

      {/* Small screen image */}
      <div className="p-12 lg:p-12 flex items-center justify-center lg:hidden">
        <img src={Work} alt="Work illustration" className="w-full max-w-4xl mb-6" />
      </div>
    </div>
  );
};

export default Works;