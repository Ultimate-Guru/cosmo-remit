import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className='flex'>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>
    )
}

export default Dashboard;