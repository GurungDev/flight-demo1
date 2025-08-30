"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import DestinationCard from "./DestinationCard"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { useRef } from "react"
import type { Swiper as SwiperCore } from 'swiper'
import FlightSearchModal from "./FlightSearchModal"
import { useState } from "react"

const DestinationSection = () => {
    // Destinations data array matching the reference image
    const destinations = [
        {
            id: 1,
            city: "Hong Kong",
            country: "China",
            price: "Euro 2,885*",
            miles: "66,356 miles",
            currency: "Euro",
            image: "/hongkong.png",
        },
        {
            id: 2,
            city: "Kathmandu",
            country: "Nepal",
            price: "Euro 2,210*",
            miles: "43,216 mi",
            currency: "Euro",
            image: "/kathmandu.jpeg",
        },
        {
            id: 3,
            city: "Sydney",
            country: "Australia",
            price: "Euro 2,565*",
            miles: "55,808 miles",
            currency: "Euro",
            image: "/aus.jpg",
        },
        {
            id: 4,
            city: "London",
            country: "United Kingdom",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/london.jpg",
        },
        {
            id: 5,
            city: "Pokhara",
            country: "Nepal",
            price: "Euro 2,425",
            miles: "50,024 miles",
            currency: "Euro",
            image: "/pokhara.jpg",
        },
        {
            id: 6,
            city: "Paris",
            country: "France",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/paris.jpg",
        },
        {
            id: 7,
            city: "Berlin",
            country: "Germany",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/german.jpg",
        },
        {
            id: 8,
            city: "Madrid",
            country: "Spain",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/madrid.jpg",
        },
    ]
    const swiperRef = useRef<SwiperCore | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className=" pt-40 app-layout">
                <div className="flex    items-center justify-between">
                    <div className="  text-white">
                        <h1 className=" font-bold  ">
                            Deals from
                            <span className="text-blue-500"> Abu Dhabi</span>
                        </h1>
                        <p className="  text-gray-300">Let us inspire your next trip</p>
                    </div>
                    <div>
                        <div className="group cursor-pointer inline-block">
                            <span className="relative inline-block text-blue-500 text-center font-semibold">
                                View all
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out delay-150 group-hover:w-full"></span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Swiper for Destination Cards */}
                <div className="mt-16 relative      mx-auto">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={false}
                        centeredSlides={true}
                        slidesPerView={2}
                        initialSlide={2}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1.2,
                            slideShadows: false,
                        }}

                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[EffectCoverflow, Navigation]}
                        className="destination-swiper"
                        style={{ padding: "0px 0" }}
                        speed={600}
                    >
                        {destinations.map((destination) => (
                            <SwiperSlide key={destination.id}>
                                <DestinationCard {...destination} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                </div>

                {/* Custom Navigation Arrows */}
                <div className="flex justify-center space-x-4 mt-8">
                    <button
                        id={`swiper-button-prev`}
                        className="border-white text-white p-3 flex justify-center items-center border-[0.7px] rounded-full duration-300 hover:bg-blue-600 backdrop-blur-sm transition-all"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <span className="text-2xl">
                            <RxCaretLeft />
                        </span>
                    </button>

                    <button
                        id={`swiper-button-next`}
                        className="border-white text-white p-3 flex justify-center items-center border-[0.7px] rounded-full duration-300 hover:bg-blue-600 backdrop-blur-sm transition-all"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <span className="text-2xl">
                            <RxCaretRight />
                        </span>
                    </button>
                </div>
            </div>

        </>


    )
}

export default DestinationSection
