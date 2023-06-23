"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";

import img from "../../../assets/img/member-team.png";
import Image from "next/image";

const arrTeams = new Array(10).fill(0);

export default function SlideTeams() {
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
        <div className="relative slide-team">
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 28,
                    },
                }}
                slidesPerView="auto"
                spaceBetween={10}
                onSlideChange={handleSlideChange}
                pagination={{
                    type: "progressbar",
                }}
                modules={[Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="w-full h-fit flex flex-col items-end relative swiper-lastnews"
            >
                {arrTeams.map((news, index) => (
                    <SwiperSlide
                        key={index}
                        className="!h-fit relative slide-item-news w-[25%] md:w-[60%]"
                    >
                        {({ isActive }) => (
                            <Link href="/">
                                <div className="w-full h-[calc(26.625*100vw/100)] img-team md:h-[73.6vw] lg:h-[35vw]">
                                    <Image
                                        width={344}
                                        height={426}
                                        className="object-cover w-full h-full"
                                        src={img}
                                        alt="img"
                                    />
                                </div>
                                <div className="item-member bg-white transition-all duration-500 flex flex-col mt-[1.25vw]">
                                    <div>
                                        <p className="desc-member text-[1vw] text-[#394854] font-[400] leading-normal md:text-[2.93vw] lg:text-[1.5vw]">
                                            Office Managerin / Management
                                        </p>
                                        <p className="name-member text-[1.5vw] text-[#394854] font-[700] leading-normal md:text-[4.352vw] lg:text-[2vw] lg:mt-[1vw]">
                                            Mr. Nguyen Van A
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10]">
                <button
                    className={`${
                        indexSlider === 0
                            ? "bg-transparent border border-solid border-greenPrimary cursor-not-allowed"
                            : "bg-greenPrimary cursor-pointer"
                    } w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`${indexSlider === 0 ? "#4CA757" : "white"}`}
                        className="w-[1.5vw] h-[1.5vw] md:w-[2.93vw] md:h-[2.93vw]"
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
                            ? "bg-transparent border border-solid border-greenPrimary cursor-not-allowed"
                            : "bg-greenPrimary cursor-pointer"
                    } w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`${
                            arrTeams.length - indexSlider === 4
                                ? "#4CA757"
                                : "white"
                        }`}
                        className="w-[1.5vw] h-[1.5vw] md:w-[2.93vw] md:h-[2.93vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
