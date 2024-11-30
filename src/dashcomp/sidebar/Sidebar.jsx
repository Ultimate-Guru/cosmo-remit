import { useState } from "react";
import {
  FaHome,
  FaHistory,
  FaUserFriends,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isSidebarOpen }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen pt-32 bg-white sm:translate-x-0 transition-transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-full py-5 overflow-y-auto">
        <ul className="space-y-4">
          <li
            className={`${activeLink === "home" ? "bg-red-500 text-white" : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => handleLinkClick("home")}
          >
            <FaHome className="mr-4" /> Home
          </li>
          <li
            className={`${activeLink === "history" ? "bg-red-500 text-white" : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => handleLinkClick("history")}
          >
            <FaHistory className="mr-4" /> Transaction History
          </li>
          <li
            className={`${activeLink === "beneficiary"
                ? "bg-red-500 text-white"
                : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => handleLinkClick("beneficiary")}
          >
            <FaUserFriends className="mr-4" /> Beneficiary
          </li>
          <li
            className={`${activeLink === "account" ? "bg-red-500 text-white" : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => handleLinkClick("account")}
          >
            <FaShieldAlt className="mr-4" /> Account Limits
          </li>
          <li
            className={`${activeLink === "profile" ? "bg-red-500 text-white" : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => handleLinkClick("profile")}
          >
            <FaUser className="mr-4" /> Profile
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;