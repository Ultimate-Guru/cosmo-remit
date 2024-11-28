import PImg from '../../assets/img/brock-wegner.png';
import Drop from '../../assets/img/iconamoon_arrow-up-2-duotone.png';
import Bell from '../../assets/img/Group 28.png';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 flex justify-between">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 w-full">
        <div className="flex items-center justify-between">
          {/* Left Section: Logo and Sidebar Toggle */}
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleSidebar}>
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <span className="self-center text-3xl font-semibold sm:text-[40px] whitespace-nowrap">Logo</span>
            </a>
          </div>

          {/* Right Section: Profile Info */}
          <div className="flex items-center justify-end w-full gap-3">
            <img src={PImg} alt="Profile Img" className="w-12 h-12" />
            <h2 className="font-normal text-[18px] whitespace-nowrap cursor-default">Kabir Akinola</h2>
            <img src={Drop} alt="Down Img" />
            <img src={Bell} alt="Bell Img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
