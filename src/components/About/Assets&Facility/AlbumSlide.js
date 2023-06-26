"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";

import Image from "next/image";

export default function AlbumSlide({ dataSlide }) {
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
        <div className="relative flex items-center slide-certified border-y border-[#ccc] md:flex-col-reverse">
            <div className="flex flex-col gap-y-[1.5vw] gap-x-[calc(1.5*100vw/100)] btn-action items-center justify-center w-[20%] m-auto md:gap-x-[2.13vw] md:!pb-[10vw]">
                <button
                    className={`${
                        indexSlider === 0
                            ? "bg-active border border-solid border-greenPrimary cursor-not-allowed"
                            : "bg-active cursor-pointer"
                    } w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={"white"}
                        className="w-[1.3vw] h-[1.3vw] md:w-[2.93vw] md:h-[2.93vw]"
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
                    className={`${
                        dataSlide.length - indexSlider === 3
                            ? "bg-active border border-solid border-greenPrimary cursor-not-allowed"
                            : "bg-active cursor-pointer"
                    } w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={"white"}
                        className="w-[1.3vw] h-[1.3vw] md:w-[2.93vw] md:h-[2.93vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-[80%] pl-[4.5vw] border-l border-[#ccc] md:pl-0 md:py-[6.27vw] md:mb-[8.53vw] md:border-l-0 md:border-b md:border-[#ccc] md:w-full">
                <Swiper
                    breakpoints={{
                        768: {
                            spaceBetween: 30,
                        },
                        1024: {
                            spaceBetween: 60,
                        },
                    }}
                    slidesPerView="auto"
                    spaceBetween={10}
                    onSlideChange={handleSlideChange}
                    modules={[Pagination]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="h-fit flex flex-col items-end relative swiper-certified w-[80%] py-[2.4vw] "
                >
                    {dataSlide.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="!h-fit relative slide-item-certified w-[33%] lg:w-[50%] md:w-[70%]"
                        >
                            {({ isActive }) => (
                                <Link href="/" className="w-full">
                                    <div className="w-full h-[34.8125vw] img-certified md:h-[94.93vw] lg:h-[48vw]">
                                        <Image
                                            width={344}
                                            height={426}
                                            className="object-cover w-full h-full"
                                            src={item?.sourceUrl}
                                            alt="img"
                                        />
                                    </div>
                                </Link>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
