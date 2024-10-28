/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PImg from '../../assets/img/brock-wegner.png'
import Drop from '../../assets/img/iconamoon_arrow-up-2-duotone.png'
import Bell from '../../assets/img/Group 28.png'

import {
  FaHome,
  FaHistory,
  FaUserFriends,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";

const Home = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Transaction History", icon: <FaHistory /> },
    { name: "Beneficiaries", icon: <FaUserFriends /> },
    { name: "Account limits", icon: <FaShieldAlt /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <>
      <div className="w-[280px] h-screen bg-white shadow-lg flex flex-col py-5 gap-20">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <h1 className="text-[48px] h-20 w-32 font-bold text-black">Logo</h1>
        </div>

        {/* Menu Items */}
        <div className="bg-white w-72 h-[370px] gap-6">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-4">
                <button
                  className={`flex items-center w-[280px] px-6 py-3 text-left 
                  ${active === item.name ? "bg-red-600 text-white" : ""
                    } transition-colors duration-200`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-4 text-xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-[995px] h-[72px] bg-white shadow-lg fixed left-[280px]">
        <div className="inline-flex justify-center items-center flex-row w-[259.36px] h-12 gap-5 absolute left-[650px]">
          <img src={PImg} alt="Profile Img" className="w-12 h-12" />
          <h2 className="font-normal text-[18px] whitespace-nowrap">Kabir Akinola</h2>
          <img src={Drop} alt="Down Img" />
          <img src={Bell} alt="Bell Img" />
        </div>
      </nav>
    </>
  );
};

export default Home;
