import Image from 'next/image'
import React from 'react'

const Info = () => {
    return (
        <div className='bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden my-16 mx-4'>
            <div className='flex items-center min-h-[400px]'>
                {/* Left Section - Text Content */}
                <div className='w-2/3 p-12 text-left'>
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-bold text-white'>
                                Why Choose{' '}
                                <span className='text-amber-500'>Himalaya Jet?</span>
                            </h2>
                        </div>
                        
                        <p className='text-lg text-gray-300 leading-relaxed max-w-lg'>
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
                <div className='w-1/3 relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-800/20'></div>
                    <div className='relative h-full'>
                        <div className='absolute left-0 top-0 w-16 h-16 bg-slate-800 transform -translate-x-8 -translate-y-8 rotate-45'></div>
                        <Image 
                            src="/jett.png" 
                            alt="Himalaya Jet Aircraft" 
                            width={400} 
                            height={400}
                            className='object-cover h-full w-full rounded-r-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info