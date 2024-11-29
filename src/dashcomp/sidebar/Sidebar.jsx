import { useState } from "react";
import { links } from "../../constants";
import LinkItem from "./LinkItem";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isSidebarOpen }) => {
  const [activeContent, setActiveContent] = useState(links[0].text); // Set the first item as default active

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen pt-36 bg-white sm:translate-x-0 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="h-full px-0 pb-5 overflow-y-auto">
          <ul className="space-y-5 font-medium">
            {links.map((link, index) => (
              <li
                key={index}
                onClick={() => setActiveContent(link.text)} // Set active content
                className={`cursor-pointer w-full block py-3 px-5 transition-all ${activeContent === link.text
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-transparent text-gray-800 hover:bg-gray-200"
                  }`}
              >
                <LinkItem
                  link={link}
                  href={link.href}
                  icon={link.icon}
                  text={link.text}
                />
              </li>
            ))}
          </ul>
        </div>
      </aside>


    </div>
  );
};

export default Sidebar;