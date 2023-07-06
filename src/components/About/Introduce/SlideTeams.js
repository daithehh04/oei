"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import Image from "next/image";
import AOS from "aos";

export default function SlideTeams({ dataSlide }) {
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
            className="relative slide-team"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 28,
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
                {dataSlide?.map((item, index) => {
                    const urlImg = item?.img?.sourceUrl;
                    return (
                        <SwiperSlide
                            key={index}
                            className="!h-fit relative slide-item-news !w-[25%] md:!w-[60%]"
                        >
                            {({ isActive }) => (
                                <div>
                                    <div className="w-full !h-[calc(26.625*100vw/100)] img-team md:!h-[73.6vw] lg:!h-[35vw]">
                                        <Image
                                            width={344}
                                            height={426}
                                            className="object-cover w-full h-full"
                                            src={urlImg}
                                            alt={
                                                item?.img?.altText ||
                                                item?.img?.title
                                            }
                                        />
                                    </div>
                                    <div className="item-member transition-all duration-500 flex flex-col mt-[1.25vw]">
                                        <div>
                                            <p className="desc-member text-[1vw] text-[#394854] font-[400] leading-normal md:mt-[4.44vw] md:text-[2.93vw] lg:text-[1.5vw]">
                                                {item?.role}
                                            </p>
                                            <p className="name-member text-[1.5vw] text-[#394854] font-[700] leading-normal md:text-[4.352vw] lg:text-[2vw] lg:mt-[1vw]">
                                                {item?.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10]">
                <button
                    className={`border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center  lg:w-[4.67vw] lg:h-[4.67vw] md:w-[10.66vw] md:h-[10.66vw]`}
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
                    className={`border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] select-none btn-slide-member h-[3.75vw] rounded-full flex justify-center items-center lg:w-[4.67vw] lg:h-[4.67vw] md:w-[10.66vw] md:h-[10.66vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.5vw] h-[1.5vw] md:w-[2.93vw] md:h-[2.93vw] "
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
