/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {

  const Bg = {
    backgroundColor: 'rgba(240, 240, 240, 1)',
  }

  return (
    <>
      <div className='text-center mt-16'>

        <h1 className='font-medium text-3xl h-10 mb-6'>Subscribe to our rates alert</h1>

        <input
          style={Bg}
          type="text"
          placeholder='Type your email address'
          className=' text-gray-500 py-8 px-16 gap-3 text-2xl font-medium rounded-l-xl w-8/12 text-center mb-12 outline-none' />

        <button
          className='text-white font-medium text-3xl bg-red-600 rounded-r-xl w-64 h-24 gap-3 py-4 px-14'>
          Subscribe
        </button>

      </div>
    </>
  )
}

export default Footer