'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

const arrSlide = new Array(10).fill(0);

export default function SlideCustomer() {
    return (
        <Swiper
            // install Swiper modules
            loop={true}
            spaceBetween={40}
            slidesPerView="auto"
        >
            {arrSlide.map((i, el) => {
                return (
                    <SwiperSlide
                        className="!w-[calc(7.25*100vw/100)] select-none !h-[calc(4.6875*100vw/100)] text-black"
                        key={el}
                    >
                        <img
                            className="object-cover w-full h-full"
                            src="https://demo1.okhub.tech/wp-content/uploads/2023/05/image-1721.png"
                            alt=""
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
