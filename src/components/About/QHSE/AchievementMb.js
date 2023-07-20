"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import img from "../../../assets/img/ardown.svg";

export default function AchievementMb({ data }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisible(true);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setVisible(true);
        }
    }, []);
    const [rate, setRate] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleSlide = (swiper) => {
        const ac = document.querySelector(".swiper-slide-thumb-active");

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
        if (!swiper1Ref.current) return;
        swiper1Ref.current.slideTo(swiper.realIndex);
        setClick(null);
        handleClickSee();
    };

    const swiper1Ref = useRef();
    const swiper2Ref = useRef();

    const contentEl = useRef();
    const [click, setClick] = useState(null);
    const handleClickSee = (e) => {
        if (click === e) {
            setClick(null);
        } else {
            setClick(e);
        }
        const elements = document.querySelectorAll("#oei-prj");
        const toggleButton = document.querySelectorAll("#see");
        const arrowdown = document.querySelectorAll("#arrow-down");
        elements.forEach((i, index) => {
            if ((click && click === index + 1) || e !== index + 1) {
                toggleButton[index].textContent = "See more";
                arrowdown[index].style.rotate = "0deg";
            } else {
                toggleButton[index].textContent = "Close";
                arrowdown[index].style.rotate = "180deg";
            }
        });
    };

    return (
        <div className="achiev_mb">
            <h3 className="title pl-[2.67vw] text-[4.267vw] font-[800] leading-normal tracking-tighter text-[#3A5469] uppercase border-b border-[#ccc] pt-[16vw] pb-[3vw]">
                {data?.title}
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
            {visible && (
                <div className="achieve-mb relative content pt-[76vw]">
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        onSlideChange={handleSlide}
                        onBeforeInit={(swiper) => {
                            swiper2Ref.current = swiper;
                        }}
                        className=""
                    >
                        {data?.listProject?.map((item, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => {
                                    const active = isActive ? "active" : "";
                                    return (
                                        <div className={`${active} flex `}>
                                            <div
                                                className="relative w-full pb-[16vw]"
                                                id={`oei-prj`}
                                            >
                                                <span className="text-[#376A66] font-[900] text-[3.7333vw]">
                                                    {item?.year}
                                                </span>
                                                <h3 className="text-[5.33vw] text-primary font-[800] leading-[1.25]">
                                                    {item?.title}
                                                </h3>
                                                <p className="text text-[#394854] text-[3.73vw] leading-[1.57] mt-[2.13vw]">
                                                    {item?.desc}
                                                </p>
                                                <div
                                                    className={`absolute bottom-[16vw] h-[5.4vw] left-0 right-0 bg-overlay ${
                                                        click === index + 1
                                                            ? "opacity-0"
                                                            : "opacity-40"
                                                    }`}
                                                ></div>
                                                <div
                                                    className="text-hidden"
                                                    ref={contentEl}
                                                    style={
                                                        click === index + 1
                                                            ? {
                                                                  height: contentEl
                                                                      .current
                                                                      .scrollHeight,
                                                              }
                                                            : {
                                                                  height: 0,
                                                                  overflow:
                                                                      "hidden",
                                                              }
                                                    }
                                                >
                                                    <p className=" text-[5.33vw]  text-[#394854] font-[800] leading-[1.25] mt-[2.13vw pt-[5.67vw]">
                                                        {item?.heading}
                                                    </p>
                                                    <div
                                                        className="content-text text-[3.73vw] mt-[2.13vw] text-[#394854]"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item?.content,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div
                                                    className="absolute bottom-0 z-10 flex flex-col items-center justify-center left-[50%] -translate-x-1/2 cursor-pointer"
                                                    onClick={() =>
                                                        handleClickSee(
                                                            index + 1
                                                        )
                                                    }
                                                >
                                                    <span
                                                        className="text-primary text-[3.73vw] font-[400]"
                                                        id="see"
                                                    >
                                                        See more
                                                    </span>
                                                    <Image
                                                        src={img}
                                                        width={50}
                                                        height={50}
                                                        alt="img"
                                                        className="transition-all w-[6.4vw] h-[5.33vw] object-cover"
                                                        id="arrow-down"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-[18vw] text-center w-full text-[21vw] gallery-thumbs">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            centeredSlides={true}
                            spaceBetween={10}
                            slidesPerView="auto"
                            modules={[FreeMode, Navigation, Thumbs]}
                            onBeforeInit={(swiper) => {
                                swiper1Ref.current = swiper;
                            }}
                            className="achiv-mb"
                        >
                            {data?.listProject?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    {({ isActive }) => {
                                        const active = isActive ? "active" : "";
                                        return (
                                            <div
                                                className={`year font-[800] leading-[1.8] ${active}`}
                                            >
                                                {item?.year}
                                            </div>
                                        );
                                    }}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    );
}
