/* eslint-disable no-unused-vars */
import React from 'react'
// import News from '../../assets/img/Frame 116.png';
import NewsCoins from '../../assets/img/NewsCoins.png'
import NewsCoins2 from '../../assets/img/NewsCoins2.png'
const Faq = () => {
  return (
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
    </div>
  )
}

export default Faq;