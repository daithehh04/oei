"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";

import img from "../../../assets/img/circle-vision.png";
import Image from "next/image";

const arrTeams = new Array(10).fill(0);

export default function SlideVision() {
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
        <div className="relative slide-certified slide-vision gap-[5vw] border-t border-inherit">
            <div className="flex flex-col gap-y-[24px] gap-x-[calc(1.5*100vw/100)] btn-action">
                <button
                    className={`${
                        indexSlider === 0
                            ? "bg-active border border-solid border-greenPrimary cursor-not-allowed"
                            : "bg-active cursor-pointer"
                    } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-6 h-6"
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
                        arrTeams.length - indexSlider === 4
                            ? "bg-active border border-solid border-greenPrimary cursor-not-allowed"
                            : "bg-active cursor-pointer"
                    } w-[calc(3.75*100vw/100)] select-none btn-slide-member h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-6 h-6"
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
                slidesPerView={4}
                spaceBetween={0}
                onSlideChange={handleSlideChange}
                modules={[Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="w-full h-fit flex flex-col items-end relative swiper-vision"
            >
                {arrTeams.map((news, index) => (
                    <SwiperSlide
                        key={index}
                        className="!h-fit relative slide-item-vision "
                    >
                        {({ isActive }) => (
                            <Link href="/">
                                <div className="w-full">
                                    <p className="text-vision pt-[6.03125vw] text-[1vw] text-[#E3FCE6] w-[80%] m-auto">
                                        OFFSHORE ENERGY INSTALLATION JSC (OEI)
                                        was awarded the order to repair
                                    </p>
                                </div>
                                <div className="flex items-center my-[2vw]">
                                    <div className="w-[1.8125vw] h-[1.8125vw]">
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
                                <div className="pb-[8.3125vw] text-start year-vision text-[3.75vw] uppercase leading-[1.58]">
                                    {index + 2020}
                                </div>
                            </Link>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
