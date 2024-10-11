import React, { useState, useEffect } from 'react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch data from JSON server
        fetch('http://localhost:5000/transactions')
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Log the fetched data
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
                        Transaction ID: {transaction.id}, Amount: {transaction.amount}, Status: {transaction.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;