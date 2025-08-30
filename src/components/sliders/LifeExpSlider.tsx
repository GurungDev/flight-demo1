"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = () => {
  return (

    <div className='app-layout py-20'>
        <div className='flex flex-col space-y-8'>
        <div id='title-LifeExp' className='flex flex-col space-y-4 text-center'>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Life's better as a Guest</h1>
            <span className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover exclusive benefits, earn miles, and unlock premium experiences with Himalaya Jet Guest
            </span>
        </div>
        <div id='swiper-LifeExp' className='flex flex-row'>
 
            <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={2}
                navigation={{
                nextEl: '.Life-custom-next',
                prevEl: '.Life-custom-prev',
                }}
                pagination={{
                clickable: true,
                el: '.swiper-pagination',
                }}
                breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 25
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                }}
                onSlideChange={(swiper) => {
                const prevBtn = document.querySelector('.Life-custom-prev');
                const nextBtn = document.querySelector('.Life-custom-next');
                
                if (prevBtn) {
                    prevBtn.classList.toggle('disabled', swiper.isBeginning);
                }
                if (nextBtn) {
                    nextBtn.classList.toggle('disabled', swiper.isEnd);
                }
                }}
                onInit={(swiper) => {
                const prevBtn = document.querySelector('.Life-custom-prev');
                const nextBtn = document.querySelector('.Life-custom-next');
                
                if (prevBtn) {
                    prevBtn.classList.toggle('disabled', swiper.isBeginning);
                }
                if (nextBtn) {
                    nextBtn.classList.toggle('disabled', swiper.isEnd);
                }
                }}
                className="swiper"
            >
                <SwiperSlide>
                <div className="card">
                    <div className="image-container">
                    <Image
                        width={500}
                        height={400}
                        src="/swip1.avif"
                        alt="Exclusive Lounges"
                        className="image"
                        priority
                    />
                    </div>
                    <div className="content">
                    <h2>Exclusive Lounges</h2>
                    <p>Access premium lounges worldwide</p>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="card">
                    <div className="image-container">
                    <Image
                        width={500}
                        height={400}
                        src="/swip2.avif"
                        alt="Priority Boarding"
                        className="image h-full w-full object-cover"
                    />
                    </div>
                    <div className="content">
                    <h2>Priority Boarding</h2>
                    <p>Skip the queue, board first</p>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="card">
                    <div className="image-container">
                    <Image
                        width={500}
                        height={400}
                        src="/swip3.avif"
                        alt="Extra Baggage Allowance"
                        className="image h-full w-full object-cover"
                    />
                    </div>
                    <div className="content">
                    <h2>Extra Baggage</h2>
                    <p>More luggage, less worry</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card">
                    <div className="image-container">
                    <Image
                        width={500}
                        height={400}
                        src="/swip1.avif"
                        alt="Miles Earning"
                        className="image h-full w-full object-cover"
                        priority
                    />
                    </div>
                    <div className="content">
                    <h2>Earn Miles</h2>
                    <p>Every flight earns you rewards</p>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="card">
                    <div className="image-container">
                    <Image
                        width={500}
                        height={400}
                        src="/swip2.avif"
                        alt="Special Offers"
                        className="image h-full w-full object-cover"
                    />
                    </div>
                    <div className="content">
                    <h2>Special Offers</h2>
                    <p>Member-only deals and discounts</p>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="card">
                    <div className="image-container">
                    <Image
                        width={500}
                        height={400}
                        src="/swip3.avif"
                        alt="24/7 Support"
                        className="image h-full w-full object-cover"
                    />
                    </div>
                    <div className="content">
                    <h2>24/7 Support</h2>
                    <p>Dedicated guest assistance</p>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="navigation-container">
                <button className="Life-custom-prev navigation-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <button className="Life-custom-next navigation-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
            </div>

            <style jsx>{`
                .swiper-container {
                position: relative;
                width: 100%;
                margin: 0 auto;
                }

                .card {
                position: relative;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                height: 400px;
                width: 100%;
                max-width: 480px;
                background: #1a1a1a;
                border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                border-color: rgba(59, 130, 246, 0.5);
                }

                .image-container {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                }

                .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
                }

                .card:hover .image {
                transform: scale(1.05);
                }

                .content {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
                color: white;
                padding: 30px 20px 20px;
                backdrop-filter: blur(10px);
                }

                .content h2 {
                font-size: 22px;
                font-weight: bold;
                margin: 0 0 8px 0;
                color: #ffffff;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
                }

                .content p {
                font-size: 16px;
                opacity: 0.9;
                margin: 0;
                color: #e5e7eb;
                font-weight: 500;
                }

                /* Custom Swiper Styles */
                :global(.swiper-pagination) {
                position: absolute !important;
                bottom: 10px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                display: flex !important;
                justify-content: center !important;
                }

                :global(.swiper-pagination-bullet) {
                background-color: rgba(255, 255, 255, 0.6) !important;
                opacity: 0.7 !important;
                transition: all 0.3s !important;
                width: 12px !important;
                height: 12px !important;
                border-radius: 50% !important;
                margin: 0 6px !important;
                }

                :global(.swiper-pagination-bullet-active) {
                opacity: 1 !important;
                background-color: #3b82f6 !important;
                transform: scale(1.2) !important;
                }

                /* Hide default Swiper navigation */
                :global(.swiper-button-next),
                :global(.swiper-button-prev) {
                display: none !important;
                }

                /* Custom Navigation Container */
                .navigation-container {
                display: flex;
                justify-content: flex-end;
                gap: 12px;
                margin-top: 20px;
                padding: 0 20px;
                }

                .navigation-btn {
                width: 44px;
                height: 44px;
                border-radius: 50%;
                border: 2px solid rgba(255, 255, 255, 0.2);
                background-color: rgba(26, 26, 26, 0.8);
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(10px);
                }

                .navigation-btn:hover:not(.disabled) {
                border-color: #3b82f6;
                background-color: #3b82f6;
                color: #ffffff;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
                }

                .navigation-btn.disabled {
                opacity: 0.4;
                cursor: not-allowed;
                border-color: rgba(255, 255, 255, 0.1);
                color: rgba(255, 255, 255, 0.3);
                position: relative;
                }

                .navigation-btn.disabled::after {
                content: "🚫";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 12px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                width: 18px;
                height: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                }

                .navigation-btn.disabled svg {
                opacity: 0.3;
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                .swiper-container {
                    max-width: 100%;
                    padding: 0 10px 20px 10px;
                }

                .card {
                    height: 320px;
                    max-width: 280px;
                }

                .navigation-container {
                    padding: 0 15px;
                    margin-top: 15px;
                }
                
                .navigation-btn {
                    width: 36px;
                    height: 36px;
                }
                
                .navigation-btn svg {
                    width: 16px;
                    height: 16px;
                }
                
                .navigation-btn.disabled::after {
                    font-size: 10px;
                    width: 14px;
                    height: 14px;
                }

                .content h2 {
                    font-size: 20px;
                }

                .content p {
                    font-size: 14px;
                }
                }
            `}</style>
            </div>


        </div>
        </div>

    </div>


  );
};

export default SwiperComponent;