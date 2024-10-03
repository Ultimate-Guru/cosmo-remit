/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from 'react-router-dom'

function Navbar() {
    const BgColor = {
        backgroundColor: 'hsla(14, 56%, 49%, 0.8)'
    }
    return(
        <div style={BgColor} className="flex justify-between items-center p-3">
            <img 
            className="w-44" 
            src="https://cosmoremit.com.au/assets/images/logo/logo.png" 
            alt="Logo" />

            <div className="flex">
                <NavLink 
                    className='mr-10 w-24 text-center bg-white text-red-600 p-2 rounded font-semibold' 
                    to={'./SignIn'}>
                    Login
                </NavLink>
                <NavLink 
                    className='text-white text-center w-28 mr-10 bg-red-600 font-semibold p-2 rounded' 
                    to={'./SignUp'}>
                    Register
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;