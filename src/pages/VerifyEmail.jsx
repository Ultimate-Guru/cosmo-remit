/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import VerifyNav from '../assets/img/VerifyNav.png';
import VerifyImg from '../assets/img/VerifyEmail.png';

const VerifyEmail = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white min-h-screen px-4'>
        <div className="flex flex-row justify-center mb-8 w-full">
          <img src={VerifyNav} alt="Navigation" className='w-7/12 mt-4' />
        </div>
        <img src={VerifyImg} alt="Verify Email" className='mb-7 max-w-full h-68' />
        <div className="text-center mb-6">
          <p className='font-medium'>We've sent an email to you <span className="font-extrabold">gurumini@gmail.com</span></p>
          <p className='font-medium'>Please check your inbox to verify.</p>
        </div>
        <button className='text-white bg-gray-400 hover:bg-gray-300 font-bold py-2 px-4 rounded w-full max-w-xs mt-0'>Next</button>
    </div>
  )
}

export default VerifyEmail;