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
    <div className='app-layout py-8 md:py-20'>
      <div className='flex flex-col space-y-6 md:space-y-8'>
        <div id='title-LifeExp' className='section-header px-4 md:px-0'>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Life&apos;s better as a Guest
          </h1>
          <span className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto block px-2 md:px-0">
            Discover exclusive benefits, earn miles, and unlock premium experiences with Himalaya Jet Guest
          </span>
        </div>
        
        <div id='swiper-LifeExp' className='flex flex-col'>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
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
                  spaceBetween: 15,
                  centeredSlides: true,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 25,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: false,
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
                      className="image h-full w-full object-cover"
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
                padding: 0 20px;
              }

              .card {
                position: relative;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                height: 320px;
                width: 100%;
                background: #1a1a1a;
                border: 1px solid rgba(255, 255, 255, 0.1);
                margin: 0 auto;
              }

              .card:hover {
                transform: translateY(-3px);
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
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
                padding: 25px 15px 15px;
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
                padding: 0 20px;
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

              /* Tablet styles */
              @media (min-width: 640px) and (max-width: 1023px) {
                .swiper-container {
                  padding: 0 15px;
                }

                .card {
                  height: 350px;
                  border-radius: 14px;
                }

                .content {
                  padding: 30px 18px 18px;
                }

                .content h2 {
                  font-size: 20px;
                  margin-bottom: 8px;
                }

                .content p {
                  font-size: 15px;
                }

                .navigation-container {
                  gap: 12px;
                  margin-top: 20px;
                }

                .navigation-btn {
                  width: 42px;
                  height: 42px;
                }
              }

              /* Desktop styles */
              @media (min-width: 1024px) {
                .swiper-container {
                  padding: 0 30px;
                }

                .card {
                  height: 400px;
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

              /* Mobile styles */
              @media (max-width: 639px) {
                .swiper-container {
                  padding: 0 10px;
                }

                .card {
                  height: 300px;
                  border-radius: 12px;
                  max-width: 320px;
                  margin: 0 auto;
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

                .navigation-container {
                  margin-top: 10px;
                  gap: 8px;
                }

                .navigation-btn {
                  width: 36px;
                  height: 36px;
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

              /* Extra small mobile devices */
              @media (max-width: 375px) {
                .swiper-container {
                  padding: 0 5px;
                }

                .card {
                  height: 280px;
                  max-width: 280px;
                }

                .content h2 {
                  font-size: 16px;
                }

                .content p {
                  font-size: 13px;
                }

                .navigation-btn {
                  width: 32px;
                  height: 32px;
                }

                .navigation-btn svg {
                  width: 14px;
                  height: 14px;
                }
              }

              /* Touch-friendly improvements for mobile */
              @media (hover: none) and (pointer: coarse) {
                .card:hover {
                  transform: none;
                  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                  border-color: rgba(255, 255, 255, 0.1);
                }

                .card:active {
                  transform: scale(0.98);
                  transition: transform 0.1s ease;
                }

                .navigation-btn:hover {
                  transform: none;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }

                .navigation-btn:active {
                  transform: scale(0.95);
                  transition: transform 0.1s ease;
                }

                .card:hover .image {
                  transform: none;
                }
              }

              /* Improve swiper wrapper for mobile */
              :global(.swiper-wrapper) {
                align-items: center;
              }

              /* Better spacing for pagination on mobile */
              @media (max-width: 639px) {
                :global(.swiper) {
                  padding-bottom: 40px !important;
                }

                :global(.swiper-pagination) {
                  bottom: 10px !important;
                }
              }

              /* Ensure proper touch area for navigation buttons on mobile */
              @media (max-width: 639px) {
                .navigation-btn {
                  min-height: 44px;
                  min-width: 44px;
                  touch-action: manipulation;
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