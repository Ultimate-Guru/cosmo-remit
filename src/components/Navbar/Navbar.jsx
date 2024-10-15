/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from 'react-router-dom'

function Navbar() {
    const BgColor = {
        backgroundColor: 'rgba(73, 48, 48, 0.84)'
    }
    return(
        <div style={BgColor} className="flex justify-between items-center p-3">
            <h2 className="text-white font-bold text-4xl ml-11">Logo</h2>

            <div className="flex">
                <NavLink 
                    className='mr-10 w-36 text-center bg-white text-red-600 p-2 rounded-lg font-semibold' 
                    to={'./SignIn'}>
                    Login
                </NavLink>
                <NavLink 
                    className='text-white text-center w-36 mr-10 bg-red-600 font-semibold p-2 rounded-lg' 
                    to={'./SignUp'}>
                    Register
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;