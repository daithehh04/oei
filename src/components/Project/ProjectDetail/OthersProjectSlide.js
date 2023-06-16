"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OthersProjectSlide({ projectAll }) {
    const swiperRef = useRef();

    return (
        <div className="relative project-item">
            <Swiper
                slidesPerView={2}
                spaceBetween={78}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="w-full flex flex-col items-end relative swiper-otherProject"
            >
                {projectAll?.map((otherProject, index) => (
                    <SwiperSlide
                        key={index}
                        className=" relative slide-item-otherProject"
                    >
                        {({ isActive }) => {
                            const urlImg =
                                otherProject?.featuredImage?.node?.sourceUrl;
                            return (
                                <div>
                                    <Link
                                        href={`project/${encodeURIComponent(
                                            otherProject?.slug
                                        )}`}
                                        className="w-full h-[calc(32.5*100vw/100)]"
                                    >
                                        <Image
                                            className="object-cover w-full h-full"
                                            src={urlImg}
                                            alt="img"
                                            width={500}
                                            height={500}
                                        />
                                    </Link>
                                    <div className="info p-[1.5vw] bg-[#fff]">
                                        <p className="text-[1.125vw] font-[400] leading-[1.44] text-[#394854] uppercase">
                                            {otherProject?.project?.name}
                                        </p>
                                        <Link
                                            href={`project/${encodeURIComponent(
                                                otherProject?.slug
                                            )}`}
                                        >
                                            <h3 className="pt-[0.625vw] text-[2vw] font-[700] leading-[1.25] tracking-tighter title-prj">
                                                {otherProject?.title}
                                            </h3>
                                        </Link>
                                        <div className="flex  gap-[5.125vw] items-center mt-[0.5vw]">
                                            {otherProject?.project?.repeatInfo?.map(
                                                (item, index) => (
                                                    <div
                                                        className="owner flex flex-col"
                                                        key={index}
                                                    >
                                                        <span className="text-[0.875vw] font-[400]">
                                                            {item?.title}
                                                        </span>
                                                        <span className="text-[1.25vw] font-[600] leading-[1.3]">
                                                            {item?.content}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                            <Link
                                                href={`project/${encodeURIComponent(
                                                    otherProject?.slug
                                                )}`}
                                                className="ml-auto font-[700] text-[0.875vw] leading-[2.57] "
                                            >
                                                SEE MORE <span>+</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
