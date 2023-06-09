import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const arrItems = new Array(8).fill(0);

export default function SlideTextService() {
    return (
        <div className="mt-[calc(7.5*100vw/100)] mb-[calc(3.625*100vw/100)]">
            <Swiper
                loop={true}
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={8000}
                modules={[Autoplay]}
                id="swiper-service"
                className="w-full mySwiper"
            >
                {arrItems.map((item, index) => (
                    <SwiperSlide
                        className="!w-fit service-item-text text-[calc(6.25*100vw/100)] leading-[150%] font-black uppercase"
                        key={index}
                    >
                        building for green energy
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
