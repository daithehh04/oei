"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Link from "next/link";

import img from "../../../assets/img/vibe-4.png";
import img2 from "../../../assets/img/com-color.png";
import img3 from "../../../assets/img/ceo-2.png";

import Image from "next/image";

const arrReviews = new Array(5).fill(0);

export default function SlideOutstandingProject() {
    const [indexSlider, setIndexSlider] = useState(0);
    const swiperRef = useRef();

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
                {arrReviews.map((review, index) => (
                    <SwiperSlide key={index} className="relative">
                        {({ isActive }) => {
                            const active = isActive ? "active" : "";
                            return (
                                <Link href="/" className={`${active}`}>
                                    <div className="w-full h-[calc(26.625*100vw/100)] img-outstanding">
                                        <Image
                                            width={344}
                                            height={426}
                                            className="object-cover w-full h-full"
                                            src={img}
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="text-[2vw]">{index}</h2>
                                </Link>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
