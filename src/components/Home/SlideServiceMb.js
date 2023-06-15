"use client";

import imgPlus from "../../assets/img/plus.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Image from "next/image";

const arrOtherProject = new Array(7).fill(0);

export default function SlideServiceMb({ data }) {
    const swiperRef = useRef();

    return (
        <div className="relative slide-service">
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="list-service"
            >
                {data?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative item-serviceMb pt-[8vw] !h-[83.46vw]"
                    >
                        {({ isActive }) => (
                            <div className="h-full">
                                <a href="/" className="w-full h-full">
                                    <div
                                        className={`service-item h-full 
                                        }`}
                                    >
                                        <Image
                                            src={item?.img?.sourceUrl}
                                            alt="img"
                                            width={500}
                                            height={500}
                                        />
                                        <div className="detail absolute !text-[3.8vw] pl-[2vw]">
                                            <p>{item?.desc}</p>
                                            <a
                                                href="#"
                                                className="mt-[1vw] !text-[4vw]"
                                            >
                                                {item?.btnSee}
                                            </a>
                                        </div>
                                        <div className="plus !w-[12.43vw] !h-[12.43vw]">
                                            <Image
                                                src={imgPlus}
                                                width={20}
                                                height={20}
                                                alt="img"
                                                className="!w-[5.04vw] !h-[5.04vw]"
                                            />
                                        </div>
                                        <p className="text !text-[4.26vw]">
                                            {item?.text}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
