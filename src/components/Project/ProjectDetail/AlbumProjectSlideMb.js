"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import Image from "next/image";
import AOS from "aos";

export default function AlbumProjectSlideMb({ imgsAlbum }) {
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

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div
            className="relative slide-team content"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                slidesPerView="auto"
                spaceBetween={10}
                onSlideChange={handleSlideChange}
                pagination={{
                    type: "progressbar",
                }}
                modules={[Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative flex flex-col items-end w-full h-fit swiper-lastnews"
            >
                {imgsAlbum.map((item, index) => {
                    const urlImg = item?.sourceUrl;
                    return (
                        <SwiperSlide
                            key={index}
                            className="!h-fit relative slide-item-certified md:w-[70%]"
                        >
                            {({ isActive }) => (
                                <div className="w-full h-[34.8125vw] img-certified md:h-[57.06vw] lg:h-[44vw]">
                                    <Image
                                        width={344}
                                        height={426}
                                        className="object-cover w-full h-full"
                                        src={urlImg}
                                        alt={item?.altText || item?.title}
                                    />
                                </div>
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10]">
                <button
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.5vw] h-[1.5vw] md:w-[3vw] md:h-[3vw]"
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.5vw] h-[1.5vw] md:w-[3vw] md:h-[3vw]"
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
    );
}
