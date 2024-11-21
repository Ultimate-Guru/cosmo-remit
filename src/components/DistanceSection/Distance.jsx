/* eslint-disable no-unused-vars */
import React from 'react'
import Dis from '../../assets/img/Frame 159.png';
import Dist from '../../assets/img/Frame 525.png';

const Distance = () => {
  return (
    <>
      <div className="w-full">
        {/* Large screen image */}
        <div className="hidden lg:block lg:p-12">
          <img src={Dis} alt="Working illustration" className="mb-10 w-full" />
        </div>

        {/* Small screen image */}
        <div className="p-6 lg:p-12 flex items-center justify-center lg:hidden">
          <img src={Dist} alt="Work illustration" className="w-full max-w-4xl mb-6" />
        </div>
      </div>
    </>
  )
}

export default Distance;