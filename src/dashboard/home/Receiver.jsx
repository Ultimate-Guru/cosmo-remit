/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BackArrow from '../../assets/img/bx_arrow-back.png'

const ReviewPage = () => {
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

    return (
        <>
            <img src={BackArrow} className='w-[57.54px] h-[48.17px] relative top-[13.42px] left-[8.08px]' />
            <div className="flex items-center justify-center flex-col gap-[15px]">
                <h2 className='font-semibold text-4xl text-center w-[678px] h-[48px]'>Review</h2>
                {transactions.length > 0 && (
                    <div className="w-[778px] h-[355px] flex items-center justify-between">
                        <p>
                            Reference No
                            {transactions[0].Reference}
                        </p>
                        <p>Amount to send {transaction.sendAmount} {transaction.currencySend}</p>
                        <p>Payment method {transaction.paymentMethod}</p>
                        <p>Recipient gets {transaction.receiveAmount} {transaction.currencyReceive}</p>
                        <p>Rate {transaction.rate}</p>
                        <p>Charges {transaction.charges}</p>
                    </div>
                )}
            </div>
        </>
    );

};

export default ReviewPage;