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
    <div className='app-layout py-8 md:py-16 lg:py-20'>
      <div className='flex flex-col lg:flex-row w-full justify-center items-center gap-8 md:gap-12 px-4 md:px-6 lg:px-8'>
        
        {/* Text Section */}
        <div className='flex flex-col justify-center text-center lg:text-left max-w-md lg:max-w-lg order-1 lg:order-1'>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Experience Himalayan 
          </h1>
          <span className="text-base md:text-lg text-gray-300 leading-relaxed px-2 md:px-0">
            Your journey with us marks the beginning of something extraordinary. From our hub at Zayed International Airport, we extend our renowned hospitality to ensure every step of your journey is simply unforgettable.  
          </span>
        </div>

        {/* Swiper Section */}
        <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl order-1 lg:order-2">
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                  spaceBetween: 11,
                },
                480: {
                  slidesPerView: 1.1,
                  spaceBetween: 11,
                },
                640: {
                  slidesPerView: 1.3,
                  spaceBetween: 25,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 25,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
              }}
              onSlideChange={(swiper) => {
                const prevBtn = document.querySelector('.custom-prev');
                const nextBtn = document.querySelector('.custom-next');
                
                if (prevBtn) {
                  prevBtn.classList.toggle('disabled', swiper.isBeginning);
                }
                if (nextBtn) {
                  nextBtn.classList.toggle('disabled', swiper.isEnd);
                }
              }}
              onInit={(swiper) => {
                const prevBtn = document.querySelector('.custom-prev');
                const nextBtn = document.querySelector('.custom-next');
                
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
                      width={400}
                      height={300}
                      src="/swip2.avif"
                      alt="Priority Boarding"
                      className="image h-full w-full object-cover"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                      width={400}
                      height={300}
                      src="/swip3.avif"
                      alt="Extra Baggage Allowance"
                      className="image h-full w-full object-cover"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                      width={400}
                      height={300}
                      src="/swip2.avif"
                      alt="Priority Boarding"
                      className="image h-full w-full object-cover"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                      width={400}
                      height={300}
                      src="/swip3.avif"
                      alt="Extra Baggage Allowance"
                      className="image h-full w-full object-cover"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  <div className="content">
                    <h2>Extra Baggage</h2>
                    <p>More luggage, less worry</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="navigation-container">
              <button className="custom-prev navigation-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="custom-next navigation-btn">
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
                padding: 0 10px 20px 10px;
              }

              .card {
                position: relative;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                height: 300px;
                width: 100%;
                background: #1a1a1a;
        
                margin: 0 auto;
              }

              .card:hover {
                transform: translateY(-3px);

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
                padding: 20px 15px 15px;
              }

              .content h2 {
                font-size: 18px;
                font-weight: bold;
                margin: 0 0 6px 0;
                color: #ffffff;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
                line-height: 1.3;
              }

              .content p {
                font-size: 14px;
                opacity: 0.9;
                margin: 0;
                color: #e5e7eb;
                font-weight: 500;
                line-height: 1.4;
              }

              /* Custom Swiper Styles */
              :global(.swiper) {
                padding-bottom: 50px !important;
              }

              :global(.swiper-pagination) {
                position: absolute !important;
                bottom: 15px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                display: flex !important;
                justify-content: center !important;
                width: auto !important;
              }

              :global(.swiper-pagination-bullet) {
                background-color: rgba(255, 255, 255, 0.6) !important;
                opacity: 0.7 !important;
                transition: all 0.3s !important;
                width: 10px !important;
                height: 10px !important;
                border-radius: 50% !important;
                margin: 0 4px !important;
              }

              :global(.swiper-pagination-bullet-active) {
                opacity: 1 !important;
                background-color: #3b82f6 !important;
                transform: scale(1.3) !important;
              }

              /* Hide default Swiper navigation */
              :global(.swiper-button-next),
              :global(.swiper-button-prev) {
                display: none !important;
              }

              /* Custom Navigation Container */
              .navigation-container {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 15px;
                padding: 0 10px;
              }

              .navigation-btn {
                width: 40px;
                height: 40px;
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
                min-height: 44px;
                min-width: 44px;
                touch-action: manipulation;
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
              }

              .navigation-btn svg {
                width: 18px;
                height: 18px;
              }

              /* Small Mobile (≤375px) */
              @media (max-width: 375px) {
                .swiper-container {
                  padding: 0 5px 15px 5px;
                }

                .card {
                  height: 380px;
                  border-radius: 10px;
                  max-width: 330px;
                }

                .content {
                  padding: 18px 12px 12px;
                }

                .content h2 {
                  font-size: 16px;
                  margin-bottom: 4px;
                }

                .content p {
                  font-size: 13px;
                }

                .navigation-btn {
                  width: 38px;
                  height: 38px;
                }

                .navigation-btn svg {
                  width: 16px;
                  height: 16px;
                }

                :global(.swiper-pagination-bullet) {
                  width: 8px !important;
                  height: 8px !important;
                  margin: 0 3px !important;
                }
              }

              /* Mobile Portrait (376px - 639px) */
              @media (min-width: 376px) and (max-width: 639px) {
                .swiper-container {
                  padding: 0 8px 18px 8px;
                }

                .card {
                  height: 350px;
                  border-radius: 12px;
                  max-width: 330px;
                }

                .content {
                  padding: 20px 15px 15px;
                }

                .content h2 {
                  font-size: 18px;
                  margin-bottom: 6px;
                }

                .content p {
                  font-size: 14px;
                }
              }

              /* Mobile Landscape / Small Tablet (640px - 767px) */
              @media (min-width: 640px) and (max-width: 767px) {
                .swiper-container {
                  padding: 0 12px 20px 12px;
                }

                .card {
                  height: 350px;
                  border-radius: 14px;
                }

                .content {
                  padding: 25px 18px 18px;
                }

                .content h2 {
                  font-size: 20px;
                  margin-bottom: 7px;
                }

                .content p {
                  font-size: 15px;
                }

                .navigation-btn {
                  width: 42px;
                  height: 42px;
                }
              }

              /* Tablet (768px - 1023px) */
              @media (min-width: 768px) and (max-width: 1023px) {
                .swiper-container {
                  padding: 0 15px 20px 15px;
                }

                .card {
                  height: 380px;
                  border-radius: 15px;
                }

                .content {
                  padding: 28px 20px 20px;
                }

                .content h2 {
                  font-size: 21px;
                  margin-bottom: 8px;
                }

                .content p {
                  font-size: 15px;
                }

                .navigation-container {
                  justify-content: flex-end;
                  gap: 12px;
                  margin-top: 20px;
                  padding: 0 20px;
                }

                .navigation-btn {
                  width: 44px;
                  height: 44px;
                }

                .navigation-btn svg {
                  width: 20px;
                  height: 20px;
                }
              }

              /* Desktop (1024px+) */
              @media (min-width: 1024px) {
                .swiper-container {
                  padding: 0 20px 20px 20px;
                  max-width: 800px;
                }

                .card {
                  height: 450px;
                  border-radius: 16px;
                  max-width: 480px;
                }

                .content {
                  padding: 30px 20px 20px;
                }

                .content h2 {
                  font-size: 22px;
                  margin-bottom: 8px;
                }

                .content p {
                  font-size: 16px;
                }

                .navigation-container {
                  justify-content: flex-end;
                  gap: 12px;
                  margin-top: 20px;
                  padding: 0 20px;
                }

                .navigation-btn {
                  width: 44px;
                  height: 44px;
                }

                .navigation-btn svg {
                  width: 20px;
                  height: 20px;
                }
              }

              /* Touch device optimizations */
              @media (hover: none) and (pointer: coarse) {
                .card:hover {
                  transform: none;
                  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                  border-color: rgba(255, 255, 255, 0.1);
                }

                .card:active {
                  transform: scale(0.98);
                  transition: transform 0.15s ease;
                }

                .navigation-btn:hover {
                  transform: none;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                  border-color: rgba(255, 255, 255, 0.2);
                  background-color: rgba(26, 26, 26, 0.8);
                }

                .navigation-btn:active:not(.disabled) {
                  transform: scale(0.95);
                  transition: transform 0.1s ease;
                  border-color: #3b82f6;
                  background-color: #3b82f6;
                }

                .card:hover .image {
                  transform: none;
                }
              }

              /* Improve swiper wrapper alignment */
              :global(.swiper-wrapper) {
                align-items: center;
              }

              /* Better spacing for pagination on different screen sizes */
              @media (max-width: 639px) {
                :global(.swiper) {
                  padding-bottom: 45px !important;
                }

                :global(.swiper-pagination) {
                  bottom: 12px !important;
                }
              }

              @media (min-width: 640px) and (max-width: 1023px) {
                :global(.swiper) {
                  padding-bottom: 55px !important;
                }

                :global(.swiper-pagination) {
                  bottom: 15px !important;
                }
              }

              /* Responsive layout adjustments */
              @media (max-width: 1023px) {
                .navigation-container {
                  justify-content: center;
                }
              }

              /* Improve touch targets for accessibility */
              .navigation-btn {
                -webkit-tap-highlight-color: transparent;
                user-select: none;
              }

              /* Better visual feedback for disabled state on mobile */
              @media (max-width: 639px) {
                .navigation-btn.disabled {
                  opacity: 0.3;
                }

                .navigation-btn.disabled::after {
                  display: none;
                }
              }

              /* Ensure proper spacing on very small screens */
              @media (max-width: 320px) {
                .swiper-container {
                  padding: 0 5px 15px 5px;
                }

                .card {
                  height: 260px;
                  border-radius: 10px;
                }

                .content {
                  padding: 15px 10px 10px;
                }

                .content h2 {
                  font-size: 15px;
                }

                .content p {
                  font-size: 12px;
                }

                .navigation-btn {
                  width: 36px;
                  height: 36px;
                }

                .navigation-btn svg {
                  width: 14px;
                  height: 14px;
                }
              }

              /* Landscape mobile optimization */
              @media (max-height: 500px) and (orientation: landscape) {
                .card {
                  height: 250px;
                }

                .content {
                  padding: 15px 12px 12px;
                }

                .content h2 {
                  font-size: 16px;
                  margin-bottom: 4px;
                }

                .content p {
                  font-size: 13px;
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