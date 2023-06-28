"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { useEffect } from "react";

export default function AchievementMb({ data }) {
    const arrYear = new Array(5).fill();
    const [rate, setRate] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleSlide = () => {
        const ac = document.querySelector(
            ".swiper-slide-active.swiper-slide-visible"
        );

        const y = document.querySelector(".achiv-mb .year");
        const minYear = +y.innerHTML.slice(0, 4);
        const year = ac.querySelector(".year");
        const yearNow = +year.innerHTML.slice(0, 4);
        const num = yearNow - minYear;
        const lengthSlide = data?.listProject?.length - 1;

        let rate = 1 - num / lengthSlide;
        if (rate < 0) {
            rate = 0;
        }
        if (rate > 1) {
            rate = 1;
        }
        setRate(rate);
    };
    return (
        <div className="achiev_mb">
            <h3 className="title pl-[2.67vw] text-[4.267vw] font-[800] leading-normal tracking-tighter text-[#3A5469] uppercase border-b border-[#ccc] mt-[16vw] pb-[3vw]">
                our achievements
            </h3>
            <div className=" circle-mb">
                <svg
                    className="history-years-vertical__circle"
                    width="42.67vw"
                    height="42.67vw"
                    viewBox="0 0 42.67vw 42.67vw"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        rx="1"
                        width="2"
                        height="2"
                        pathLength="1"
                    ></rect>
                    <rect
                        className="js-sticky-history-progress"
                        x="0.5"
                        y="0.5"
                        rx="1"
                        width="2"
                        height="2"
                        pathLength="1"
                        style={{
                            strokeDashoffset: rate,
                        }}
                    ></rect>
                </svg>
            </div>
            <div className="achieve-mb relative content pt-[76vw]">
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    onSlideChange={handleSlide}
                    className=""
                >
                    {data?.listProject?.map((item, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => {
                                const active = isActive ? "active" : "";
                                return (
                                    <div className={`${active} flex `}>
                                        <div className="left w-[70%] pr-[8.53vw] border-r border-[#ccc]">
                                            <span className="text-[#376A66] font-[900]">
                                                {item?.year}
                                            </span>
                                            <h3 className="text-[5.33vw] text-primary font-[800] leading-[1.25]">
                                                {item?.title}
                                            </h3>
                                            <p className="text text-[#394854] text-[3.73vw] leading-[1.57] mt-[2.13vw]">
                                                {item?.desc}
                                            </p>
                                        </div>
                                        <div className="right relative w-[30%] pl-[8.53vw] text-[#394854] h-[46vw] overflow-hidden">
                                            <p className=" text-[5.33vw] font-[800] leading-[1.25] line-clamp-5">
                                                {item?.heading}
                                            </p>
                                            <div
                                                className="text-[3.73vw] mt-[2.13vw]"
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.content,
                                                }}
                                            ></div>
                                            <div className="absolute top-0 bottom-0 right-0 w-[70%] h-full overlay-achiv bg-white opacity-50"></div>
                                        </div>
                                    </div>
                                );
                            }}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute top-[18vw] text-center w-full text-[21vw]">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        centeredSlides={true}
                        spaceBetween={10}
                        slidesPerView="auto"
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="achiv-mb"
                    >
                        {data?.listProject?.map((item, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => {
                                    const active = isActive ? "active" : "";
                                    return (
                                        <div
                                            className={`year text-primary font-[800] leading-[1.8] ${active}`}
                                        >
                                            {item?.year}
                                            {/* <div className=" circle">
                                                <svg
                                                    className="history-years-vertical__circle"
                                                    width="42.67vw"
                                                    height="42.67vw"
                                                    viewBox="0 0 42.67vw 42.67vw"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        rx="1"
                                                        width="2"
                                                        height="2"
                                                        pathLength="1"
                                                    ></rect>
                                                    <rect
                                                        className="js-sticky-history-progress"
                                                        x="0.5"
                                                        y="0.5"
                                                        rx="1"
                                                        width="2"
                                                        height="2"
                                                        pathLength="1"
                                                        style={{
                                                            strokeDashoffset:
                                                                rate,
                                                        }}
                                                    ></rect>
                                                </svg>
                                            </div> */}
                                        </div>
                                    );
                                }}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
