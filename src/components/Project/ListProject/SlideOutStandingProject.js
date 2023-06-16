"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Link from "next/link";

import img from "../../../assets/img/vibe-4.png";
import img2 from "../../../assets/img/com-color.png";
import img3 from "../../../assets/img/ceo-2.png";

import Image from "next/image";

const arrReviews = new Array(5).fill(0);

export default function SlideOutstandingProject({ project, total }) {
    console.log(project);
    console.log(total);
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
        <div className="relative slide-prj">
            <Swiper
                centeredSlides={true}
                loop="true"
                slidesPerView="auto"
                spaceBetween={16}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="w-full flex flex-col items-end relative swiper-prj"
            >
                {arrReviews?.map((prjItem, index) => (
                    <SwiperSlide key={index} className="relative">
                        {({ isActive }) => {
                            const active = isActive ? "active" : "";
                            return (
                                <div className={`${active} prj`}>
                                    <a
                                        href="#"
                                        className=" block w-full h-[calc(26.625*100vw/100)] img-outstanding"
                                    >
                                        <Image
                                            width={344}
                                            height={426}
                                            className="object-cover w-full h-full"
                                            src={img}
                                            alt="img"
                                        />
                                    </a>
                                    <div className="info-block flex items-center justify-between p-[1.5vw] bg-[#fff]">
                                        <div className="info">
                                            <p className="text-[1.125vw] font-[400] leading-[1.44] text-[#394854] uppercase">
                                                PROJECT
                                            </p>
                                            <a href="#">
                                                <h3 className="pt-[0.625vw] text-[2vw] font-[700] leading-[1.25] tracking-tighter title-prj capitalize">
                                                    75mw an thuan windfarm
                                                    project
                                                </h3>
                                            </a>
                                            <div className="flex items-center mt-[0.5vw]">
                                                <div className="owner flex flex-col mr-[5.125vw]">
                                                    <span className="text-[0.875vw] font-[400]">
                                                        Project owner:
                                                    </span>
                                                    <span className="text-[1.25vw] font-[600] leading-[1.3]">
                                                        PECC2
                                                    </span>
                                                </div>
                                                <div className="owner flex flex-col mr-[5.125vw]">
                                                    <span className="text-[0.875vw] font-[400]">
                                                        Cable Installation Type:
                                                    </span>
                                                    <span className="text-[1.25vw] font-[600] leading-[1.3]">
                                                        Subsea Cables
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-[0.5vw] items-end text-primary border-t pt-[0.5vw] border-greenPrimary">
                                            <span className="text-[4vw] leading-[1] font-[700]">
                                                0{index + 1}
                                            </span>
                                            <span className="text-[1.5vw] font-[400]">
                                                /05
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-[1.5vw]">
                                            <button
                                                className={`select-none flex justify-center items-center`}
                                                onClick={handlePrevSlide}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke={"#4CA757"}
                                                    className="w-[2.5vw] h-[2.5vw]"
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
                                                className={`flex justify-center items-center`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke={"#4CA757"}
                                                    className="w-[2.5vw] h-[2.5vw]"
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
                                </div>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
