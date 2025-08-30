"use client";
import { useState } from "react";
import { FaPlane, FaCogs, FaCalendarCheck, FaClock, FaMap, FaTags, FaGift, FaQuestionCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: <FaPlane />, text: "Book" },
    { icon: <FaCogs />, text: "Manage" },
    { icon: <FaCalendarCheck />, text: "Check-in" },
    { icon: <FaClock />, text: "Flight Status" },
    { icon: <FaMap />, text: "Plan" },
    { icon: <FaTags />, text: "Offers" },
    { icon: <FaGift />, text: "Loyalty" },
    { icon: <FaQuestionCircle />, text: "Help" },
  ];

  return (
    <div
      className={`h-screen bg-[#1e344a] text-white flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-56"}`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-[-14px] bg-[#1e344a] rounded-full w-7 h-7 flex items-center justify-center shadow-md"
      >
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      <ul className="mt-16 space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center px-4 py-3 hover:bg-[#2a4a68] cursor-pointer"
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="ml-3">{item.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
