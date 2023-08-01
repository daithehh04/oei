"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";

export default function SlideAssets({ dataSlide }) {
    SwiperCore.use([Autoplay]);
    const [indexSlider, setIndexSlider] = useState(0);
    const swiperRef = useRef();

    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.activeIndex);
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div
            className="relative slide-assets"
            data-aos-once="true"
            data-aos="fade-left"
            data-aos-duration="1000"
        >
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
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative w-full swiper-assets "
            >
                {dataSlide?.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="relative">
                            {({ isActive }) => {
                                const active = isActive ? "active" : "";
                                return (
                                    <div className={`item ${active}`}>
                                        <div className=" block w-full h-[35.75vw] md:h-[53.6vw] md:pl-[2.66vw]">
                                            <Image
                                                width={344}
                                                height={426}
                                                className="object-cover w-full h-full"
                                                src={item?.sourceUrl}
                                                alt={
                                                    item?.altText || item?.title
                                                }
                                            />
                                        </div>
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
