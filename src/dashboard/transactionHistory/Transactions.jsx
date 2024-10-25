/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch data from JSON server
        fetch('http://localhost:8000/transactions')
            .then(response => response.json())
            .then(data => {
                setTransactions(data);  // Update state with fetched data
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);  // Empty array ensures this runs once when the component mounts

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        Transaction ID: {transaction.id}, Amount: {transaction.amount}, Status: {transaction.description};
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;