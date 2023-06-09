'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const arrSlide = new Array(3).fill(0);

export default function SlideMember() {
    const [indexSlider, setIndexSlider] = useState(0);

    const swiperRef = useRef();
    // const [screenWidth, setScreenWidth] = useState(1600);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [screenWidth]);

    const handleNextSlide = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev();
    };

    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.realIndex);
    };

    return (
        <>
            <div className="flex justify-between w-full">
                <div className="relative">
                    <Swiper
                        direction="vertical"
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={1}
                        onSlideChange={handleSlideChange}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="h-[calc(14.125*100vw/100)] w-[calc(35.25*100vw/100)] select-none !m-0 pointer-events-none"
                    >
                        {arrSlide.map((item, index) => (
                            <SwiperSlide
                                onClick={() => handleSlideClick(index)}
                                key={index}
                            >
                                <span className="font-bold leading-[150%] tracking-[0.12em] uppercase text-[calc(1.125*100vw/100)]">
                                    we are
                                </span>
                                <h2 className="text-[calc(3.75*100vw/100)] capitalize -tracking-[0.05em] font-extrabold leading-[133%] mb-[calc(1*100vw/100)]">
                                    A member of
                                </h2>
                                <p className="text-[calc(1.5*100vw/100)] leading-[138%] font-normal">
                                    A business development organisation helping
                                    to make valuable connections between
                                    businesses in the global energy sector.
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex absolute gap-x-[calc(1*100vw/100)] left-0 bottom-0 select-none z-[10]">
                        <button
                            className="w-[calc(3.75*100vw/100)] btn-slide-member bg-black01 h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center"
                            onClick={handlePrevSlide}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="white"
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
                            className="w-[calc(3.75*100vw/100)] btn-slide-member bg-black01 h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center"
                            onClick={handleNextSlide}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="white"
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
                <div
                    id="list-logo-member"
                    className="flex justify-end items-center gap-x-[calc(1.375*100vw/100)]"
                >
                    {arrSlide.map((item, index) => (
                        <div
                            key={index}
                            className={`${
                                indexSlider === index
                                    ? 'w-[calc(18.75*100vw/100)] logo-active h-[calc(18.75*100vw/100)] bg-white p-[calc(2.5*100vw/100)]'
                                    : 'w-[calc(10.75*100vw/100)] logo-disable h-[calc(10.75*100vw/100)] bg-transparent opacity-[0.93] bg-bgLogoMember p-[calc(1.25*100vw/100)]'
                            } rounded-full `}
                        >
                            <img
                                className="w-full h-full object-contain"
                                src="https://demo1.okhub.tech/wp-content/uploads/2023/05/Subtract-1.png"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
