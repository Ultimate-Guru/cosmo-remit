/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackArrow from '../../assets/img/bx_arrow-back.png'

const ReviewPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transaction = location.state; // Access the passed formData

    const [transactions, setTransactions] = useState([]);

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
        },[]
    );

    const prevpage = () => {
        navigate('/Layout');
    }

    return (
        <>
            <img src={BackArrow} className='w-[57px] h-[48px] relative top-[13px] left-[8px] cursor-pointer' onClick={prevpage}/>
            <div className="flex items-center justify-center gap-[15px]">
                <h2 className='font-semibold text-4xl text-center w-[678px] h-[48px]'>Review</h2>
                {transactions.length > 0 && transaction && (
                    <div className='w-[778px] h-[335px] flex items-center justify-between absolute top-[130px] left-[265px]'>
                        <div className='w-56 h-[335px] p-3 gap-9'>
                            <div className='font-normal text-[20px]'>
                                <p className='w-[133px] h-[30px]'>Reference No</p>
                                <p className='w-[171px] h-[30px]'>Transaction date</p>
                                <p className='w-[93px] h-[30px]'>Recipient</p>
                                <p className='w-[160px] h-[30px]'>Amount to send</p>
                                <p className='w-[86px] h-[30px]'>Charges</p>
                                <p className='w-[175px] h-[30px]'>Payment method</p>
                            </div>
                        </div>
                        <div className='w-[229px] h-[335px] p-3 gap-9'>
                            <div className='font-normal text-[20px] flex items-end justify-center flex-col'>
                                <span className='w-auto h-[30px]'>{transactions[0].Reference}</span>
                                <span className='w-[178px h-[30px]'>{currentDate}</span>
                                <span className='w-[69px h-[30px]'>{transaction.receiveAmount} {transaction.currencyReceive}</span>
                                <span className='w-auto h-[30px]'>{transaction.sendAmount} {transaction.currencySend}</span>
                                <span className='w-[13px] h-[30px]'>{transaction.charges}</span>
                                <span className='w-[133px] h-[30px]'>{transaction.paymentMethod}</span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );

};

export default ReviewPage;