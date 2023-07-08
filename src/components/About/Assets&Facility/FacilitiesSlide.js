"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";
import AOS from "aos";

import Image from "next/image";

export default function FacilitiesSlide({ dataSlide }) {
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
        AOS.init({
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            },
        });
    }, []);

    return (
        <div
            className="relative slide-facility w-[95.625%] ml-auto md:w-[94.66%] md:mr-auto"
            data-aos-once="true"
            data-aos="fade-left"
            data-aos-duration="2000"
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={24}
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
                {dataSlide?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!h-fit relative slide-item-news"
                    >
                        {({ isActive }) => (
                            <div className="flex md:flex-col">
                                <Image
                                    width={344}
                                    height={426}
                                    className="object-cover !w-[50%] h-auto max-h-[31.25vw] md:!w-full md:!h-[58.93vw] md:max-h-max"
                                    src={item?.img?.sourceUrl}
                                    alt={item?.img?.altText || item?.img?.title}
                                />
                                <div className="!w-[50%] md:!w-full">
                                    <div className="h-full">
                                        <div className="pb-[1.94vw] !h-[25%] border-b border-[#ccc] md:pb-[4.27vw] lg:pb-0">
                                            <h3 className="text-[#394854] text-[2vw] font-[800] leading-[1.375] tracking-tighter pl-[3.63vw] w-[85%] md:text-[4.8vw] md:w-full md:mt-[2.67vw] md:pl-0 lg:text-[2.25vw]">
                                                {item?.heading}
                                            </h3>
                                        </div>

                                        {item?.listItem?.map((item) => (
                                            <div className="pb-[1.94vw] !h-[25%] pt-[2.5vw] pl-[3.63vw] flex items-center justify-between gap-[5.62vw] border-b border-[#ccc] md:flex-col md:items-start md:gap-0 md:py-[4.27vw] md:pl-0">
                                                <span className="text-[#3A5469] text-[1.25vw] font-[700] leading-[2.25] tracking-tighter md:text-[4.26vw] md:leading-[1.5] lg:text-[1.85vw]">
                                                    {item?.title}
                                                </span>
                                                <p className="text-[#394854] leading-normal text-[1.125vw] md:text-[3.73vw] lg:text-[1.65vw]">
                                                    {item?.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10]">
                <button
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw] lg:w-[6vw] lg:h-[6vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.5vw] h-[1.5vw] md:w-[2.93vw] md:h-[2.93vw]"
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw] lg:w-[6vw] lg:h-[6vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.5vw] h-[1.5vw] md:w-[2.93vw] md:h-[2.93vw]"
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
