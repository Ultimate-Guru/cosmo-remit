/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
        <div>{<Outlet />}</div>
        <div>Logo</div>
        <div> <NavLink to={'/Home'}>Home</NavLink> </div>
        <div> <NavLink to={'/Transactions'}>Transaction History</NavLink> </div>
        <div> <NavLink to={'/Beneficiary'}>Beneficiaries</NavLink> </div>
        <div> <NavLink to={'/Limit'}>Account Limit</NavLink> </div>
        <div> <NavLink to={'/Profile'}>Profile</NavLink> </div>
        </>
    );
}

export default Layout;