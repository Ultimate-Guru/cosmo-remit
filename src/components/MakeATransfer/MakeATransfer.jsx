import React from 'react'

const MakeATransfer = () => {

        return (
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-card">
                <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white">Make a Transfer</h2>
            <div className="mt-4">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">You send</label>
                <div className="flex items-center mt-1">
                    <input type="number" className="flex-1 p-2 border border-zinc-300 rounded-md dark:border-zinc-600 dark:bg-input" placeholder="500" />
                    <select className="ml-2 p-2 border border-zinc-300 rounded-md dark:border-zinc-600 dark:bg-input">
                        <option>🇬🇧 UK</option>
                    </select>
                </div>
            </div>
            
            <div className="mt-4">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Payment method</label>
                <input type="text" className="mt-1 p-2 border border-zinc-300 rounded-md dark:border-zinc-600 dark:bg-input" value="Bank transfer" readonly />
            </div>
            
            <div className="mt-4">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Recipient gets</label>
                <div className="flex items-center mt-1">
                    <input type="number" className="flex-1 p-2 border border-zinc-300 rounded-md dark:border-zinc-600 dark:bg-input" value="850,000" readonly />
                    <select className="ml-2 p-2 border border-zinc-300 rounded-md dark:border-zinc-600 dark:bg-input">
                        <option>🇳🇬 NGN</option>
                    </select>
                </div>
            </div>
            
            <div className="mt-4">
                <div className="flex items-center">
                    <span className="text-red-500">●</span>
                    <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">Rate: 1 UK = 1700 NGN</span>
                </div>
                <div className="flex items-center">
                    <span className="text-red-500">●</span>
                    <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">Charges: 0</span>
                </div>
            </div>
            
            <button className="mt-6 w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">Send <span undefinedhidden="true">➡️</span></button>
            </div>
        )
    }

export default MakeATransfer
