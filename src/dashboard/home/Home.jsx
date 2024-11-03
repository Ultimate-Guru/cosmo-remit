// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Img from '../../assets/img/basil_exchange-outline.png'
import Flag from '../../assets/img/twemoji_flag-nigeria.png'
import RedCircle from '../../assets/img/Ellipse 4.png'
import Send from '../../assets/img/bi_send-fill.png'
import UK from '../../assets/img/twemoji_flag-united-kingdom.png'

const Home = () => {

  const [formData, setFormData] = useState({
    sendAmount: '',
    paymentMethod: 'Bank transfer',
    receiveAmount: '',
    currencySend: 'UK',
    currencyReceive: 'NGN',
    rate: '1 UK = 1700 NGN',
    charges: 0,
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    // Navigate to the review page and pass the formData
    navigate('/Receiver', { state: formData });
  };

  const [showConfirmForm, setShowConfirmForm] = useState(false);
  const [TransactForm, setTransactForm] = useState(false);

  function handlePrevPage() {
    setShowConfirmForm(!showConfirmForm);
  }

  function handleOverlayToggle() {
    setShowConfirmForm(!showConfirmForm);
  }

  function handleOverlayToggle2() {
    setTransactForm(!TransactForm);
  }

  return (
    <div>

      <div className="text-left font-medium text-[26px] absolute left-[290px] top-32 w-[125px]">
        Welcome
      </div>

      <div
        className="bg-white rounded-[15px] p-5 flex flex-col gap-2.5 items-start justify-start w-[239px] h-[146px] absolute left-[275px] top-[197px]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1)" }}>
        <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[142px] relative">
          <div className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
            <div className='bg-red-600 flex rounded-[19px]'>
              <img src={Img} className='w-[38px] h-[38px] p-2 filter brightness-0 invert' />
            </div>
            <div className="text-[24px] font-semibold">
              20{" "}
            </div>
          </div>
          <div className="text-lg font-normal">
            Transfer Made{" "}
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded-[15px] p-5 flex flex-col gap-2.5 items-start justify-start w-[239px] h-[146px] absolute left-[545px] top-[197px]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1)" }}>
        <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[142px] relative">
          <div className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
            <div className='bg-red-600 flex rounded-[19px]'>
              <img src={Img} className='w-[38px] h-[38px] p-2 filter brightness-0 invert' />
            </div>
            <div className="text-[24px] font-semibold">
              5{" "}
            </div>
          </div>
          <div className="text-lg font-normal">
            Beneficiaries{" "}
          </div>
        </div>
      </div>

      <div className='w-[518px] h-[315px] absolute top-[370px] left-[270px] rounded-2xl py-[33px] px-[17px] bg-white shadow-2xl'>
        <div className='w-[487px] h-[252px] gap-[26px]'>
          <h2 className='font-medium text-[20px]'>Recent transfers</h2>
          <div className='w-[487px] h-[196px] gap-6 mt-6'>
            <NavLink to={'/'}>
              <div className='w-[487px] h-[52px] rounded-[15px] py-3 px-5 gap-3 bg-green-100 mb-5'>
                <div className='w-[462px] h-9 flex flex-row gap-[26px] items-center justify-start shrink-0'>
                  <div className='flex flex-row items-center justify-start gap-[15px]'>
                    <img src="https://s3-alpha-sig.figma.com/img/b152/0bb1/2618439fe9edfc6e7620a2f59e213616?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vl4nRwySHaQEY2x7mfHYzAMGoGoJPUWW1PQdQVXwKhAgZ6o437mk-uwEli1ehtXpaH7vBDl3ezW0bMu1WqepY19wNhcrVIys0pd0M-MQFO3V9C0ikx0k-WFycCtr2vILXh873Ar6jiZI~KrfQAfva7mT82Zt4qXS8bN5gIWfRrYBQDCFyFtcZvNz7wH5DpYgZJCYLiftEgtZEwoyTVzN9tfhq76BjmLeygqF5tme2QB19Ms-wRfq42L4BItAXGMMIq1eZCaLVpMjRyUxEjy~bkx6u0FJU5uOVHEfs8X1Wf6BnTkImUE4IIxfIvISOAwJLJWTS24C37XcpQi1oiErYg__" className='w-9 h-9 rounded-full' />
                    <p className='font-normal text-base w-32 h-6'>Elizabeth Moses</p>
                    <div className='w-[122px] h-[21px] gap-3 flex flex-row'>
                      <img src={Flag} className='w-5 h-5' />
                      <p className='font-normal text-base w-[94px] h-6'>NGN650,000</p>
                    </div>
                    <p className='font-normal text-base w-[75px] h-6' style={{ color: 'rgba(75, 181, 67, 1)' }}>Successful</p>
                    <p className='w-[29px] h-[25px] text-red-600'>View</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to={'/'}>
              <div className='w-[487px] h-[52px] rounded-[15px] py-3 px-5 gap-3 bg-green-100 mb-5'>
                <div className='w-[462px] h-9 flex flex-row gap-[26px] items-center justify-start shrink-0'>
                  <div className='flex flex-row items-center justify-start gap-[15px]'>
                    <img src="https://s3-alpha-sig.figma.com/img/c82d/92fb/643b2292420865593037cb057f7e8452?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlqFBalTWBWZvUeRVDZjKInLtFIWnYEC0c~6CeHKlUOOhcDSI14haLlUznC1DS1SlYqaQb6WtL9uC9TRCB1x~j8PM40vJrHod2veEbJhmTj~Xbri81X1-QjidRjo70qmut9fOY~dOwyHUR8Fa4~j4lkBCvBPVYwnnjdCieyK-ZUUJX9paImCijiWGbK2PBeVTaukLqopmyqvo3aw5gCV1s670I~MUU2kUNzqsCw9hov3XUbDBEaptQuZfOlFpLBlSiPA8APTn3jpLFmscnWXabUFbCdb-3w8Zum0BYGf4OUu6VHIMsD-qcAYJwQkW7kzsLfYJeiO5-AkSoAN-zS37Q__" className='w-9 h-9 rounded-full' />
                    <p className='font-normal text-base w-97 h-6'>Aisha Ibrahim</p>
                    <div className='w-[122px] h-[21px] gap-3 flex flex-row'>
                      <img src={Flag} className='w-5 h-5' />
                      <p className='font-normal text-base w-[94px] h-6'>NGN850,000</p>
                    </div>
                    <p className='font-normal text-base w-[75px] h-6' style={{ color: 'rgba(75, 181, 67, 1)' }}>Successful</p>
                    <p className='w-[29px] h-[25px] text-red-600'>View</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to={'/'}>
              <div className='w-[487px] h-[52px] rounded-[15px] py-3 px-5 gap-3 bg-green-100 mb-5'>
                <div className='w-[462px] h-9 flex flex-row gap-[26px] items-center justify-start shrink-0'>
                  <div className='flex flex-row items-center justify-start gap-[15px]'>
                    <img src="https://s3-alpha-sig.figma.com/img/4858/8321/ff69f90e7d4eef1028e0f502f53fa5a6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IhWscjpOtocZkihc7kHW5upboqTiqSZK2Sn8SgCaeCHi0cxP3rrm8M3fD2pd0zXOtWT0A78Uwx~ma43aAG60uG8kl4IKmBf9RsMtRnyw9q1qwaoJC4EQNsuSkWuZ6-jQzI5IaY7bh8CSzmEuhIWoMpix8NTdhnMG-aND48aItYLf8GVJtkptouul-KU9Z~Xg~r9i0PYPF~SHxDHyP-arK3XbTIZyPX6mnc7R1ajDxBDX6yu-~4POANqcAnt4gOaysByK8ivay0qLGORe2ynhp0QYdecXk9W6CNOltE~r0ziTNS6V9R-pZaprxLgNFKZ73itgLiaIyVUoMmFi~SxdDA__" className='w-9 h-9 rounded-full' />
                    <p className='font-normal text-base w-[121px] h-6'>Murtala Muktar </p>
                    <div className='w-[122px] h-[21px] gap-3 flex flex-row'>
                      <img src={Flag} className='w-5 h-5' />
                      <p className='font-normal text-base w-[94px] h-6'>NGN850,000</p>
                    </div>
                    <p className='font-normal text-base w-[75px] h-6' style={{ color: 'rgba(75, 181, 67, 1)' }}>Successful</p>
                    <p className='w-[29px] h-[25px] text-red-600'>View</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className='w-[518px] h-[192px] absolute top-[712px] left-[270px] rounded-[15px] p-7 gap-3 bg-white shadow-2xl'>
        <div className='w-[479px] h-[139px] gap-5'>
          <div className='w-[479px] h-[103px] gap-5'>
            <h3 className='w-[479px] h-9 font-medium text-2xl'>Current Limits</h3>
            <div className='w-[363px] h-[56px] gap-[79px] flex items-center justify-between mt-3'>
              <div className='w-[142px] h-[56px] gap-[5px] flex flex-col'>
                <p className='w-[142px] h-[24px] font-normal text-lg text-gray-500'>Daily limit</p>
                <span className='w-[142px] h-[27px] text-[18px] font-medium'>20,000 UK</span>
              </div>

              <div className='w-[142px] h-[56px] gap-[5px] flex flex-col'>
                <p className='w-[142px] h-[24px] font-normal text-lg text-gray-500'>Yearly limit</p>
                <span className='w-[142px] h-[27px] text-[18px] font-medium'>1,000,000 UK</span>
              </div>
            </div>
            <h4 className='w-[479px] h-6 text-[15.2px] font-normal mt-5'>If you want higher limits. temporarily or permanently, <NavLink to={'/Limits'} className='text-red-600'>click here</NavLink></h4>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-end absolute left-[800px] top-[130px] p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 w-[438px] h-[760px]">
          <h2 className="w-[220px] h-11 absolute top-9 left-40 font-medium text-[23px]">Make a Transfer</h2>
          <div className='w-[532px] h-[700px] absolute top-[120px] left-[31px] gap-[32px]'>

            <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-2 px-[24px] gap-[10px] mb-10">
              <label className='block text-base font-medium text-gray-500'>You send</label>
              <div className="flex items-center">
                <input type="number" className='bg-transparent outline-none rounded-lg p-2 w-[300px] placeholder-black placeholder:font-medium placeholder:text-xl' placeholder="500" />
                <img src={UK} className='w-[20px] h-[20px] mr-[4px]' /><select className='border-none font-normal text-[18px] outline-none bg-transparent w-20'>
                  <option>UK</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-3 px-[24px] gap-[10px] mb-10">
              <label className='block text-base font-medium text-gray-500' style={{ color: 'rgba(147, 147, 147, 1)' }}>Payment method</label>
              <select className='border-none text-[18px] outline-none text-xl font-medium w-[365px] h-[27px] bg-transparent'>
                <option>Bank transfer</option>
              </select>
            </div>

            <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-2 px-[24px] gap-[10px] mb-10">
              <label className='block text-base font-medium text-gray-500'>Recipients gets</label>
              <div className="flex items-center">
                <input type="number" className='bg-transparent outline-none rounded-lg p-2 w-[300px] placeholder-black placeholder:font-medium placeholder:text-xl' placeholder="850,000" />
                <img src={Flag} className='w-[20px] h-[20px] mr-[4px]' /><select className='border-none font-normal text-[18px] outline-none bg-transparent w-24'>
                  <option>NGN</option>
                </select>
              </div>
            </div>


            <div className='w-[513px] h-[63px] gap-[15px] mb-10 mt-12'>
              <div className='flex justify-between w-[402px] h-7 mb-3'>
                <div className='h-[24px] gap-[16px]'>
                  <div className='flex items-center w-20 justify-between'>
                    <img src={RedCircle} />
                    <p className='text-gray-600 ml-6'>Rate</p>
                  </div>
                </div>
                <span className='w-[124px] h-7 font-normal text-[16px]' >1 UK = 1700 NGN</span>
              </div>

              <div className='flex justify-between w-[515px] h-7'>
                <div className='h-[24px] gap-[16px]'>
                  <div className='flex items-center w-20 justify-between'>
                    <img src={RedCircle} />
                    <p className='text-gray-600 ml-6'>Charges</p>
                  </div>
                </div>
                <span className='w-[124px] h-7 font-normal text-[16px]'>0</span>
              </div>
            </div>

            <button
              onClick={handleOverlayToggle}
              className="bg-red-600 text-white rounded-[10px] py-[16px] px-[50px] w-[410px] h-[62px] gap-[10px] flex items-center justify-center">
              Send <img src={Send} className='filter invert' />
            </button>
          </div>
        </div>
      </div> */}


