'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Pagination } from 'swiper';
import Link from 'next/link';

const arrLastNews = new Array(10).fill(0);

export default function SlideNews() {
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
        <div className="relative">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={24}
                onSlideChange={handleSlideChange}
                pagination={{
                    type: 'progressbar',
                }}
                modules={[Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="w-full h-fit flex flex-col items-end relative swiper-lastnews"
            >
                {arrLastNews.map((news, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-[calc(23.4375*100vw/100)] !h-fit relative slide-item-news"
                    >
                        {({ isActive }) => (
                            <Link href="/">
                                <div className="w-full h-[calc(16*100vw/100)]">
                                    <img
                                        className="object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </div>
                                <div className="bg-item-news py-[calc(1.5*100vw/100)] bg-white px-[calc(1*100vw/100)] transition-all duration-500 flex flex-col gap-y-[calc(1*100vw/100)]">
                                    <span className="text-[calc(1*100vw/100) title-date-news text-dateNews inline-block leading-[169%] font-normal uppercase">
                                        26/04/2022 / EVENT
                                    </span>
                                    <div>
                                        <p className="description-lastnews text-blackLastNews transition-all text-[calc(1.25*100vw/100)] duration-500 font-bold tracking-[-0.03em] leading-[130%]">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Quisque curabitur nunc
                                            diam laoreet.
                                        </p>
                                        <div className="flex justify-end mt-[calc(0.625*100vw/100)]">
                                            <button className="flex items-center text-blackLastNews btn-news uppercase text-[calc(0.875*100vw/100)] font-bold leading-[257%]">
                                                see more{' '}
                                                <span className="inline-block leading-[100%] mb-1 ml-[calc(0.3125*100vw/100)]">
                                                    +
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10]">
                <button
                    className={`${
                        indexSlider === 0
                            ? 'bg-transparent border border-solid border-greenPrimary cursor-not-allowed'
                            : 'bg-greenPrimary cursor-pointer'
                    } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`${indexSlider === 0 ? '#4CA757' : 'white'}`}
                        className="w-6 h-6"
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
                    className={`${
                        arrLastNews.length - indexSlider === 4
                            ? 'bg-transparent border border-solid border-greenPrimary cursor-not-allowed'
                            : 'bg-greenPrimary cursor-pointer'
                    } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`${
                            arrLastNews.length - indexSlider === 4
                                ? '#4CA757'
                                : 'white'
                        }`}
                        className="w-6 h-6"
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
