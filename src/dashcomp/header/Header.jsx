/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import PImg from '../../assets/img/brock-wegner.png';
import Drop from '../../assets/img/iconamoon_arrow-up-2-duotone.png';
import Bell from '../../assets/img/Group 28.png';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to manage dropdown  

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Function to handle clicks outside the dropdown  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Use useEffect to add/remove event listener for clicks outside  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-gray-200 flex justify-between">
      <div className="px-3 py-1 lg:px-5 lg:pl-3 w-full">
        <div className="flex items-center justify-between">
          {/* Left Section: Logo and Sidebar Toggle */}
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleSidebar}>
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <NavLink to={'/'} className="flex ms-2 md:me-24">
              <span className="self-center text-3xl font-bold sm:text-[40px] whitespace-nowrap">Logo</span>
            </NavLink>
          </div>

          {/* Right Section: Profile Info */}
          <div className="flex items-center justify-end w-full gap-3 relative">
            <img src={PImg} alt="Profile Img" className="w-12 h-12" />
            <h2 className="font-normal text-[18px] whitespace-nowrap cursor-default">Kabir Akinola</h2>
            <img
              src={Drop}
              alt="Dropdown"
              onClick={toggleDropdown}
              className="cursor-pointer"
            />
            <img src={Bell} alt="Bell Img" />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;