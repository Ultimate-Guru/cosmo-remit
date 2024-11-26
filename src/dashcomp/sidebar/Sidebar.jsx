import { links } from "../../constants"
import LinkItem from "./LinkItem"

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen pt-36 bg-white border-r border-gray-200 sm:translate-x-0 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="h-full px-3 pb-5 overflow-y-auto">
        <ul className="space-y-10 font-medium ml-5">
          {
            links.map((link, index) => (
              <LinkItem key={index} link={link} href={link.href} icon={link.icon} text={link.text} />
            ))
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar