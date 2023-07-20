"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination, FreeMode } from "swiper";
import linked from "../../../assets/img/linkedin.svg";
import Link from "next/link";

import Image from "next/image";

export default function ListMemberMb({ data }) {
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
        <div className="relative slide-team mt-[6.59vw]">
            <Swiper
                slidesPerView="auto"
                onSlideChange={handleSlideChange}
                pagination={{
                    type: "progressbar",
                }}
                freeMode={true}
                modules={[Pagination, FreeMode]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative flex flex-col items-end w-full h-fit swiper-lastnews"
            >
                {data?.listPeople?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!h-fit relative slide-item-news !w-[75%] lg:!w-[50%] pl-[2.66vw] last:pr-[2.66vw]"
                    >
                        {({ isActive }) => (
                            <div>
                                <div className="w-full img-team md:h-[84vw] lg:h-[55vw]">
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
                                <div className="item-member bg-white transition-all duration-500 flex items-start justify-between mt-[1.25vw]">
                                    <div className="flex flex-col">
                                        <p className="name-member text-[#394854] font-[700] leading-normal text-[4.352vw] md:text-[4.352vw] lg:text-[2.75vw] lg:mt-[1vw]">
                                            {item?.name}
                                        </p>
                                        <p className="desc-member text-[#394854] font-[400] leading-normal md:text-[2.93vw] lg:text-[2vw]">
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
                                            className="md:w-[6.4vw] lg:w-[4vw] pt-[1.5vw] mr-[2.5vw] object-cover"
                                        />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10] pl-[2.66vw]">
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
