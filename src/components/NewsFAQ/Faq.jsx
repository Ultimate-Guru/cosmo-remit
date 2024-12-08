<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react'
// import News from '../../assets/img/Frame 116.png';
import NewsCoins from '../../assets/img/NewsCoins.png'
import NewsCoins2 from '../../assets/img/NewsCoins2.png'
=======
// eslint-disable-next-line no-unused-vars  
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Coin from '../../assets/img/coin.png.png'

>>>>>>> 7989d41ffd6d7896ac0ab0198e010f86cc97c4e8
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      question: 'How do I create an account',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero non, condimentum.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero non, condimentum.'
    },
    {
      question: 'How do I change my personal details?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero non, condimentum.'
    },
    {
      question: 'How do I contact support staff?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero non, condimentum.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<<<<<<< HEAD
    <div className='mt-8'>
        {/* <div>
          <img src={News} className='mt-14 mb-14'/>
        </div> */}
        <div className='mx-14'>
          <h2 className='hidden lg:flex lg:flex-col text-[35px] font-[65px] text-center font-semibold mb-[10px] sm:mb-[20px]'>
            News & FAQ
          </h2>
          {/* Small Screen Header 1 */}
          <h2 className='lg:hidden text-[35px] font-[65px] text-center font-semibold mb-[10px] sm:mb-[20px]'>
            News
          </h2>
          <div className="flex flex-col xl:gap-5  md:flex-col lg:flex-row ">
            <div className='flex flex-row gap-5 lg:gap-10 md:gap-8'> 
            <div className='rounded-xl'>
                <img className='w-full rounded-2xl' src={NewsCoins} alt="" />
                <div className='lg:p-5 lg:mb-10 lg:pb-10'>
                  <h2 className='text-[10px] sm:text-[15px] md:text-[27px] lg:text-[35px] font-[60px] font-semibold'>Nigerian Naira reduces it's value...</h2>
                  <p className='text-[13px] pb-10 md:text-[15px] lg:text-[17px] font-semibold text-gray-500 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam autem, porro veritatis</p>
                </div>
            </div>
            <div className='rounded-xl'>
              <img className='w-full rounded-2xl' src={NewsCoins2} alt="" />
              <div className='lg:p-5 lg:mb-10 lg:pb-10'>
              <h2 className='text-[10px] sm:text-[15px] md:text-[27px] lg:text-[35px] font-[60px] font-semibold'>Nigerian Naira reduces it's value...</h2>
                <p className='text-[13px] pb-10 md:text-[15px] lg:text-[17px] font-semibold text-gray-500 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam autem, porro veritatis</p>
              </div>
            </div>
            </div>
            <div className='lg:p-3 lg:m-2'></div>
            <div className='w-[100vh]'>
            {/* Small Screen Header 2 */}
            <h2 className='lg:hidden text-[35px] font-[65px] text-center font-semibold mb-[10px] sm:mb-[20px]'>
              FAQ
            </h2>
                <div className='pt-5'>
                  <div>
                  <select className='w-full text-[20px] md:text-[23px] lg:[35px] font-[60px] font-semibold pb-7' name="" id="">
                    <option value={''} className=''>How do I create an account? </option>
                    <option value="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </option>
                  </select>
                  </div>
                  <div>
                  <select className='w-full text-[20px] md:text-[23px] lg:[35px] font-[60px] font-semibold pb-7' name="" id="">
                    <option value={''} className=''>How do I reset my password?</option>
                    <option value="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </option>
                  </select>
                  </div>
                  <div>
                  <select className='w-full text-[20px] md:text-[23px] lg:[35px] font-[60px] font-semibold pb-7' name="" id="">
                    <option value={''} className=''>How do I change my personal details?</option>
                    <option value="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </option>
                  </select>
                  </div>
                  <div>
                  <select className='w-full text-[20px] md:text-[23px] lg:[35px] font-[60px] font-semibold pb-7' name="" id="">
                    <option value={''} className=''>How do I contact support staff?</option>
                    <option value="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </option>
                  </select>
                  </div>
                </div>
            </div>
        </div>
        </div>
=======
    <div className='pt-20 pb-5'>
      <h2 className='text-[32px] font-medium mb-9 mt-4 text-center'>News & FAQ</h2>

      <div className='w-full gap-4 flex-wrap flex justify-center items-center'>

        {/* Card */}
        <div className='w-64 h-[410px] ml-auto p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>

          {/* Image */}
          <img
            src={Coin}
            alt="Coin"
            className='h-40 object-cover rounded-xl'
          />
          <div className='p-2'>
            {/* Title */}
            <h2 className="font-medium text-[20px] mb2">
              Nigerian Naira reduces it’s value....
            </h2>
            {/* Description */}
            <p className="text-base text-gray-600 mb-5 mt-3">
              Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Vivamus eros tortor,
            </p>
          </div>

        </div>

        <div className='w-64 h-[410px] mr-auto p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>

          {/* Image */}
          <img
            src={Coin}
            alt="Coin"
            className='h-40 object-cover rounded-xl'
          />
          <div className='p-2'>
            {/* Title */}
            <h2 className="font-medium text-[20px] mb2">
              Nigerian Naira reduces it’s value....
            </h2>
            {/* Description */}
            <p className="text-base text-gray-600 mb-5 mt-3">
              Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Vivamus eros tortor,
            </p>
          </div>

        </div>

        <div className="space-y-4 mx-auto mt-10">
          {faq.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full py-2 px-5 rounded-lg hover:bg-gray-100"
              >
                <span className='font-medium text-[19px] whitespace-nowrap'>{item.question}</span>
                <MdKeyboardArrowDown
                  className={`text-2xl ml-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-2 text-[14px] w-96 mx-auto">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
>>>>>>> 7989d41ffd6d7896ac0ab0198e010f86cc97c4e8
    </div>
  );
};

export default Faq;