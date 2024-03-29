"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";

import Image from "next/image";

const arrTeams = new Array(10).fill(0);

export default function AlbumSlide({ imgsAlbum }) {
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center  lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.3vw] h-[1.3vw] md:w-[2.93vw] md:h-[2.93vw]"
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
                    className={`bg-transparent border border-solid border-greenPrimary hover:bg-greenPrimary  w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center  lg:w-[6vw] lg:h-[6vw] md:w-[10.67vw] md:h-[10.67vw]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`#4CA757`}
                        className="arrow-icon w-[1.3vw] h-[1.3vw] md:w-[2.93vw] md:h-[2.93vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-[80%] pl-[4.5vw] mr-[4vw] border-l border-[#ccc] md:pl-0 md:py-[6.27vw] md:mr-0 md:mb-[8.53vw] md:border-l-0 md:border-b md:border-[#ccc] md:w-full">
                <Swiper
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
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
                    {imgsAlbum.map((item, index) => {
                        const urlImg = item?.sourceUrl;
                        return (
                            <SwiperSlide
                                key={index}
                                className="!h-fit relative slide-item-certified md:w-[70%]"
                            >
                                {({ isActive }) => (
                                    <Link href="/" className="w-full">
                                        <div className="w-full h-[27.62vw] img-certified md:h-[57.06vw] lg:h-[40vw]">
                                            <Image
                                                width={500}
                                                height={500}
                                                className="object-cover w-full h-full"
                                                src={urlImg}
                                                alt={
                                                    item?.altText || item?.title
                                                }
                                            />
                                        </div>
                                    </Link>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
