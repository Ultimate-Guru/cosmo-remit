import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import imgAssets from '../../assets/img/imgAssets'

const Dashboard = () => {
  return (

        <>
          <div className="flex flex-row space-y-4">
            <div className="flex flex-row h-screen p-4 bg-background text-foreground">
          <div className='w-[30%]'>
            <h1 className="text-5xl font-bold mb-6">Logo</h1>
            <a href="#" className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="home-icon" src={imgAssets.homeIconFilled} width="200px" />
              <span className="ml-2">Home</span>
            </a>
            <a href="#" className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="transaction-history-icon" src={imgAssets.chatHistoryLine} width="200px" />
              <span className="ml-2">Transaction History</span>
            </a>
            <a href="#" className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="beneficiaries-icon" src={imgAssets.fluentPeopleRegular} width="200px" />
              <span className="ml-2">Beneficiaries</span>
            </a>
            <a href="#" className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="account-limits-icon" src={imgAssets.shieldAccountOutline} width="200px" />
              <span className="ml-2">Account limits</span>
            </a>
            <a href="#" className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="profile-icon" src={imgAssets.profileIcon} width="200px" />
              <span className="ml-2">Profile</span>
            </a>
          </div>
        </div>
        <div className='w-[70%]'>
        <UserProfile/>
        </div>
        </div>
        </>
  )
}

export default Dashboard
