"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import img from "../../../assets/img/bg-grid-2.svg";

export default function SlideQuality({ dataSlide }) {
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

    return (
        <div className="relative flex items-start border-b border-[#fff] border-b-transparent border-opacity-50 flex-col-reverse">
            <div className="flex gap-y-[1.5vw] pl-[2.67vw] pt-[8.4vw] pb-[16vw] btn-action items-start w-full flex-row m-auto gap-x-[2.13vw]">
                <button
                    className={`bg-black01 select-none btn-slide-member rounded-full flex justify-center items-center w-[10.67vw] h-[10.67vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#fff`}
                        className="arrow-icon w-[5.23vw] h-[5.23vw]"
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
                    className={`bg-black01  select-none btn-slide-member rounded-full flex justify-center items-center w-[10.67vw] h-[10.67vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#fff`}
                        className="arrow-icon w-[5.23vw] h-[5.23vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="py-[6.4vw] border-l-0 border-b border-[#fff] border-opacity-50 w-full relative">
                <Swiper
                    slidesPerView={1}
                    onSlideChange={handleSlideChange}
                    modules={[Pagination, FreeMode]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    freeMode={true}
                    className="h-fit flex flex-col items-end relative py-[3.48vw] "
                >
                    {dataSlide.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="!h-fit relative slide-item-project !w-[100%] pl-[2.66vw]last:pr-[2.66vw]"
                        >
                            {({ isActive }) => (
                                <div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-x-[6vw] text-[#fff] text-[6.67vw] font-[800] capitalize">
                                            <span>0{index + 1}</span>
                                            <h3 className="leading-[1.33]">
                                                {item?.title}
                                            </h3>
                                        </div>
                                        <p className="leading-[1.57] text-[#fff] text-[3.73vw] w-[95%] pt-[2.67vw]">
                                            {item?.text}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Image
                    src={img}
                    width={1500}
                    height={1000}
                    alt="img"
                    className="absolute bottom-0 z-0 object-cover w-full h-full"
                />
            </div>
        </div>
    );
}
