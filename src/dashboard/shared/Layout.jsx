// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import PImg from '../../assets/img/brock-wegner.png'
// import Drop from '../../assets/img/iconamoon_arrow-up-2-duotone.png'
// import Bell from '../../assets/img/Group 28.png'
import Header from "../../dashcomp/header/Header";
import Profile from '../profile/Profile'
import Limits from '../accountlimits/Limits'
import Home from '../home/Home'
import Beneficiary from "../beneficiaryList/Beneficiary";
import Transaction from '../transactionHistory/Transactions'

import { FaHome, FaHistory, FaUserFriends, FaShieldAlt, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Manages active list item

  const menuItems = [
    { name: "Home", icon: <FaHome />, content1: <Home /> },
    { name: "Transaction History", icon: <FaHistory />, content: <Transaction /> },
    { name: "Beneficiary", icon: <FaUserFriends />, content: <Beneficiary /> },
    { name: "Account Limits", icon: <FaShieldAlt />, content: <Limits /> },
    { name: "Profile", icon: <FaUser />, content: <Profile /> }
  ];

  const handleClick = (index) => {
    setActiveIndex(index); // Set active index to display corresponding content
  };

  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className="flex">
        <div className='w-[249px] h-[982px] pt-5 pb-5 bg-white'>

          {/* Logo Text */}
          <div className='w-[117px] h-[72px] ml-12'>
            {/* <NavLink to={'/'}><h1 className='font-bold text-[48px] fixed'>Logo</h1></NavLink> */}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col h-full gap-6 mt-16 fixed">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-[249px] h-16 flex items-center font-normal text-xl transition-colors duration-200 ${index === activeIndex ? "bg-red-600 text-white" : "text-black"
                  }`}
              >
                <span className="mr-4 ml-3">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </aside>

          {/* Navbar */}
          {/* <nav className="w-[1200px] h-[72px] bg-white fixed left-[249px]">
            <div className="inline-flex justify-center items-center flex-row w-[259.36px] h-12 gap-5 absolute left-[650px]">
              <img src={PImg} alt="Profile Img" className="w-12 h-12" />
              <h2 className="font-normal text-[18px] whitespace-nowrap">Kabir Akinola</h2>
              <img src={Drop} alt="Down Img" />
              <img src={Bell} alt="Bell Img" />
            </div>
          </nav> */}
          <Header />

          {/* Content Area */}
          <div>
            <p className="ml-[120%]">{menuItems[activeIndex].content1}</p>
            <p className="ml-[170px] mt-[-45%]">{menuItems[activeIndex].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;