"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaPlane,
  FaCogs,
  FaCalendarCheck,
  FaClock,
  FaMap,
  FaTags,
  FaGift,
  FaQuestionCircle,
  FaChevronRight,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);

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

  // Expanded if not collapsed OR when hovering
  const isExpanded = hovering || !collapsed;

  return (
    <div
      className={`relative h-screen bg-[#1e344a] text-white flex flex-col transition-all duration-[1s] ${
        isExpanded ? "w-56" : "w-16"
      }`}
      onMouseEnter={() => collapsed && setHovering(true)}
      onMouseLeave={() => collapsed && setHovering(false)}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center mt-4 mb-6">
        {isExpanded ? (
          <Image src="/logo-big.png" alt="Logo" width={30} height={30} />
        ) : (
          <Image src="/logo-small.png" alt="Logo" width={30} height={30} />
        )}
      </div>

      {/* Collapse/Expand Button */}
      <div className="relative">
      <button
        onClick={toggleSidebar}
        className="absolute top-1/2 -translate-y-1/2 
          bg-[#1e344a] rounded-full size-7 border-[0.5px] border-white 
          flex items-center justify-center shadow-md 
          -right-4 transition-transform duration-[1s]"
      >
        <FaChevronRight
          className={`transform transition-transform duration-[1s] ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      </div>


{/* Menu Items */}
<ul className="space-y-2 mt-4">
  {menuItems.map((item, index) => (
    <li
      key={index}
      className="flex items-center px-4 py-3 hover:bg-[#2a4a68] cursor-pointer"
    >
      <span className="text-xl">{item.icon}</span>

      {/* Text wrapper to keep size consistent */}
      <span
        className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-500 
          ${isExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}`}
      >
        {item.text}
      </span>
    </li>
  ))}
</ul>


    </div>
  );
}
