"use client";

import imgPlus from "../../assets/img/Add.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SlideServiceMb({ data }) {
    const swiperRef = useRef();

    return (
        <div className="relative slide-service">
            <Swiper
                breakpoints={{
                    768: {
                        spaceBetween: 24,
                        slidesPerView: 2,
                    },
                }}
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
                        className="relative item-serviceMb pt-[8vw] lg:h-[56vw] lg:w-[50%] md:w-[75%] md:h-[83.46vw]"
                    >
                        {({ isActive }) => (
                            <div className="h-full">
                                <Link
                                    href={`/service/${encodeURIComponent(
                                        item?.slug
                                    )}`}
                                    className="block w-full h-full"
                                >
                                    <div
                                        className={`service-item h-full 
                                        }`}
                                    >
                                        <Image
                                            src={
                                                item?.featuredImage?.node
                                                    ?.sourceUrl
                                            }
                                            alt="img"
                                            width={500}
                                            height={500}
                                        />
                                        <div className="detail absolute lg:!text-[2vw] md:!text-[3.8vw] md:px-[10px] leading-150">
                                            <p
                                                className="line-clamp-4"
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.excerpt,
                                                }}
                                            ></p>
                                            <div className="mt-[2vw] block lg:!text-[2.25vw] md:!text-[4vw] uppercase font-[700]">
                                                See more +
                                            </div>
                                        </div>
                                        <div className="plus lg:w-[7vw] lg:h-[7vw] md:!w-[12.43vw] md:!h-[12.43vw]">
                                            <Image
                                                src={imgPlus}
                                                width={20}
                                                height={20}
                                                alt="img"
                                                className="object-contain lg:!w-[3.04vw] lg:!h-[3.04vw] md:!w-[5.04vw] md:!h-[5.04vw]"
                                            />
                                        </div>
                                        <p className="text lg:text-[2.25vw] md:!text-[4.26vw] md: p-0">
                                            {item?.title}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
