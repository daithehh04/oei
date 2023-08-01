"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Pagination, FreeMode } from "swiper";
import Link from "next/link";
import Image from "next/image";

export default function LastNewsSlide({ news }) {
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

    let category = news?.[0]?.categories?.nodes[0]?.name;
    if (category.toString().toUpperCase() === "EVENT NEWS") {
        category = "EVENT";
    }
    if (category.toString().toUpperCase() === "BLOGS") {
        category = "BLOG";
    }

    return (
        <div className="relative w-[95.625%] ml-auto md:w-full">
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                freeMode={true}
                slidesPerView={"auto"}
                onSlideChange={handleSlideChange}
                pagination={{
                    type: "progressbar",
                }}
                modules={[Pagination, FreeMode]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative flex flex-col items-end h-fit swiper-lastnews"
            >
                {news?.map((newsItem, index) => {
                    const urlImg = newsItem?.featuredImage.node.sourceUrl;
                    const dateString = newsItem?.date;
                    const date = new Date(dateString);
                    const day = String(date.getDate()).padStart(2, "0");
                    const month = String(date.getMonth() + 1).padStart(2, "0");
                    const year = String(date.getFullYear()); //

                    const formattedDate = `${day}.${month}.${year}`;
                    return (
                        <SwiperSlide
                            key={index}
                            className="relative slide-item-lastnews md:w-[80%] md:pl-[2.66vw] md:last:pr-[2.66vw]"
                        >
                            {({ isActive }) => (
                                <Link
                                    href={`/news/news&event/${encodeURIComponent(
                                        newsItem?.slug
                                    )}`}
                                    className="relative"
                                >
                                    <div className="w-full h-[16vw] md:h-[47.2vw] lg:h-[28vw]">
                                        <Image
                                            className="object-cover w-full h-full"
                                            src={urlImg}
                                            alt="img"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className="bg-item-news py-[1.5vw] bg-white px-[1vw] md:py-[4.67vw] md:px-[2.67vw] transition-all flex flex-col gap-y-[calc(1*100vw/100)] min-h-[11.8vw]">
                                        <span className="text-[calc(1*100vw/100)] title-date-news text-dateNews inline-block leading-[169%] font-normal uppercase line-clamp lg:text-[1.5vw] md:text-[2.67vw]">
                                            {formattedDate}{" "}
                                            <span>/ {category}</span>
                                        </span>
                                        <div>
                                            <p className="text-blackLastNews text-[calc(1.25*100vw/100)] font-bold tracking-[-0.03em] leading-[130%] line-clamp-2 md:text-[4.267vw] lg:text-[2vw] md:min-h-[12vw]">
                                                {newsItem?.title}
                                            </p>
                                            <div className="flex justify-end mt-[calc(0.625*100vw/100)]">
                                                <Link
                                                    href={`/news/news&event/${encodeURIComponent(
                                                        newsItem?.slug
                                                    )}`}
                                                    className="flex items-center text-blackLastNews btn-news uppercase text-[calc(0.875*100vw/100)] font-bold leading-[257%] md:text-[3.2vw] lg:text-[1.75vw]"
                                                >
                                                    see more{" "}
                                                    <span className="inline-block leading-[100%] mb-1 ml-[calc(0.3125*100vw/100)]">
                                                        +
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {indexSlider < news?.length - 4 &&
                                        indexSlider + 3 === index && (
                                            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
                                        )}
                                </Link>
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10] md:pl-[2.66vw]">
                <button
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center lg:w-[6.67vw] lg:h-[6.67vw] md:w-[10.66vw] md:h-[10.66vw]`}
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center lg:w-[6.67vw] lg:h-[6.67vw] md:w-[10.66vw] md:h-[10.66vw]`}
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
