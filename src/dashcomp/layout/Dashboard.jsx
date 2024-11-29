import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
// import Profile from "../profile/Profile";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className='flex bg-gray-200 min-h-screen'>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarOpen={isSidebarOpen} />
            {/* <Profile /> */}
        </div>
    )
}

export default Dashboard;