"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Pagination, FreeMode } from "swiper";
import Image from "next/image";
import AOS from "aos";
import Link from "next/link";

export default function SlideService({ dataSlide }) {
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
            className="relative slide-service w-[91.25%] ml-auto mr-auto md:w-full mt-[2vw]"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Swiper
                breakpoints={{
                    768: {
                        spaceBetween: 20,
                    },
                    1024: {
                        spaceBetween: 28,
                    },
                }}
                slidesPerView="auto"
                onSlideChange={handleSlideChange}
                freeMode={true}
                modules={[Pagination, FreeMode]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative flex flex-col items-end w-full h-fit swiper-lastnews"
            >
                {dataSlide?.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className="!h-fit relative item-service !w-[28%] lg:!w-[40%] md:!w-[80%] md:pl-[2.66vw] md:last:mr-[2.66vw]"
                        >
                            {({ isActive }) => (
                                <Link
                                    href={`/service/${encodeURIComponent(
                                        item?.slug
                                    )}`}
                                >
                                    <div className="w-full !h-[20.125vw] md:!h-[58.93vw] lg:!h-[32vw]">
                                        <Image
                                            width={1000}
                                            height={500}
                                            className="object-cover w-full h-full"
                                            src={
                                                item?.featuredImage?.node
                                                    ?.sourceUrl
                                            }
                                            alt={
                                                item?.featuredImage?.node
                                                    ?.altText ||
                                                item?.featuredImage?.node?.title
                                            }
                                        />
                                    </div>
                                    <div className="bg-white info p-[1.25vw] pb-[1.88vw] md:p-[3.73vw] md:pb-[4.95vw] md:min-h-[39vw]">
                                        <h3 className="title text-[1.25vw] text-[#394854] font-[700] leading-normal md:text-[3.73vw] lg:text-[2.25vw] line-clamp-2">
                                            {item?.title}
                                        </h3>
                                        <p
                                            className="desc text-[1vw] mt-[0.5vw] text-[#394854] font-[400] leading-normal line-clamp-4 md:text-[2.98vw] md:mt-[1.5vw] lg:text-[1.75vw] md:line-clamp-4 lg:mt-[1vw]"
                                            dangerouslySetInnerHTML={{
                                                __html: item?.excerpt,
                                            }}
                                        ></p>
                                    </div>
                                </Link>
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="flex gap-x-[1.5vw] mt-[2.5vw] absolute bottom-[50%] z-10 w-full justify-between px-[2.66vw] md:px-[4.88vw] btn-slide">
                <button
                    className={`border border-solid border-greenPrimary bg-greenPrimary w-[3vw] select-none btn-slide-member h-[3vw] rounded-full flex justify-center items-center  lg:w-[4.67vw] lg:h-[4.67vw] md:w-[8.66vw] md:h-[8.66vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#fff`}
                        className="w-[1.2vw] h-[1.2vw] lg:w-[2vw] lg:h-[2vw] md:w-[2.93vw] md:h-[2.93vw]"
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
                    className={`border border-solid border-greenPrimary bg-greenPrimary w-[3vw] select-none btn-slide-member h-[3vw] rounded-full flex justify-center items-center lg:w-[4.67vw] lg:h-[4.67vw] md:w-[8.66vw] md:h-[8.66vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#fff`}
                        className="w-[1.2vw] h-[1.2vw] lg:w-[2vw] lg:h-[2vw] md:w-[2.93vw] md:h-[2.93vw] "
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
