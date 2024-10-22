/* eslint-disable no-unused-vars */
import React from 'react'
import PImg from '../../assets/img/brock-wegner.png'

const Profile = () => {
  return (
    <div className='bg-gray-100'>
    <div className='flex items-center justify-center'>

      <div className='w-[918px] h-[729px] bg-white shadow-md mt-36 ml-32 rounded-2xl p-12'>
          <div className='flex justify-between items-center flex-row gap-3'>
            <div className='inline-flex items-center gap-9'>
              <img src={PImg} />
              <h1 className='font-medium text-3xl'>Kabir Akinola</h1>
            </div>
              <button
              className='w-40 h-12 leading-7 rounded-xl py-2 px-9 gap-3 bg-red-600 font-normal text-base text-white'
              >
                Edit profile
              </button>
          </div>
          <div className='gap-8 w-[645px] h-60'>
              <h2
              className='font-medium text-2xl mt-10'
              >
                Personal details</h2>

                <div className='flex justify-between w-[477px] h-16 mt-6'>
                    <div className='flex flex-col w-24 h-16 gap-3'>
                        <h3 className='font-normal text-lg text-gray-500'>First name</h3>
                        <span className='text-xl font-normal text-black'>Kabir</span>
                    </div>

                    <div className='flex flex-col w-24 h-16 gap-3'>
                        <h3 className='font-normal text-lg text-gray-500'>Last name</h3>
                        <span className='text-xl font-normal text-black'>Akinola</span>
                    </div>
                </div>

                <div className='flex justify-between w-[645px] h-16 mt-7'>
                    <div className='flex flex-col w-48 h-16 gap-3'>
                        <h3 className='font-normal text-lg text-gray-500'>Country of residence</h3>
                        <span className='text-xl font-normal text-black'>United Kingdom</span>
                    </div>

                    <div className='flex flex-col w-72 h-16 gap-3'>
                        <h3 className='font-normal text-lg text-gray-500'>Email address</h3>
                        <span className='text-xl font-normal text-black'>Kabirakinola@gmail.com</span>
                    </div>
                </div>

                <div className='mt-20 w-[363px h-32] gap-7'>
                    <h4 className='w-[363px] h-8 font-medium text-2xl text-black'>Transaction limits</h4>

                    <div className='flex justify-between mt-7 w-[363px] h-16 gap-[79px]'>
                        <div className='w-40 h-16 gap-[5px]'>
                        <h3 className='font-normal text-lg text-gray-500 mb-3'>Daily limit</h3>
                        <span className='text-xl font-normal text-black'>20,000 UK</span>
                        </div>

                        <div className='w-40 h-16 gap-[5px] '>
                        <h3 className='font-normal text-lg text-gray-500 mb-3'>Yearly limit</h3>
                        <span className='text-xl font-normal text-black'>1,000,000 UK</span>
                        </div>
                    </div>
                </div>

          </div>
      </div>

    </div>
    </div>
  )
}

export default Profile;