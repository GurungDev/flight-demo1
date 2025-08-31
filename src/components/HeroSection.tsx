"use client"

import Image from "next/image";
import React, { useState } from "react";
import FlightSearchModal from "./FlightSearchModal";

const HeroSection = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [origin, setOrigin] = useState('KTM');
  const [destination, setDestination] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
   
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full text-center text-white px-4 w-[80%] m-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Himalaya Jet
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Experience luxury travel with Himalaya Jet, connecting the world with exceptional service.
        </p>
        <div className="mt-6 group cursor-pointer ">
          <span className="relative inline-block px-6 py-3 font-semibold text-white">
            Book your flight
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out delay-150 group-hover:w-full"></span>
          </span>
        </div>
      </div>

      {/* Floating Search/Booking Card */}
      <div className="absolute left-1/2 bottom-[-3rem] transform -translate-x-1/2 z-20 w-[90%] md:w-[80%] lg:w-[70%] glass py-10 px-6">
        {/* Trip Type Selection */}
        <div className="flex mb-6 bg-white/10 backdrop-blur-md rounded-full w-[40%] min-w-[400px] border border-white/20 shadow-lg p-1 absolute left-1/2 top-[-15%] transform -translate-x-1/2">
          {['round-trip', 'one-way', 'multi-city'].map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${tripType === type
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
            >
              {type === 'round-trip' ? 'Round trip' :
                type === 'one-way' ? 'One-way' : 'Multi-city'}
            </button>
          ))}
        </div>

        {/* Flight Search Fields */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Origin Field */}
          <div className="flex-1 w-full">
            <div
              className="glass-light border border-white/20 rounded-xl p-4 hover:border-blue-300/50 transition-all cursor-pointer"
              onClick={openModal}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white">{origin}</div>
                  <div className="text-sm text-gray-300">Kathmandu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleSwap}
              className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* Destination Field */}
          <div className="flex-1 w-full">
            <div
              className="glass-light border border-white/20 rounded-xl p-4 hover:border-blue-300/50 transition-all cursor-pointer"
              onClick={openModal}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white">
                    {destination || 'To'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {destination ? 'Destination' : 'Select your destination'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Search Modal */}
      <FlightSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HeroSection;
