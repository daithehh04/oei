"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination } from "swiper";

import img from "../../../assets/img/cir.svg";
import img2 from "../../../assets/img/bg-grid-2.svg";
import Image from "next/image";

export default function SlideVision({ dataSlide }) {
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

    return (
        <div className="relative z-1 flex items-center justify-center border-t slide-certified slide-vision border-[#fff] border-opacity-50">
            <div className="flex z-10 items-center justify-center flex-col gap-y-[1.5vw] gap-x-[calc(1.5*100vw/100)] btn-action w-[20%] md:pt-[8.66vw] md:gap-x-[2.66vw] md:border-t md:border-opacity-50 md:border-[#fff]">
                <button
                    className={`${
                        indexSlider === 0
                            ? "bg-active border border-solid border-greenPrimary"
                            : "bg-active cursor-pointer"
                    } w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-[1.5vw] h-[1.5vw] md:w-[5.33vw] md:h-[5.33vw]"
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
                    className={`${
                        dataSlide.length - indexSlider === 4
                            ? "bg-active border border-solid border-greenPrimary"
                            : "bg-active cursor-pointer"
                    } w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-[1.5vw] h-[1.5vw] md:w-[5.33vw] md:h-[5.33vw]"
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
                slidesPerView="auto"
                spaceBetween={0}
                onSlideChange={handleSlideChange}
                modules={[Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="h-fit flex flex-col items-end relative swiper-vision border-l border-[#fff] border-opacity-50 !w-[80%] md:!w-[96.44%] md:ml-auto pl-[4vw] md:pl-0"
            >
                <div>
                    {dataSlide?.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative slide-item-vision !w-[28%] md:!w-[55%]"
                        >
                            {({ isActive }) => (
                                <div className="pb-[8.3125vw] pt-[6.03125vw]">
                                    <div className="w-full">
                                        <p className="text-vision  text-[1vw] text-[#E3FCE6] w-[80%] min-h-[4.5vw] m-auto md:pt-[10.66vw] md:text-[3.2vw] lg:text-[1.5vw] md:min-h-[30vw] line-clamp-3 md:line-clamp-4">
                                            {item?.text}
                                        </p>
                                    </div>
                                    <div className="flex items-center my-[2vw]">
                                        <div className="w-[1.8125vw] h-[1.8125vw] md:w-[7.73vw] md:h-[7.73vw] lg:w-[4vw] flex items-center justify-center lg:h-[4vw]">
                                            <Image
                                                src={img}
                                                alt="img"
                                                width={20}
                                                height={20}
                                                className="!object-contain"
                                            />
                                        </div>
                                        <div className="h-[1px] w-[100%] bg-[#fff]"></div>
                                    </div>
                                    <div className=" text-start year-vision text-[3.75vw] uppercase leading-[1.58] ml-[-3vw] md:ml-0 md:pb-[10.66vw] md:text-[10.66vw] lg:text-[6vw]">
                                        {item?.year}
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            <Image
                src={img2}
                width={500}
                height={500}
                alt="background"
                className="absolute bottom-0 left-0 right-0 object-cover w-full h-full -z-2"
            />
        </div>
    );
}