<div className="flex justify-end absolute left-[800px] top-[130px] p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[438px] h-[760px]">
        <h2 className="w-[220px] h-11 absolute top-9 left-40 font-medium text-[23px]">Make a Transfer</h2>
        <div className='w-[532px] h-[700px] absolute top-[120px] left-[31px] gap-[32px]'>
          <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-2 px-[24px] gap-[10px] mb-10">
            <label className='block text-base font-medium text-gray-500'>You send</label>
            <div className="flex items-center">
              <input
                type="number"
                name="sendAmount"
                value={formData.sendAmount}
                onChange={handleInputChange}
                className='bg-transparent outline-none rounded-lg p-2 w-[300px] placeholder-black placeholder:font-medium placeholder:text-xl'
                placeholder="500"
              />
              <img src={UK} className='w-[20px] h-[20px] mr-[4px]' />
              <select className='border-none font-normal text-[18px] outline-none bg-transparent w-20' >
                <option>{formData.currencySend}</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-3 px-[24px] gap-[10px] mb-10">
            <label className='block text-base font-medium text-gray-500'>Payment method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className='border-none text-[18px] outline-none text-xl font-medium w-[365px] h-[27px] bg-transparent'
            >
              <option>Bank transfer</option>
            </select>
          </div>

          <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-2 px-[24px] gap-[10px] mb-10">
            <label className='block text-base font-medium text-gray-500'>Recipient gets</label>
            <div className="flex items-center">
              <input
                type="number"
                name="receiveAmount"
                value={formData.receiveAmount}
                onChange={handleInputChange}
                className='bg-transparent outline-none rounded-lg p-2 w-[300px] placeholder-black placeholder:font-medium placeholder:text-xl'
                placeholder="850,000"
              />
              <img src={Flag} className='w-[20px] h-[20px] mr-[4px]' />
              <select className='border-none font-normal text-[18px] outline-none bg-transparent w-24' >
                <option>{formData.currencyReceive}</option>
              </select>
            </div>
          </div>

          <div className='w-[513px] h-[63px] gap-[15px] mb-10 mt-12'>
            <div className='flex justify-between w-[402px] h-7 mb-3'>
              <div className='h-[24px] gap-[16px]'>
                <div className='flex items-center w-20 justify-between'>
                  <img src={RedCircle} />
                  <p className='text-gray-600 ml-6'>Rate</p>
                </div>
              </div>
              <span className='w-[124px] h-7 font-normal text-[16px]'>{formData.rate}</span>
            </div>

            <div className='flex justify-between w-[515px] h-7'>
              <div className='h-[24px] gap-[16px]'>
                <div className='flex items-center w-20 justify-between'>
                  <img src={RedCircle} />
                  <p className='text-gray-600 ml-6'>Charges</p>
                </div>
              </div>
              <span className='w-[124px] h-7 font-normal text-[16px]'>{formData.charges}</span>
            </div>
          </div>

          <button
            onClick={
              () => {
                handleOverlayToggle()
              }
            }
            className="bg-red-600 text-white rounded-[10px] py-[16px] px-[50px] w-[410px] h-[62px] gap-[10px] flex items-center justify-center">
            Send <img src={Send} className='filter invert' />
          </button>
        </div>
      </div>
    </div>

      {/*ConfirmForm OverLay */}
      {
        showConfirmForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className='bg-white p-8 rounded-xl shadow-lg h-[341px] relative'>

              {/* Confirm Form */}
              <h2 className='text-[26px] text-center font-medium w-[456px] h-11 mt-8'>Are you sure you want to proceed?</h2>

              <div className='w-[471px] h-[68px] flex items-center justify-between mt-10'>
                <button
                  onClick={handlePrevPage}
                  className='w-[222px] h-[68px] rounded-[10px] py-[16px] px-14 text-black bg-gray-300 font-semibold text-[24px]'>No</button>
                <button
                  onClick={handleOverlayToggle2}
                  className='w-[222px] h-[68px] rounded-[10px] py-[16px] px-14 text-white bg-red-600 font-semibold text-[24px]'>Yes</button>
              </div>
            </div>
          </div>
        )
      }

      {/* Reason for transfer form */}
      {TransactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-[20px] h-[455px] shadow-lg relative">

            {/* Reason for Request */}
            <div className="mb-6 mt-4 w-[562px] h-[104px]">
              <label className="block text-black text-[20px] font-normal mb-2">Reason for transfer</label>
              <select className="outline-none text-[18px] w-[562px] py-[16px] px-[19px] bg-gray-100 text-gray-600 font-normal rounded-[10px]">
                <option>-Select-</option>
                <option>Paying Bills or Loans</option>
                <option>Sending Money to Family</option>
                <option>Sending Money to Friends</option>
                <option>Purchasing Goods or Services</option>
              </select>
            </div>

            {/* Enter Limit */}
            <div className="mb-6 w-[562px] h-[104px]">
              <label className="block text-black text-[20px] font-normal mb-2">Select source of funds</label>
              <select className="outline-none text-[18px] w-[562px] py-[16px] px-[19px] bg-gray-100 text-gray-600 font-normal rounded-[10px]">
                <option>-Select-</option>
                <option>Personal Savings</option>
                <option>Loans</option>
                <option>Investments</option>
              </select>
            </div>

            <div className="flex flex-row items-center ml-2 w-full gap-[6px] mt-[-12px]">
              <input type="checkbox" className="mr-1" required />
              <p className="font-normal text-[16px] whitespace-nowrap gap-1 inline-flex">
                I agree to the {" "}
                <a href="#" className="text-red-600 font-normal">terms</a> & {" "}
                <a href="#" className="text-red-600 font-normal">conditions</a> and{" "}
                <a href="#" className="text-red-600 font-normal">privacy policy</a>
              </p>
            </div>

            {/* Proceed Button */}
            <button 
            onClick={handleFormSubmit}
            className="bg-red-600 text-white font-semibold text-[24px] py-[16px] px-[50px] w-[320px] h-[68px] rounded-[10px] ml-28 mt-11">Send now</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Home