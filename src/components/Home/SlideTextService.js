"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const arrItems = new Array(8).fill(0);

export default function SlideTextService({ text }) {
    return (
        <div className="mt-[7.5vw] mb-[calc(3.625*100vw/100)] md:mb-[16.66vw]">
            <Swiper
                loop={true}
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={8000}
                modules={[Autoplay]}
                id="swiper-service"
                className="w-full mySwiper"
            >
                {arrItems.map((item, index) => (
                    <SwiperSlide
                        className="!w-fit service-item-text text-[calc(6.25*100vw/100)] leading-[150%] font-black uppercase md:text-[16vw] "
                        key={index}
                    >
                        <span dangerouslySetInnerHTML={{ __html: text }}></span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
