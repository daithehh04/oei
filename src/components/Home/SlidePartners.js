"use client";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

SwiperCore.use([Autoplay]);

export default function SlidePartners({ dataSlide }) {
    const swiperRef = useRef();

    return (
        <div className="relative partners-item pb-[6vw] mt-[3vw]">
            <Swiper
                slidesPerView={6}
                spaceBetween={66}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="w-full flex flex-col items-center relative swiper-partners"
            >
                {dataSlide?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className=" relative slide-item-partners"
                    >
                        {({ isActive }) => (
                            <div>
                                <img
                                    className="object-contain max-w-[10vw]"
                                    src={item?.img?.sourceUrl}
                                    alt=""
                                />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
