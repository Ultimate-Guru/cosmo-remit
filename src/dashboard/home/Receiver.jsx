/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import BackArrow from '../../assets/img/bx_arrow-back.png'
import Check from '../../assets/img/Frame 308.png'

const ReviewPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transaction = location.state; // Access the passed formData

    const [transactions, setTransactions] = useState([]);
    const [ShowPinQuest, setShowPinQuest] = useState(false);

    const handleOverLay = () => {
        setShowPinQuest(!ShowPinQuest);
    }

    useEffect(
        () => {
            // Fetch data from JSON server
            fetch('http://localhost:8000/transactions')
                .then(response => response.json())
                .then(data => setTransactions(data))
                .catch(error => console.error('Error fetching data:', error));
        }, []
    );

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Function to get day suffix (e.g., "st", "nd", "rd", "th")
        const getDaySuffix = (day) => {
            if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${day}${getDaySuffix(day)} ${month}, ${year}`;
    };

    const [currentDate, setCurrentDate] = useState('');

    useEffect(
        () => {
            const today = new Date();
            setCurrentDate(formatDate(today))
        }, []
    );

    const prevpage = () => {
        navigate('/Dashboard');
    }

    const [pin, setPin] = useState(["", "", "", ""]);

    // Handle input change
    const handleChange = (e, index) => {
        const value = e.target.value;

        // If input is valid (only one character), update the state
        if (value.length <= 1 && /^[0-9]*$/.test(value)) {
            const newPin = [...pin];
            newPin[index] = value;
            setPin(newPin);

            // Move to the next input if current input is filled
            if (value && index < pin.length - 1) {
                document.getElementById(`pin-input-${index + 1}`).focus();
            }
        }
    };

    // Handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !pin[index]) {
            if (index > 0) {
                document.getElementById(`pin-input-${index - 1}`).focus();
            }
        }
    };

    return (
        <>
            <img src={BackArrow} className='w-[50px] h-[45px] relative top-[13px] left-[8px] cursor-pointer' onClick={prevpage} />
            <div className="flex items-center justify-center gap-[15px]">
                <h2 className='font-semibold text-4xl text-center w-[678px] h-[48px]'>Review</h2>
                {transactions.length > 0 && transaction && (
                    <div className='w-[778px] h-[335px] flex items-center justify-between absolute top-[130px] left-[265px] '>
                        <div className='w-56 h-[335px] p-3 gap-9'>
                            <div className='font-normal text-[20px] leading-[50px]'>
                                <p>Reference No</p>
                                <p>Transaction date</p>
                                <p>Recipient</p>
                                <p>Amount to send</p>
                                <p>Charges</p>
                                <p>Payment method</p>
                            </div>
                        </div>
                        <div className='w-[229px] h-[335px] p-3 gap-9'>
                            <div className='font-normal text-[20px] flex items-end justify-center flex-col leading-[50px]'>
                                <span>{transactions[0].Reference}</span>
                                <span>{currentDate}</span>
                                <span>Musa Ibrahim</span>
                                <span>{transaction.sendAmount} {transaction.currencySend}</span>
                                <span>{transaction.charges}</span>
                                <span>{transaction.paymentMethod}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className='w-[770px] h-[312px] absolute top-[500px] left-[280px] gap-[40px]'>
                    <h3 className='w-[770px] h-[39px] font-semibold text-[26px] mb-3'>Receiver details</h3>
                    {
                        transaction && (
                            <div className='w-[770px] h-[233px] flex items-center justify-between ml-[-10px]'>
                                <div className='w-[204px] h-[233px] p-[10px] gap-[31px]'>
                                    <div className='font-normal text-[20px] leading-[50px]'>
                                        <p>Account name</p>
                                        <p>Amount to receive</p>
                                        <p>Bank name</p>
                                        <p>Account number</p>
                                    </div>
                                </div>
                                <div className='w-[261px] h-[233px] p-[10px] gap-[31px] leading-[50px]'>
                                    <div className='font-normal text-[20px] leading-[50px] flex items-end justify-center flex-col'>
                                        <span>Musa Mamman Ibrahim</span>
                                        <span>{transaction.receiveAmount} {transaction.currencyReceive}</span>
                                        <span>United Bank For Africa</span>
                                        <span>2345236657</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>

                <div className='w-[1022px] h-[239px] absolute top-[820px] left-[250px] gap-[25px]'>
                    <div className='w-[1022px] h-[81px] gap-[15px] flex items-center'>
                        <img src={Check} />
                        <p className='text-red-600'>Transaction will be completed upon payment confirmation in our bank account. Large/first payments may take up to 24 hours. Also, the rate is locked with a transaction, it will not be changed or altered even when the transaction has failed, cancelled or expired</p>
                    </div>
                    <div className='w-[653px] h-[54px] gap-[15px] flex items-center'>
                        <img src={Check} />
                        <p className='text-red-600'>Confirm that money will be sent from your account. If not, the whole
                            transaction will be reversed</p>
                    </div>
                    <div className='w-[1022px] h-[54px] gap-[15px] flex items-center'>
                        <img src={Check} />
                        <p className='text-red-600'>Transaction of $4999 or more per month may require additional proof of source of funds (Payslips, bank statement). This does not take accountyour personal need or objective</p>
                    </div>
                </div>

                <div className='w-[662px] h-[68px] absolute top-[1100px] left-[280px] flex justify-between'>
                    <NavLink to={'/Layout'}>
                        <button
                            className='mb-10 py-[16px] px-[50px] w-[301px] h-[68px] rounded-[10px] gap-[10px] bg-gray-600 bg-opacity-45 font-semibold text-[24px]'>
                            Edit
                        </button>
                    </NavLink>
                    <button
                        onClick={handleOverLay}
                        className='py-[16px] px-[50px] w-[301px] h-[68px] rounded-[10px] gap-[10px] bg-red-600 font-semibold text-[24px] text-white'>
                        Make Payment
                    </button>
                </div>

                {/* Pin */}
                {
                    ShowPinQuest && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className='w-[722px] h-[486px] rounded-[20px] bg-white'>
                                <h4 className='w-[254px] h-[36px] mt-12 ml-56 text-center font-medium text-[24px]'>Please enter your pin</h4>
                                <div className='w-[498px] h-[93px] ml-[110px] mt-20 flex items-center justify-between'>
                                    {pin.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`pin-input-${index}`} // Added ID for accessibility
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
                                            className="w-[93px] h-[93px] text-2xl text-center bg-gray-200 rounded outline-none"
                                            aria-label={`Pin digit ${index + 1}`} // Accessibility label
                                        />
                                    ))}
                                </div>

                                <NavLink to={'/Notice'}>
                                    <button
                                        className='mb-10 py-[16px] px-[50px] w-[301px] h-[68px] rounded-[10px] gap-[10px] bg-red-600 text-white font-semibold text-[24px] ml-[210px] mt-24'>
                                        Next
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );

};

export default ReviewPage;