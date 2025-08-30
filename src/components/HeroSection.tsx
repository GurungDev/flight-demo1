import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <Image
        src="/nepal.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (optional dark layer for better text visibility) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className=" font-bold">
          Welcome to Himalaya Jet
        </h1>
        <p className="mt-4 max-w-2xl  ">
          Experience luxury travel with Himalaya Jet, connecting the world with exceptional service.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg shadow-lg font-semibold">
          Book your flight
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
