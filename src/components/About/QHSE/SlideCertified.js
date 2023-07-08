"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";

export default function SlideCertified({ dataSlide }) {
    const [indexSlider, setIndexSlider] = useState(0);
    const swiperRef = useRef();
    const handleNextSlide = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev();
    };

    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.activeIndex);
    };
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div
            className="relative flex items-center slide-certified border-y border-[#ccc] md:flex-col-reverse"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="flex flex-col gap-y-[1.5vw] gap-x-[calc(1.5*100vw/100)] btn-action items-center justify-center w-[20%] m-auto md:gap-x-[2.13vw]">
                <button
                    className={`bg-transparent border border-solid hover:bg-greenPrimary border-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.3vw] h-[1.3vw] md:w-[2.93vw] md:h-[2.93vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <button
                    onClick={handleNextSlide}
                    className={`bg-transparent border border-solid hover:bg-greenPrimary border-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.3vw] h-[1.3vw] md:w-[2.93vw] md:h-[2.93vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <Swiper
                breakpoints={{
                    768: {
                        spaceBetween: 30,
                    },
                    1024: {
                        spaceBetween: 60,
                    },
                }}
                slidesPerView="auto"
                spaceBetween={10}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="flex flex-col items-end relative swiper-certified w-[80%] p-[5vw] pl-[3.75vw] pr-0 border-l border-[#ccc] md:pl-0 md:py-[8vw]"
            >
                {dataSlide?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!h-fit relative slide-item-certified w-[25%] lg:w-[33%] md:w-[60%]"
                    >
                        {({ isActive }) => (
                            <div className="w-full h-[28.625vw] img-certified md:h-[78.93vw]">
                                <Image
                                    width={344}
                                    height={426}
                                    className="object-cover w-full h-full"
                                    src={item?.sourceUrl}
                                    alt={item?.altText || item?.title}
                                />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
