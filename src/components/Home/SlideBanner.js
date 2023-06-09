'use client';

import { renderContentActive } from '@/utils/globals';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
    FreeMode,
    Navigation,
    Thumbs,
    Pagination,
    EffectFade,
    Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SlideBanner({ slideHeader, contentActive }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [indexSlider, setIndexSlider] = useState(0);
    useEffect(() => {
        if (indexSlider === 0) {
            const progress = document.querySelector(
                '#swiper1-banner .swiper-pagination .swiper-pagination-progressbar-fill'
            );
            progress.classList.add('active0');
            progress.classList.remove('active1');
            progress.classList.remove('active2');
        }
        if (indexSlider === 1) {
            const progress = document.querySelector(
                '#swiper1-banner .swiper-pagination .swiper-pagination-progressbar-fill'
            );
            progress.classList.add('active1');
            progress.classList.remove('active0');
            progress.classList.remove('active2');
        }
        if (indexSlider === 2) {
            const progress = document.querySelector(
                '#swiper1-banner .swiper-pagination .swiper-pagination-progressbar-fill'
            );
            progress.classList.add('active2');
            progress.classList.remove('active1');
            progress.classList.remove('active0');
        }
    }, [indexSlider]);

    const handleChangeSlide = (index) => {
        setIndexSlider(index);
    };

    return (
        <>
            <div className="w-full h-[calc(100vh-6*100vw/100)] relative">
                <Swiper
                    loop={true}
                    effect={'fade'}
                    pagination={{
                        type: 'progressbar',
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[EffectFade, FreeMode, Thumbs, Pagination]}
                    id="swiper1-banner"
                    className="mySwiper2 absolute top-0 left-0 w-full h-[calc(100vh-6*100vw/100)] -z-[1]"
                >
                    {slideHeader.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="w-full h-[calc(100vh-6*100vw/100)] relative"
                        >
                            <Image
                                className="w-full h-full img-swiper1"
                                src={item.itemImage.sourceUrl}
                                width={1600}
                                height={762}
                                alt={item.altText}
                            />
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: item.itemTitle,
                                }}
                                className="absolute leading-[111%] bottom-[calc(18.625*100vw/100)] title-slide-banner left-[calc(4.375*100vw/100)] font-extrabold tracking-[-0.02em] text-[calc(7.9375*100vw/100)]"
                            />
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item.itemDescription,
                                }}
                                className="absolute text-[calc(1.125*100vw/100)] bottom-[calc(9.375*100vw/100)] font-normal leading-[156%] text-whiteBanner w-[calc(28*100vw/100)] h-[calc(7*100vw/100)] right-[calc(6.25*100vw/100)]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    id="swiper2-banner"
                    className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20"
                >
                    {slideHeader.map((item, index) => (
                        <SwiperSlide
                            onClick={() => handleChangeSlide(index)}
                            key={index}
                            className={`swiper2-item${index} border-solid flex justify-center items-center border-white border-[3px] hover:border-[6px] !w-[calc(6.5*100vw/100)] !h-[calc(6.5*100vw/100)] rounded-full overflow-hidden cursor-pointer`}
                        >
                            <Image
                                className="object-cover w-full h-full img-swiper1"
                                src={item.itemImage.sourceUrl}
                                width={160}
                                height={160}
                                alt={item.altText || 'slide-banner'}
                            />
                            {renderContentActive(
                                contentActive,
                                index,
                                indexSlider
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
