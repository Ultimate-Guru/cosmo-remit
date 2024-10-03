/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='text-center mt-16'>
      <h1 className='font-extrabold text-2xl mb-6'>Subscribe to our rates alert</h1>
      <input 
      type="text"
      placeholder='Type your email address'
      className='bg-gray-200 text-gray-500 p-6 text-2xl font-medium rounded w-8/12 text-center mb-10  outline-none' />
      <button
      className='text-white font-bold text-xl bg-red-600 rounded p-7 w-56 h-20'>
        Subscribe</button>
    </div>
    </>
  )
}

export default Footer