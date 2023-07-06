"use client";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules

const arr = new Array(5).fill(0);

export default function Test() {
    const swiper1Ref = useRef();
    const swiper2Ref = useRef();

    const handleSlideChange = (swiper) => {
        if (!swiper1Ref.current) return;
        swiper1Ref.current.slideTo(swiper.realIndex);
    };

    return (
        <div className="flex flex-col-reverse">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiper2Ref.current = swiper;
                }}
                className="mySwiper2 !h-[300px]"
            >
                {arr.map((e, index) => (
                    <SwiperSlide key={index} className="!h-full !w-full">
                        <img
                            className="object-cover w-full h-full"
                            src={`https://swiperjs.com/demos/images/nature-${
                                index + 1
                            }.jpg`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                centeredSlides={true}
                onBeforeInit={(swiper) => {
                    swiper1Ref.current = swiper;
                }}
                className="mySwiper !h-[300px] pointer-events-none"
            >
                {arr.map((e, index) => (
                    <SwiperSlide key={index} className="!w-[60%] !h-full">
                        <img
                            className="object-cover w-full h-full"
                            src={`https://swiperjs.com/demos/images/nature-${
                                index + 1
                            }.jpg`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
