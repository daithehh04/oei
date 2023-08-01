"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { FreeMode, Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";
import plus from "../../../assets/img/Add.svg";

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
        <div className="album-project relative flex items-start border-y border-[#D9D9D9] md:border-[#D9D9D9] md:border-b-transparent md:border-opacity-50 border-opacity-50 md:flex-col-reverse">
            <div className="flex flex-col gap-y-[1.5vw] gap-x-[calc(1.5*100vw/100)] btn-action items-center justify-center w-[20%] md:w-full md:flex-row m-auto md:gap-x-[2.13vw]">
                <button
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.3vw] h-[1.3vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[2.93vw] md:h-[2.93vw]"
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary  w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.3vw] h-[1.3vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[2.93vw] md:h-[2.93vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-[80%] pl-[2.5vw] border-l md:pl-0 border-[#D9D9D9] md:py-[6.27vw] md:mb-[8.53vw] md:border-l-0 md:border-b md:border-[#D9D9D9] md:border-opacity-50 md:w-full">
                <Swiper
                    breakpoints={{
                        768: {
                            spaceBetween: 30,
                        },
                        1024: {
                            spaceBetween: 40,
                        },
                    }}
                    slidesPerView="auto"
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
                            className="!h-fit relative slide-item-project !w-[33%] lg:!w-[50%] md:!w-[70%] md:pl-[2.66vw] md:last:pr-[2.66vw]"
                        >
                            {({ isActive }) => (
                                <Link
                                    href={`/project/${encodeURIComponent(
                                        item?.slug
                                    )}`}
                                    className="w-full"
                                >
                                    <div className="w-full h-[34.8125vw] img-project md:h-[94.93vw] lg:h-[48vw] relative">
                                        <Image
                                            width={500}
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
                                        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 plus flex items-center justify-center w-[3.75vw] h-[3.75vw] md:w-[10.67vw] md:h-[10.67vw] lg:w-[6.5vw] lg:h-[6.5vw] rounded-full bg-[#00000099]">
                                            <Image
                                                src={plus}
                                                width={50}
                                                height={50}
                                                alt="img"
                                                className="!w-[2.1vw] !h-[2.1vw] lg:!w-[3vw] lg:!h-[3vw] md:!w-[4.67vw] md:h-[4.67vw] object-cover"
                                            />
                                        </div>
                                        <h3 className=" z-10 absolute bottom-0 text-left px-[1vw] pb-[1.5vw] text-[1.875vw] lg:text-[2.65vw] md:text-[4.8vw] md:px-[3vw] md:pb-[3vw] text-[#fff] font-[800] capitalize leading-[1.33]">
                                            {item?.title}
                                        </h3>
                                        <div className="absolute top-0 left-0 desc pt-[2vw] px-[1vw] md:px-[3vw] md:pt-[3vw]">
                                            <p className="text-18pc leading-normal text-[#fff] md:text-[3.73vw] lg:text-[2.25vw] md:line-clamp-4">
                                                {
                                                    item?.projectDetail?.project
                                                        ?.desc
                                                }
                                            </p>
                                            <span className="block mt-[0.75vw] text-[1.125vw] text-[#fff] uppercase font-[700] lg:text-[2.25vw] md:text-[3.73vw] md:mt-[2vw]">
                                                see more +
                                            </span>
                                        </div>
                                        <div className="absolute top-0 bottom-0 left-0 right-0 overlay-prj"></div>
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
