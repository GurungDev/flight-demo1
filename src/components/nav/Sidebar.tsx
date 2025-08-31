"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        !(event.target as HTMLElement)?.closest?.(".mobile-sidebar") &&
        !(event.target as HTMLElement)?.closest?.(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

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

  const isExpanded = hovering || !collapsed;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="mobile-menu-button md:hidden fixed top-4 right-4 z-50 glass-light p-3 rounded-xl border border-white/20 shadow-lg"
      >
        {mobileMenuOpen ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaBars className="text-white text-xl" />
        )}
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300" />
      )}

      {/* Desktop Sidebar */}
      <div
        className={`group hidden md:flex relative h-screen glass border-r border-white/10 flex-col transition-all duration-500 ease-in-out ${
          isExpanded ? "w-64" : "w-24"
        }`}
        onMouseEnter={() => collapsed && setHovering(true)}
        onMouseLeave={() => collapsed && setHovering(false)}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#000216] " />

        {/* Logo Section */}
        <div className="relative z-10 flex items-center justify-center mt-6">
          <div className="p-3 rounded-2xl">
            <Image
              src="/small-Himalaya-Logo.png"
              alt="Logo"
              width={isExpanded ? 200 : 140}
              height={140}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </div>
        </div>

        {/* Collapse/Expand Button */}
        <div className="relative z-20">
          <button
            onClick={toggleSidebar}
            className="absolute top-1/2 -translate-y-1/2 z-50 bg-[#000216] rounded-xl size-8 border border-white/20 flex items-center justify-center shadow-lg -right-4 transition-all duration-300 hover:scale-110 hover:border-neutral-400/50"
          >
            <FaChevronRight
              className={`transform transition-transform duration-300 text-white ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="relative z-10 space-y-1 mt-4 px-3">
          {menuItems.map((item, index) => (
            <li key={index} className="group">
              <div className="flex items-center px-3 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 cursor-pointer">

                <div className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-400 transition-all duration-300">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div
                  className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    isExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                  }`}
                >
                  <div className="text-white font-[300]">{item.text}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-neutral-500/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-neutral-400/30 to-transparent" />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar md:hidden fixed top-0 left-0 h-screen w-full bg-[#000216] border-r border-white/10 flex flex-col transition-all duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 " />

        {/* Logo Section */}
        <div className="relative flex items-center justify-center mt-20">
          <div className=" rounded-2xl">
            <Image
              src="/small-Himalaya-Logo.png"
              alt="Logo"
              width={200}
              height={200}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="relative space-y-2 mt-4 px-4 flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <li key={index} className="group" onClick={() => setMobileMenuOpen(false)}>
              <div className="flex items-center px-3 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 cursor-pointer">

                <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white transition-all duration-300">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div className="ml-4">
                  <div className="text-white font-medium text-lg">{item.text}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Decorative Elements */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-neutral-500/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 right-0 w-1 h-40 bg-gradient-to-b from-transparent via-neutral-400/30 to-transparent" />
      </div>
    </>
  );
}
