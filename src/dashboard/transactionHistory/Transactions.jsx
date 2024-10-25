/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';

// const Transactions = () => {
//     const [transactions, setTransactions] = useState([]);

//     useEffect(() => {
//         // Fetch data from JSON server
//         fetch('http://localhost:8000/transactions')
//             .then(response => response.json())
//             .then(data => {
//                 setTransactions(data); 
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);  

//     return (
//         <div>
//             <h2>Transactions</h2>
//             <ul>
//                 {transactions.map(transaction => (
//                     <li key={transaction.id}>
//                         Reference: {transaction.Reference}, Amount Sent: {transaction.amount}, 
//                         Rate: {transaction.Rate}, Channel: {transaction.Channel},
//                         Recipient: {transaction.Recipient}, Status: {transaction.Status}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Transactions;

import React from 'react'
import Search from "../../assets/img/ic_sharp-search.png";
import DateImg from '../../assets/img/icon-park-outline_transaction-order.png';
import FilterImg from '../../assets/img/basil_exchange-outline.png';

const Transactions = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-11'>
        <h2 className='font-semibold text-[26px] text-black'>Transactions</h2>

        <div className='flex items-center justify-center flex-row w-[1114px] h-14 gap-14'>
            <div className='flex justify-between h-[48px] py-4 px-4 bg-gray-200 rounded-xl'>
            <input 
            type="search"
            placeholder='Search'
            className='bg-transparent outline-none w-[556px]' />
            <img src={Search} />
            </div>

            <div className='flex w-[250px] h-[45.79px] py-4 px-4 bg-gray-200 rounded-xl'>
            <input 
            type=""
            placeholder='Select Date'
            className='bg-transparent outline-none' />
            <img src={DateImg} />
            </div>

            <div className='flex w-[250px] h-[46.24px] py-4 px-4 bg-gray-200 rounded-xl'>
            <input 
            type='filter'
            placeholder='Filter'
            className='bg-transparent outline-none' />
            <img src={FilterImg} />
            </div>
        </div>
    </div>
  )
}

export default Transactions