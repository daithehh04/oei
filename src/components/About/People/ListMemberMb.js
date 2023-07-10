"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination, FreeMode } from "swiper";
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
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
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
                        className="!h-fit relative slide-item-news !w-[75%] md:pl-[2.66vw] md:last:pr-[2.66vw]"
                    >
                        {({ isActive }) => (
                            <Link href="/">
                                <div className="w-full img-team md:h-[84vw] lg:h-[35vw]">
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
                                <div className="item-member bg-white transition-all duration-500 flex flex-col mt-[1.25vw]">
                                    <div>
                                        <p className="desc-member text-[#394854] font-[400] leading-normal md:text-[2.93vw] lg:text-[1.5vw]">
                                            {item?.role}
                                        </p>
                                        <p className="name-member text-[#394854] font-[700] leading-normal text-[4.352vw] md:text-[4.352vw] lg:text-[2vw] lg:mt-[1vw]">
                                            {item?.name}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10] pl-[2.66vw]">
                <button
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] h-[3.75vw] select-none btn-slide-member rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[3.75vw] h-[3.75vw] select-none btn-slide-member rounded-full flex justify-center items-center md:w-[10.66vw] md:h-[10.66vw]`}
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
