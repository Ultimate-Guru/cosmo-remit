/* eslint-disable no-unused-vars */
import React from 'react'
import GetApp from '../../assets/img/Frame 167.png';
import GetDApp from '../../assets/img/Frame 502.png';

const Apps = () => {
  return (
    <>
      {/* <div>
        <img src={GetApp}/>
    </div> */}

      <div className="w-full">
        {/* Large screen image */}
        <div className="hidden lg:block">
          <img src={GetApp} alt="Working illustration" className="mb-10 w-full" />
        </div>

        {/* Small screen image */}
        <div className="flex items-center justify-center lg:hidden">
          <img src={GetDApp} alt="Work illustration" className="w-full max-w-full mb-6" />
        </div>
      </div>
    </>
  )
}

export default Apps;