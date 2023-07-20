"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination, FreeMode } from "swiper";
import img from "../../../assets/img/assets1.png";
import Image from "next/image";

export default function FacilitiesSlide({ dataSlide }) {
    const arrFacilities = new Array(10).fill(0);
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
        <div className="relative slide-team mt-[2.5vw] w-[91.25%] ml-auto mr-auto md:w-full">
            <Swiper
                slidesPerView="auto"
                onSlideChange={handleSlideChange}
                pagination={{
                    type: "progressbar",
                }}
                breakpoints={{
                    768: {
                        spaceBetween: 30,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                }}
                freeMode={true}
                spaceBetween={0}
                modules={[Pagination, FreeMode]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative flex flex-col items-end w-full h-fit swiper-lastnews"
            >
                {dataSlide?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!h-fit relative slide-item-news lg:!w-[60%] md:!w-[80%] md:pl-[2.66vw] md:last:pr-[2.66vw]"
                    >
                        {({ isActive }) => (
                            <div>
                                <div className="w-full img-team h-[20.5625vw] md:h-[58.93vw] lg:h-[40vw]">
                                    <Image
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-full"
                                        src={item?.img?.sourceUrl}
                                        alt={
                                            item?.img?.altText ||
                                            item?.img?.title
                                        }
                                    />
                                </div>
                                <div className="bg-white px-[1.31vw] min-h-[17.81vw] pt-[1.25vw] line-clamp-4 pb-[1.75vw] md:min-h-[46.5vw] md:pt-[2.67vw] md:px-[3.47vw] md:pb-[4.27vw]">
                                    <h3 className="title text-[#394854] font-[700] leading-[1.37] text-[1.6875vw] md:text-[4.8vw] lg:text-[2.75vw] lg:mt-[1vw] line-clamp-3">
                                        {item?.title}
                                    </h3>
                                    <p className="desc text-[#394854] font-[400] leading-normal mt-[0.5vw] md:mt-[2.13vw] line-clamp-4 text-[1.125vw] md:text-[3.73vw] lg:text-[2vw] md:line-clamp-3">
                                        {item?.desc}
                                    </p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10] md:pl-[2.6vw]">
                <button
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] h-[3.75vw] select-none btn-slide-member rounded-full flex justify-center items-center lg:w-[6.67vw] lg:h-[6.67vw] md:w-[10.66vw] md:h-[10.66vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.5vw] h-[1.5vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[2.93vw] md:h-[2.93vw]"
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] h-[3.75vw] select-none btn-slide-member rounded-full flex justify-center items-center lg:w-[6.67vw] lg:h-[6.67vw] md:w-[10.66vw] md:h-[10.66vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.5vw] h-[1.5vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[2.93vw] md:h-[2.93vw]"
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
