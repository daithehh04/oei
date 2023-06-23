"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/img/member-team.png";

import { Grid, Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";
const arrTeams = new Array(20).fill(0);

export default function ListMember() {
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
        <div className="relative list-member content mt-[3.75vw]">
            <Swiper
                slidesPerView={4}
                spaceBetween={28}
                grid={{
                    rows: 2,
                }}
                onSlideChange={handleSlideChange}
                pagination={{
                    type: "progressbar",
                }}
                modules={[Grid, Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="swiper-members relative !h-[70.25vw] "
            >
                {arrTeams.map((member, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative slide-item-news !h-[33.25vw] !m-0"
                    >
                        {({ isActive }) => (
                            <Link href="/">
                                <div className="w-full h-[calc(26.625*100vw/100)] img-team ">
                                    <Image
                                        width={344}
                                        height={426}
                                        className="object-cover w-full h-full"
                                        src={img}
                                        alt="img"
                                    />
                                </div>
                                <div className="item-member mt-[1vw] bg-white transition-all duration-500 flex flex-col ">
                                    <div>
                                        <p className="desc-member text-[1vw] text-[#394854] font-[400] leading-normal ">
                                            Office Managerin / Management
                                        </p>
                                        <p className="name-member text-[1.5vw] text-[#394854] font-[700] leading-normal ">
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
                    } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
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
                    } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
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
