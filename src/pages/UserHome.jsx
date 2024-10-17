/* eslint-disable no-unused-vars */
import React from 'react';
import Dashboard from '../components/UserDashboard/UserDashboard';
import UserNavbar from '../components/UserNavbar/UserNavbar';
import MadeTransfers from '../components/MadeTransfers/MadeTransfers'
import MadeBeneficiaries from '../components/MadeBeneficiaries/MadeBeneficiaries';
import RecentTransfers from '../components/RecentTransfers/RecentTransfers'
import CurrentLimits from '../components/CurrentLimits/CurrentLimits'
import MakeATransfer from '../components/MakeATransfer/MakeATransfer';

const UserHome = () => {
  return (
    <div>
        <div className="flex">
            <Dashboard />
            <UserNavbar />
        <div className='w-[70%]'>
            <MadeTransfers />
            <MadeBeneficiaries />
            <RecentTransfers />
            <CurrentLimits />
            <MakeATransfer />
        </div>
        </div>
    </div>
  )
}

export default UserHome
