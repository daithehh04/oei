"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import img from "../../../assets/img/asset-1.png";

import Image from "next/image";

const arrReviews = new Array(5).fill(0);

export default function SlideAssets({ dataSlide }) {
    const [indexSlider, setIndexSlider] = useState(0);
    const swiperRef = useRef();

    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.activeIndex);
    };

    return (
        <div className="relative slide-assets">
            <Swiper
                breakpoints={{
                    768: {
                        spaceBetween: 16,
                    },
                    1024: {
                        spaceBetween: 24,
                    },
                }}
                loop="true"
                slidesPerView="auto"
                spaceBetween={10}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative w-full swiper-assets"
            >
                {dataSlide?.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="relative">
                            {({ isActive }) => {
                                const active = isActive ? "active" : "";
                                return (
                                    <div className={`item ${active}`}>
                                        <a
                                            href="#"
                                            className=" block w-full h-[35.75vw] md:h-[53.6vw]"
                                        >
                                            <Image
                                                width={344}
                                                height={426}
                                                className="object-cover w-full h-full"
                                                src={item?.sourceUrl}
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                );
                            }}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
