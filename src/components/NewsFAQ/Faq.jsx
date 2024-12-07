// eslint-disable-next-line no-unused-vars  
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Coin from '../../assets/img/coin.png.png'

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
    </div>
  );
};

export default Faq;