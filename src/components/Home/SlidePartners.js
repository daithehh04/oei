"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import { useRef } from "react";
import Image from "next/image";

export default function SlidePartners({ dataSlide }) {
    const swiperRef = useRef();

    return (
        <div className="partners-item pb-[6vw] mt-[3vw] md:mt-[6.4vw] md:pb-[8.53vw] md:px-[0.5vw]">
            <Swiper
                slidesPerView={3}
                spaceBetween={32}
                loop={true}
                centeredSlides={true}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 60,
                    },
                }}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                speed={1500}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                onBeforeInit={(swiper) => {
                    if (!swiper.params) return;
                    swiperRef.current = swiper;
                }}
                className="relative swiper-partners !w-full !h-[6.25vw] md:!h-[15vw] md:!max-h-[20.2vw] lg:!h-[15.625vw] pointer-events-none"
            >
                {dataSlide?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            width={200}
                            height={200}
                            className="object-contain w-full h-full"
                            src={item?.img?.sourceUrl}
                            alt={item?.img?.altText || item?.img?.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
