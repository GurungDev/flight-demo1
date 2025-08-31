"use client"
import Image from 'next/image'
import React from 'react'

const ImageComp = () => {
    return (
        <div className='relative min-h-[600px] overflow-hidden'>
            {/* Pattern Overlay */}
            <div className='absolute inset-0 opacity-20'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:50px_50px]'></div>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]'></div>
            </div>
            
            {/* Floating Geometric Shapes */}
            <div className='absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full blur-sm'></div>
            <div className='absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-md'></div>
            <div className='absolute top-1/2 left-1/4 w-16 h-16 border border-white/5 rounded-full blur-sm'></div>
            
            {/* Content Container */}
            <div className='relative z-10 flex items-center justify-center min-h-[600px] px-4'>
                <div className='text-center text-white max-w-5xl'>
                    {/* Decorative Line */}
                    <div className='flex items-center justify-center mb-8'>
                        <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent'></div>
                        <div className='mx-4 w-3 h-3 bg-white/30 rounded-full'></div>
                        <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent'></div>
                    </div>
                    
                    {/* Main Text */}
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-6 text-shadow-lg'>
                        Himalaya Jet, a British premium long haul carrier is all set to offer luxury point to point flights.
                    </h2>
                    
                    <p className='text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto'>
                        The airline with its initial fleet of 18 wide body aircrafts is set to offer services with the UK as its technical base
                        while also having a base in America, connecting underserved holiday destination and cities around the world
                        with non-stop flights at affordable fares.
                    </p>
                    
                    {/* Bottom Decorative Line */}
                    <div className='flex items-center justify-center mt-8'>
                        <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent'></div>
                        <div className='mx-4 w-3 h-3 bg-white/30 rounded-full'></div>
                        <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageComp