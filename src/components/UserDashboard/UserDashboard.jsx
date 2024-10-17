import React from 'react';
import imgAssets from '../../assets/img/imgAssets';
import { NavLink } from 'react-router-dom';

function UserDashboard() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row h-screen p-4 bg-background text-foreground">
          <div className='w-[30%]'>
            <h1 className="text-5xl font-bold mb-6">Logo</h1>
            <NavLink to={`/username/userhome`} className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="home-icon" src={imgAssets.homeIconFilled} width="200px" />
              <span className="ml-2">Home</span>
            </NavLink>
            <NavLink to={`/username/transactionhistory`} className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="transaction-history-icon" src={imgAssets.chatHistoryLine} width="200px" />
              <span className="ml-2">Transaction History</span>
            </NavLink>
            <NavLink to={`/username/beneficiary`} className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="beneficiaries-icon" src={imgAssets.fluentPeopleRegular} width="200px" />
              <span className="ml-2">Beneficiaries</span>
            </NavLink>
            <NavLink to={`/username/accountlimits`} className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="account-limits-icon" src={imgAssets.shieldAccountOutline} width="200px" />
              <span className="ml-2">Account limits</span>
            </NavLink>
            <NavLink to={`/username/profile`} className="flex items-center p-3 m-5 text-muted hover:text-primary">
              <img undefinedhidden="true" alt="profile-icon" src={imgAssets.profileIcon} width="200px" />
              <span className="ml-2">Profile</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard
