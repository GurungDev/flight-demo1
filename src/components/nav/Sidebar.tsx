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
    { icon: <FaPlane />, text: "Book", description: "Reserve your flight" },
    { icon: <FaCogs />, text: "Manage", description: "Update bookings" },
    { icon: <FaCalendarCheck />, text: "Check-in", description: "Online check-in" },
    { icon: <FaClock />, text: "Flight Status", description: "Track your flight" },
    { icon: <FaMap />, text: "Plan", description: "Travel planning" },
    { icon: <FaTags />, text: "Offers", description: "Special deals" },
    { icon: <FaGift />, text: "Loyalty", description: "Guest benefits" },
    { icon: <FaQuestionCircle />, text: "Help", description: "Support center" },
  ];

  // Expanded if not collapsed OR hovering over menu/button
  const isExpanded = hovering || !collapsed;

  return (
    <div
      className={`relative h-screen glass border-r border-white/10 flex flex-col transition-all duration-500 ease-in-out ${
        isExpanded ? "w-64" : "w-24"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50 opacity-60"></div>
      
      {/* Logo Section */}
      <div className="relative z-10 flex items-center justify-center mt-6 mb-8">
        <div className="glass-light p-3 rounded-2xl border border-white/20">
          {isExpanded ? (
            <div className="flex items-center space-x-3">
              <Image src="/logo-big.png" alt="Logo" width={32} height={32} />
              <div className="text-left">
                <div className="text-lg font-bold text-blue-400">Himalaya</div>
                <div className="text-xs text-gray-300">Jet</div>
              </div>
            </div>
          ) : (
            <Image src="/logo-small.png" alt="Logo" width={32} height={32} />
          )}
        </div>
      </div>

      {/* Collapse/Expand Button */}
      <div className="relative z-20">
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -translate-y-1/2 z-50
            glass-light rounded-full size-8 border border-white/20 
            flex items-center justify-center shadow-lg 
            -right-4 transition-all duration-300 hover:scale-110 hover:border-blue-400/50"
        >
          <FaChevronRight
            className={`transform transition-transform duration-300 text-white ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className="relative z-10 space-y-1 mt-4 px-3"
        onMouseEnter={() => collapsed && setHovering(true)}
        onMouseLeave={() => collapsed && setHovering(false)}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="group"
          >
            <div className="flex items-center px-3 py-3 rounded-xl hover:bg-white/10 cursor-pointer transition-all duration-300 hover:translate-x-1 border border-transparent hover:border-white/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300">
                <span className="text-lg">{item.icon}</span>
              </div>
              
              <div
                className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                }`}
              >
                <div className="text-white font-medium">{item.text}</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Bottom Section */}
      <div className="relative z-10 mt-auto mb-6 px-3">
        <div className={`glass-light rounded-xl p-3 border border-white/20 transition-all duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}>
          <div className="text-center">
            <div className="text-sm font-medium text-white mb-2">Guest Status</div>
            <div className="text-xs text-gray-300">Silver Member</div>
            <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full" style={{width: '65%'}}></div>
            </div>
            <div className="text-xs text-gray-400 mt-1">65% to Gold</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
    </div>
  );
}
