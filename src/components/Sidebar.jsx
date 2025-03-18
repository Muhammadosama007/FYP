import React from "react";
import { FaUser, FaCommentDots, FaCalendarCheck, FaTable, FaChartBar, FaTachometerAlt, FaBell } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, bgColor }) => {
    const menuItems = [
        { name: "Dashboard", icon: <FaTachometerAlt /> },
        { name: "Profile", icon: <FaUser /> },
        { name: "Feedback", icon: <FaCommentDots /> },
        { name: "Schedule Meeting", icon: <FaCalendarCheck /> },
        { name: "Meeting Table", icon: <FaTable /> },
        { name: "Notifications", icon: <FaBell /> },
        { name: "Project Progress", icon: <FaChartBar /> },
    ];

    return (
        <div
            className={`fixed top-10 left-0 h-[calc(100%-4rem)] w-64 bg-white shadow-md transition-transform duration-300 ease-in-out z-40
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"}`}
        >
            <div className="text-white bg-blue-950 p-4 flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mt-4"></div>
                <p className="mt-2 text-lg">Student Name</p>
            </div>
            <ul className="mt-4">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <span className="text-lg" style={{ color: bgColor }}>{item.icon}</span>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;