import Image from 'next/image'
import React from 'react'

const Info = () => {
    return (
        <div className='bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 rounded-2xl shadow-2xl overflow-hidden my-16 mx-4'>
            <div className='flex flex-col md:flex-row items-center min-h-[400px]'>
                {/* Left Section - Text Content */}
                <div className='w-full md:w-2/3 p-12 text-left'>
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <p className='text-5xl font-bold text-white '>
                                <span className='font-[300]'>Why Choose</span>
                                <span className='text-amber-500 '> Himalaya Jet?</span>
                            </p>
                        </div>
                        
                        <p className='text-xl text-gray-300 leading-relaxed max-w-lg'>
                            Experience luxury travel with our premium fleet and world-class service. 
                            We connect you to the most beautiful destinations with unmatched comfort 
                            and reliability.
                        </p>
                        
                        <div className='pt-4'>
                            <button className='text-amber-400 hover:text-amber-300 text-lg font-medium underline underline-offset-4 transition-colors duration-200'>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Right Section - Image with Angular Cutout */}
                <div className='w-full md:w-1/2'>
                    <Image 
                        src="/jett.png" 
                        alt="Himalaya Jet Aircraft" 
                        width={600} 
                        height={600}
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                </div>
            </div>
        </div>
    )
}

export default Info