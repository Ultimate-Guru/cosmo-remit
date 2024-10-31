// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import PImg from '../../assets/img/brock-wegner.png'
// import Drop from '../../assets/img/iconamoon_arrow-up-2-duotone.png'
// import Bell from '../../assets/img/Group 28.png'

// import {
//   FaHome,
//   FaHistory,
//   FaUserFriends,
//   FaShieldAlt,
//   FaUser,
// } from "react-icons/fa";

// const Home = () => {
//   const [active, setActive] = useState("Home");

//   const menuItems = [
//     { name: "Home", icon: <FaHome /> },
//     { name: "Transaction History", icon: <FaHistory /> },
//     { name: "Beneficiaries", icon: <FaUserFriends /> },
//     { name: "Account limits", icon: <FaShieldAlt /> },
//     { name: "Profile", icon: <FaUser /> },
//   ];

//   return (
//     <div>
//       <div className="w-[280px] h-screen shadow-md flex flex-col py-5 gap-20">
//         {/* Logo */}
//         <div className="flex justify-center items-center">
//           <h1 className="text-[48px] h-20 w-32 font-bold text-black">Logo</h1>
//         </div>

//         {/* Menu Items */}
//         <div className="bg-white w-72 h-screen gap-6">
//           <ul className="h-screen">
//             {menuItems.map((item) => (
//               <li key={item.name} className="mb-4">
//                 <button
//                   className={`flex items-center w-[280px] px-6 py-3 text-left 
//                   ${active === item.name ? "bg-red-600 text-white" : ""
//                     } transition-colors duration-200`}
//                   onClick={() => setActive(item.name)}
//                 >
//                   <span className="mr-4 text-xl">{item.icon}</span>
//                   <span className="text-lg font-medium">{item.name}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="w-[995px] h-[72px] bg-white shadow-md fixed left-[280px]">
//         <div className="inline-flex justify-center items-center flex-row w-[259.36px] h-12 gap-5 absolute left-[650px]">
//           <img src={PImg} alt="Profile Img" className="w-12 h-12" />
//           <h2 className="font-normal text-[18px] whitespace-nowrap">Kabir Akinola</h2>
//           <img src={Drop} alt="Down Img" />
//           <img src={Bell} alt="Bell Img" />
//         </div>
//       </nav>



//       <div className="text-[#000000] text-left font-medium text-[26px] absolute left-[321px] top-32 w-[125px]">
//         Welcome{" "}
//       </div>

//       <div
//         className="bg-primary-white-1 rounded-[15px] p-5 flex flex-col gap-2.5 items-start justify-start w-[239px] h-[146px] absolute left-[299px] top-[197px]"
//         style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)" }}
//       >
//         <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[142px] relative">
//           <div className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
//             <div className="bg-primary-1 rounded-[19px] p-[7px] flex flex-row gap-2.5 items-center justify-start shrink-0 w-[38px] h-[38px] relative">
//               {/* <BasilExchangeOutline className="!shrink-0"></BasilExchangeOutline> */}
//             </div>
//             <div className="text-black-1 text-left font-semi-bold-24px-font-family text-semi-bold-24px-font-size font-semi-bold-24px-font-weight relative">
//               20{" "}
//             </div>
//           </div>
//           <div className="text-[#000000] text-left font-regular-18px-font-family text-regular-18px-font-size font-regular-18px-font-weight relative self-stretch">
//             Transfers made{" "}
//           </div>
//         </div>
//       </div>

//       <div
//         className="bg-primary-white-1 rounded-[15px] p-5 flex flex-col gap-2.5 items-start justify-start w-[239px] h-[146px] absolute left-[589px] top-[197px]"
//         style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)" }}
//       >
//         <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[142px] relative">
//           <div className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
//             <div className="bg-primary-1 rounded-[19px] p-[7px] flex flex-row gap-2.5 items-center justify-start shrink-0 w-[38px] h-[38px] relative">
//               {/* <BasilExchangeOutline className="!shrink-0"></BasilExchangeOutline> */}
//             </div>
//             <div className="text-black-1 text-left font-semi-bold-24px-font-family text-semi-bold-24px-font-size font-semi-bold-24px-font-weight relative">
//               5{" "}
//             </div>
//           </div>
//           <div className="text-[#000000] text-left font-regular-18px-font-family text-regular-18px-font-size font-regular-18px-font-weight relative self-stretch">
//             Beneficiaries{" "}
//           </div>
//         </div>
//       </div>

//       <div className="ml-10">
//         <h2 className="font-bold text-lg mb-4 ml-48">Current Limits</h2>

//         {/* Limits Card */}
//         <div className="flex items-center justify-between p-8 bg-white rounded-lg max-w-3xl shadow-lg ml-48">
//           {/* Daily Limit */}
//           <div className="text-left">
//             <p className="text-gray-400 font-semibold">Daily limit</p>
//             <p className="text-black font-semibold text-lg">20,000 UK</p>
//           </div>

//           {/* Yearly Limit */}
//           <div className="text-left">
//             <p className="text-gray-400 font-semibold">Yearly limit</p>
//             <p className="text-black font-semibold text-lg">1,000,000 UK</p>
//           </div>

//           {/* Increase Limits Button */}
//           <button className="bg-red-600 text-white font-bold p-3 rounded-md w-48">
//             Increase Limits
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Home;


// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';

// const Home = () => {

//   const [activeIndex, setActiveIndex] = useState(0);

//   const menuItems = [
//     { name: 'Home', path: '/Home' },
//     { name: 'Transaction History', path: '/Transactions' },
//     { name: 'Beneficiaries', path: '/Beneficiary' },
//     { name: 'Account Limits', path: '/Limits' },
//     { name: 'Profile', path: '/Profile' }
//   ]

//   const handleClick = () => {
//     // eslint-disable-next-line no-undef
//     setActiveIndex(index);
//   }

//   return (
//     <div className='bg-gray-200'>

//       <div className='w-[249px] h-[982px] pt-5 pb-5 bg-white'>
//         <div className='w-[117px] h-[72px] ml-12'>
//           <h1 className='font-bold text-[48px] fixed'>Logo</h1>
//         </div>

//         <div className="flex flex-col w-[249px] h-[370px] gap-6 mt-16 fixed">
//           {menuItems.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               onClick={() => handleClick(index)}
//               className={`w-[249px] h-16 font-normal text-xl ${index === activeIndex ? "bg-red-600 text-white" : "text-black"
//                 }`}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home



// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PImg from '../../assets/img/brock-wegner.png'
import Drop from '../../assets/img/iconamoon_arrow-up-2-duotone.png'
import Bell from '../../assets/img/Group 28.png'
import Profile from '../profile/Profile'
import Limits from '../accountlimits/Limits'

import { FaHome, FaHistory, FaUserFriends, FaShieldAlt, FaUser, } from "react-icons/fa";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Manages active list item

  const menuItems = [
    { name: "Home", icon: <FaHome />, content: "This is the dashboard content" },
    { name: "Transaction History", icon: <FaHistory />, content: "This is the transaction content" },
    { name: "Beneficiary", icon: <FaUserFriends />, content: "This is the beneficiary content" },
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
          <div className='w-[117px] h-[72px] ml-12'>
            <h1 className='font-bold text-[48px] fixed'>Logo</h1>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col w-[249px] h-[370px] gap-6 mt-16 fixed">
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
          </div>

          {/* Navbar */}
          <nav className="w-[1200px] h-[72px] bg-white fixed left-[249.2px]">
            <div className="inline-flex justify-center items-center flex-row w-[259.36px] h-12 gap-5 absolute left-[650px]">
              <img src={PImg} alt="Profile Img" className="w-12 h-12" />
              <h2 className="font-normal text-[18px] whitespace-nowrap">Kabir Akinola</h2>
              <img src={Drop} alt="Down Img" />
              <img src={Bell} alt="Bell Img" />
            </div>
          </nav>

          {/* Content Area */}
          <div className="ml-[170px] mt-[-45%]">
            {/* <h2 className="text-2xl font-bold mb-4">{menuItems[activeIndex].name}</h2> */}
            <p>{menuItems[activeIndex].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;