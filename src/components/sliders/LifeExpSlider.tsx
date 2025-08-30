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

    <div className='w-full'>
        <div className='flex flex-col space-y-3'>
        <div id='title-LifeExp' className='flex flex-col space-y-3'>
            <h1>Life’s better as a Guest</h1>
            <span>
            Discover the benefits of Etihad Guest
            </span>
        </div>
        <div id='swiper-LifeExp' className='flex flex-row'>
 
            <div className="swiper-container ">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={2}
                navigation={{
                nextEl: '.Life-custom-next',
                prevEl: '.Life-custom-prev',
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
                        alt="Serene Lounge"
                        className="image"
                        priority
                    />
                    </div>
                    <div className="content">
                    <h2>Serene Lounges</h2>
                    <p>Discover</p>
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
                        alt="Zayed International Airport"
                        className="image"
                    />
                    </div>
                    <div className="content">
                    <h2>Zayed International Airport</h2>
                    <p>Explore</p>
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
                        alt="Experience Abu Dhabi"
                        className="image"
                    />
                    </div>
                    <div className="content">
                    <h2>Experience Abu Dhabi</h2>
                    <p>Learn more</p>
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
                        alt="Serene Lounge"
                        className="image"
                        priority
                    />
                    </div>
                    <div className="content">
                    <h2>Serene Lounges</h2>
                    <p>Discover</p>
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
                        alt="Zayed International Airport"
                        className="image"
                    />
                    </div>
                    <div className="content">
                    <h2>Zayed International Airport</h2>
                    <p>Explore</p>
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
                        alt="Experience Abu Dhabi"
                        className="image"
                    />
                    </div>
                    <div className="content">
                    <h2>Experience Abu Dhabi</h2>
                    <p>Learn more</p>
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
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
                height: 400px;
                width: 100%;
                max-width: 480px;
                }

                .card:hover {
                transform: translateY(-5px);
                }

                .image-container {
                position: relative;
                width: 100%;
                height: 100%;
                }

                .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                }

                .content {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
                color: white;
                padding: 30px 15px 15px;
                }

                .content h2 {
                font-size: 20px;
                font-weight: bold;
                margin: 0 0 6px 0;
                }

                .content p {
                font-size: 14px;
                opacity: 0.9;
                margin: 0;
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
                background-color: #fff !important;
                opacity: 0.7 !important;
                transition: opacity 0.3s !important;
                width: 10px !important;
                height: 10px !important;
                border-radius: 50% !important;
                margin: 0 4px !important;
                }

                :global(.swiper-pagination-bullet-active) {
                opacity: 1 !important;
                background-color: #f1c40f !important;
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
                gap: 10px;
                margin-top: 20px;
                padding: 0 20px;
                }

                .navigation-btn {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid #ddd;
                background-color: #fff;
                color: #333;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .navigation-btn:hover:not(.disabled) {
                border-color: #f1c40f;
                background-color: #f1c40f;
                color: #fff;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }

                .navigation-btn.disabled {
                opacity: 0.4;
                cursor: not-allowed;
                border-color: #ccc;
                color: #999;
                position: relative;
                }

                .navigation-btn.disabled::after {
                content: "🚫";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 12px;
                background: rgba(255, 255, 255, 0.9);
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
                    height: 280px;
                    max-width: 220px;
                }

                .navigation-container {
                    padding: 0 15px;
                    margin-top: 15px;
                }
                
                .navigation-btn {
                    width: 32px;
                    height: 32px;
                }
                
                .navigation-btn svg {
                    width: 14px;
                    height: 14px;
                }
                
                .navigation-btn.disabled::after {
                    font-size: 10px;
                    width: 14px;
                    height: 14px;
                }

                .content h2 {
                    font-size: 18px;
                }

                .content p {
                    font-size: 12px;
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