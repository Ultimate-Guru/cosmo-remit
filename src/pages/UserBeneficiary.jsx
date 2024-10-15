import React from 'react';
import UserDashboard from '../components/UserDashboard/UserDashboard';

const UserBeneficiary = () => {
  return (
    <div>
      <UserDashboard/>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-6 bg-background">
            <h1 className="text-2xl font-bold mb-4 col-span-full">Add a beneficiary</h1>
            <div className="w-full max-w-md">
                <h2 className="text-lg font-semibold mb-2">Bank Account Details</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-muted-foreground" htmlFor="account-name">Account name</label>
                        <input type="text" id="account-name" className="mt-1 block w-full p-2 border border-border rounded-md bg-input" placeholder="Enter account name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-muted-foreground" htmlFor="bank">Bank</label>
                        <select id="bank" className="mt-1 block w-full p-2 border border-border rounded-md bg-input" required>
                            <option value="" disabled selected>-select-</option>
                            <option value="bank1">Bank 1</option>
                            <option value="bank2">Bank 2</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="w-full max-w-md">
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-muted-foreground" htmlFor="account-number">Account number</label>
                        <input type="text" id="account-number" className="mt-1 block w-full p-2 border border-border rounded-md bg-input" placeholder="Enter account number" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-muted-foreground" htmlFor="bank-location">Bank location</label>
                        <input type="text" id="bank-location" className="mt-1 block w-full p-2 border border-border rounded-md bg-input" placeholder="Enter bank location" required />
                    </div>
                    <p className="text-red-500 text-sm mb-4">Please enter the correct beneficiary account information to prevent potential delays in the transaction process.</p>
                </form>
            </div>
        </div>
        
        <button type="submit" className="w-full bg-destructive text-destructive-foreground p-2 rounded-lg hover:bg-destructive/80">Add beneficiary</button>
        </div>
    </div>
  )
}

export default UserBeneficiary
