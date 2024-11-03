/* eslint-disable no-unused-vars */
import React from 'react';
import BackArrow from "../../assets/img/bx_arrow-back.png";
import { useNavigate } from 'react-router-dom';

const AddBeneficiary = () => {

    const navigate = useNavigate();

    function nextPage() {
        navigate('/Layout');
    }

    return (
        <div className='flex flex-col items-center justify-center gap-6 relative'>
            {/* Back Button */}
            <div className='absolute top-4 left-3'>
                <img src={BackArrow} alt="BackArrow" className='w-8 cursor-pointer' onClick={nextPage}/>
            </div>

            {/* Page Title */}
            <h1 className='font-semibold text-4xl text-center mt-10'>
                Add a beneficiary
            </h1>

            {/* Bank Account Details Section */}
            <div className='w-[899px] max-w-3xl bg-white p-8'>
                
                <h2 className='font-medium text-[26px] mb-8'>
                    Bank Account Details
                </h2>

                {/* Form Grid */}
                <div className='grid grid-cols-2 gap-[40px] mb-4'>
                    {/* Account Name */}
                    <div>
                        <label className='block font-normal text-xl mb-2 text-gray-800'>Account name</label>
                        <input
                            type='text'
                            className='outline-none h-[52px] w-[350px] rounded-[10px] bg-gray-200'
                        />
                    </div>

                    {/* Bank */}
                    <div className='ml-10'>
                        <label className='block font-normal text-xl mb-2 text-gray-800'>Bank</label>
                        <select
                           className='h-[52px] w-[350px] rounded-[10px] bg-gray-200 outline-none text-gray-800 font-normal'>
                            <option value="" disabled selected>-select-</option>
                            {/* Bank options to be added here */}
                        </select>
                    </div>

                    {/* Account Number */}
                    <div>
                        <label className='block font-normal text-xl mb-2 text-gray-800'>Account number</label>
                        <input
                            type='text'
                            className='outline-none h-[52px] w-[350px] rounded-[10px] bg-gray-200'
                        />
                    </div>

                    {/* Bank Location */}
                    <div className='ml-10'>
                        <label className='block font-normal text-xl mb-2 text-gray-800'>Bank location</label>
                        <input
                            type='text'
                            className='outline-none h-[52px] w-[350px] rounded-[10px] bg-gray-200'
                        />
                    </div>
                </div>

                {/* Warning Text */}
                <p className='text-red-600 text-sm mt-6 w-[1000px]'>
                    Please enter the correct beneficiary account information to prevent potential delays in the transaction process.
                </p>

                {/* Submit Button */}
                <div className='flex justify-center'>
                    <button className='bg-red-600 text-white font-semibold text-[24px] px-14 py-[16px] rounded-xl w-[620px] h-[68px] mt-14 ml-10' onClick={nextPage}>
                        Add beneficiary
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBeneficiary;
