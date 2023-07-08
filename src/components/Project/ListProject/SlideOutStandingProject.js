"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import AOS from "aos";

export default function SlideOutstandingProject({ project }) {
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
            className="relative slide-prj text-[#394854]"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <Swiper
                breakpoints={{
                    768: {
                        spaceBetween: 16,
                    },
                }}
                centeredSlides={true}
                loop="true"
                slidesPerView="auto"
                spaceBetween={10}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative flex flex-col items-end w-full swiper-prj"
            >
                {project?.map((item, index) => (
                    <SwiperSlide key={index} className="relative">
                        {({ isActive }) => {
                            const active = isActive ? "active" : "";
                            return (
                                <div className={`${active} prj relative`}>
                                    <Link
                                        href={`project/${encodeURIComponent(
                                            item?.slug
                                        )}`}
                                        className=" block w-full h-[37.125vw] relative img-outstanding md:h-[56.75vw]"
                                    >
                                        <Image
                                            width={344}
                                            height={426}
                                            className="object-cover w-full h-full"
                                            src={
                                                item?.featuredImage?.node
                                                    ?.sourceUrl
                                            }
                                            alt={
                                                item?.featuredImage.node
                                                    ?.altText ||
                                                item?.featuredImage.node?.title
                                            }
                                        />
                                        <div className="absolute top-0 bottom-0 left-0 right-0 overlay-img"></div>
                                    </Link>
                                    <div className="info-block flex items-center justify-between p-[1.5vw] md:px-[2.67vw] md:pt-[4.27vw] md:pb-[5vw] bg-[#fff]">
                                        <div className="info">
                                            <p className="text-[1.125vw] font-[400] leading-[1.44] text-[#394854] uppercase lg:text-[1.85vw] md:text-[3.2vw]">
                                                {
                                                    item?.projectDetail?.project
                                                        ?.name
                                                }
                                            </p>

                                            <h3 className="pt-[0.625vw] text-[2vw] font-[700] leading-[1.25] tracking-tighter title-prj capitalize lg:text-[2.5vw] md:text-[5.33vw]">
                                                {item?.title}
                                            </h3>
                                            <p className="hidden md:block md:!line-clamp-2 md:text-[3.73vw] text-[#394854] md:mt-[1.6vw] md:mb-[4.27vw]">
                                                {
                                                    item?.projectDetail?.project
                                                        ?.desc
                                                }
                                            </p>
                                            <div className="flex items-center mt-[1vw] gap-[2.5vw] lg:flex-wrap md:flex-wrap lg:gap-x-0 md:gap-x-0 md:gap-y-[2.67vw]">
                                                {item?.projectDetail?.project?.repeatInfo?.map(
                                                    (item, index) => (
                                                        <div className="flex flex-col owner lg:w-[50%] md:w-[50%]">
                                                            <span className="text-[0.875vw] font-[400] md:text-[3.2vw] md:leading-[1.75] lg:text-[1.75vw] ">
                                                                {item?.title}
                                                            </span>
                                                            <span className="text-[1.25vw] font-[600] leading-[1.3] md:text-[3.73vw] lg:text-[2vw]">
                                                                {item?.content}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-[0.5vw] items-end text-primary w-[25%] border-t pt-[0.5vw] border-greenPrimary md:hidden">
                                            <span className="text-[4vw] leading-[1] lg:text-[6vw] font-[700]">
                                                0{index + 1}
                                            </span>
                                            <span className="text-[1.5vw] font-[400] lg:text-[3vw]">
                                                /0{project?.length}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-[1.5vw] lg:ml-[2vw] md:hidden">
                                            <button
                                                className={`select-none flex justify-center items-center`}
                                                onClick={handlePrevSlide}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke={"#D9D9D9"}
                                                    className="w-[1.5vw] h-[1.5vw] lg:w-[2.93vw] lg:h-[2.93vw]"
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
                                                className={`flex justify-center items-center`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke={"#D9D9D9"}
                                                    className="w-[1.5vw] h-[1.5vw] lg:w-[2.93vw] lg:h-[2.93vw]"
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
                                    <div className="hidden num-slide__mb md:block mt-[13.04vw]">
                                        <div className="flex gap-[4.27vw] items-center justify-center">
                                            <button
                                                className={`select-none flex justify-center items-center`}
                                                onClick={handlePrevSlide}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke={"#D9D9D9"}
                                                    className="w-[10.6vw] h-[10.6vw]"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                                    />
                                                </svg>
                                            </button>

                                            <div className="flex gap-[0.5vw] items-end text-primary">
                                                <span className="text-[16vw] leading-[1] font-[700] uppercase">
                                                    0{index + 1}
                                                </span>
                                                <span className="text-[5.867vw] font-[400]">
                                                    /0{project?.length}
                                                </span>
                                            </div>

                                            <button
                                                onClick={handleNextSlide}
                                                className={`flex justify-center items-center`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke={"#D9D9D9"}
                                                    className="w-[10.6vw] h-[10.6vw]"
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
                                    <div className="absolute top-0 left-0 desc md:hidden">
                                        <p className="text-18pc leading-normal text-[#fff] pt-[2.5vw] pl-[1.5vw] w-[37vw] lg:text-[2vw] lg:w-[80%]">
                                            {item?.projectDetail?.project?.desc}
                                        </p>
                                        <a
                                            href="#"
                                            className="text-[#fff] lg:text-[1.75vw] uppercase block text-18pc font-[700] pl-[1.5vw] leading-[1.8] mt-[0.75vw]"
                                        >
                                            see more +
                                        </a>
                                    </div>
                                </div>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
