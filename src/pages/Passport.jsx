/* eslint-disable no-unused-vars */
import React from 'react'
import Upload from '../assets/img/Upload.png';
import Circle from '../assets/img/black-Circle.png';

const Passport = () => {
  return (
    <div className='flex flex-col items-center gap-12 py-8'>
        <img src={Upload} className='w-7/12' />
        <h1 className='font-bold text-2xl'>Take a passport photograph</h1>
        <img src={Circle} />
        <button type="submit" className="bg-red-600 text-white font-semibold rounded py-2 md:w-48">Next</button>
    </div>
  )
}

export default Passport