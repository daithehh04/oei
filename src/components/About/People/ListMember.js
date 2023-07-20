"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Pagination } from "swiper";
import Link from "next/link";
import linked from "../../../assets/img/linkedin.svg";
import Image from "next/image";
import AOS from "aos";

export default function ListMember({ data }) {
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
            className="relative list-member content mt-[3.75vw]"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grid={{
                    rows: 2,
                }}
                onSlideChange={handleSlideChange}
                pagination={{
                    type: "progressbar",
                }}
                modules={[Grid, Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="swiper-members relative !h-[70.25vw] "
            >
                {data?.listPeople.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative slide-item-news !h-[33.25vw] !m-0"
                    >
                        {({ isActive }) => (
                            <div>
                                <div className="w-full !h-[calc(26.625*100vw/100)] img-team ">
                                    <Image
                                        width={344}
                                        height={426}
                                        className="object-cover w-full h-full"
                                        src={item?.img?.sourceUrl}
                                        alt={
                                            item?.img?.altText ||
                                            item?.img?.title
                                        }
                                    />
                                </div>
                                <div className="item-member pt-[1vw] transition-all duration-500 flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <p className="name-member text-[1.5vw] text-[#394854] font-[700] leading-normal ">
                                            {item?.name}
                                        </p>
                                        <p className="desc-member text-[1vw] text-[#394854] font-[400] leading-normal ">
                                            {item?.role}
                                        </p>
                                    </div>
                                    <Link
                                        href={item?.linkLinkedin}
                                        target="_blank"
                                    >
                                        <Image
                                            src={linked}
                                            width={50}
                                            height={50}
                                            alt="linkedin"
                                            className="w-[1.6875vw] pt-[0.5vw] mr-[0.5vw] object-cover"
                                        />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10]">
                <button
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
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
