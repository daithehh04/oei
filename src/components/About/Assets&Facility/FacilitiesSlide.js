"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";

import img from "../../../assets/img/member-team.png";
import Image from "next/image";

const arrTeams = new Array(10).fill(0);

export default function FacilitiesSlide() {
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
        <div className="relative slide-facility w-[95.625%] ml-auto">
            <Swiper
                slidesPerView={1}
                spaceBetween={24}
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
                        className="!h-fit relative slide-item-news"
                    >
                        {({ isActive }) => (
                            <Link href="/" className="flex">
                                <Image
                                    width={344}
                                    height={426}
                                    className="object-cover w-[50%] h-[31.25vw]"
                                    src={img}
                                    alt="img"
                                />
                                <div className="w-[50%]">
                                    <div>
                                        <div className="pb-[1.94vw] border-b border-[#ccc]">
                                            <h3 className="text-[#394854] text-[2vw] font-[800] leading-[1.375] tracking-tighter pl-[3.63vw] w-[85%]">
                                                Heavy-duty installation barges
                                                for WTG foundation, tower and
                                                turbine installation
                                            </h3>
                                        </div>
                                        <div className="pb-[1.94vw] pt-[2.5vw] pl-[3.63vw] flex items-center justify-between gap-[5.62vw] border-b border-[#ccc]">
                                            <span className="text-[#3A5469] text-[1.25vw] font-[700] leading-[2.25] tracking-tighter">
                                                Information
                                            </span>
                                            <p className="text-[#394854] leading-normal text-[1.125vw]">
                                                Loma ecenas. Etiam massa tempus
                                                dolor nulla erat cursus semper
                                                ut tincidunt.{" "}
                                            </p>
                                        </div>
                                        <div className="pb-[1.94vw] pt-[2.5vw] pl-[3.63vw] flex items-center justify-between gap-[5.62vw] border-b border-[#ccc]">
                                            <span className="text-[#3A5469] text-[1.25vw] font-[700] leading-[2.25] tracking-tighter">
                                                Information
                                            </span>
                                            <p className="text-[#394854] leading-normal text-[1.125vw]">
                                                Loma ecenas. Etiam massa tempus
                                                dolor nulla erat cursus semper
                                                ut tincidunt.{" "}
                                            </p>
                                        </div>
                                        <div className="pb-[1.94vw] pt-[2.5vw] pl-[3.63vw] flex items-center justify-between gap-[5.62vw] border-b border-[#ccc]">
                                            <span className="text-[#3A5469] text-[1.25vw] font-[700] leading-[2.25] tracking-tighter">
                                                Information
                                            </span>
                                            <p className="text-[#394854] leading-normal text-[1.125vw]">
                                                Loma ecenas. Etiam massa tempus
                                                dolor nulla erat cursus semper
                                                ut tincidunt.{" "}
                                            </p>
                                        </div>
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
                        arrTeams.length - indexSlider === 1
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
                            arrTeams.length - indexSlider === 1
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
