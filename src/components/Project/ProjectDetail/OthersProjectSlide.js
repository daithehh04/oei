"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OthersProjectSlide({ projectAll }) {
    console.log(projectAll);
    const swiperRef = useRef();
    return (
        <div className="relative project-item">
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 78,
                    },
                }}
                slidesPerView="auto"
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="relative flex flex-col items-end w-full swiper-otherProject"
            >
                {projectAll?.map((otherProject, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative slide-item-otherProject md:w-[80%]"
                    >
                        {({ isActive }) => {
                            const urlImg =
                                otherProject?.featuredImage?.node?.sourceUrl;
                            return (
                                <div className="slide-item__otherProject">
                                    <Link
                                        href={`project/${encodeURIComponent(
                                            otherProject?.slug
                                        )}`}
                                        className="w-full h-[calc(32.5*100vw/100)] md:h-[57.86vw] "
                                    >
                                        <Image
                                            className="object-cover w-full h-full"
                                            src={urlImg}
                                            alt="img"
                                            width={500}
                                            height={500}
                                        />
                                    </Link>
                                    <div className="p-[1.5vw] bg-[#fff] md:p-[4.27vw]">
                                        <p className="text-[1.125vw] font-[400] leading-[1.44] text-[#394854] uppercase md:text-[2.93vw] lg:text-[1.65vw] md:font-[600]">
                                            {otherProject?.project?.name}
                                        </p>
                                        <Link
                                            href={`project/${encodeURIComponent(
                                                otherProject?.slug
                                            )}`}
                                        >
                                            <h3 className="pt-[0.625vw] text-[2vw] font-[700] leading-[1.25] tracking-tighter title-other_prj lg:text-[3vw] md:text-[5.96vw]">
                                                {otherProject?.title}
                                            </h3>
                                        </Link>
                                        <div className="flex items-center mt-[1vw] gap-[3.06vw] lg:flex-wrap lg:gap-x-0 lg:gap-y-[1.75vw] md:hidden">
                                            {otherProject?.project?.repeatInfo?.map(
                                                (item, index) => (
                                                    <div
                                                        className="owner flex flex-col text-[#394854] lg:w-[50%]"
                                                        key={index}
                                                    >
                                                        <span className="text-[0.875vw] font-[400] lg:text-[1.65vw] md:text-[2.66vw]">
                                                            {item?.title}
                                                        </span>
                                                        <span className="text-[1.25vw] font-[600] leading-[1.3] lg:text-[1.85vw] md:text-[3.73vw] md:leading-[1.86]">
                                                            {item?.content}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <div className="items-center mt-[1vw] gap-[3.06vw] hidden md:flex">
                                            {otherProject?.project?.repeatInfo
                                                ?.slice(0, 2)
                                                .map((item, index) => (
                                                    <div
                                                        className="owner flex flex-col text-[#394854]"
                                                        key={index}
                                                    >
                                                        <span className="text-[0.875vw] font-[400] md:text-[2.66vw]">
                                                            {item?.title}
                                                        </span>
                                                        <span className="text-[1.25vw] font-[600] leading-[1.3] md:text-[3.73vw] md:leading-[1.86]">
                                                            {item?.content}
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                        <Link
                                            href={`project/${encodeURIComponent(
                                                otherProject?.slug
                                            )}`}
                                            className="uppercase text-[#394854] text-[3.73vw] font-[700] mt-[4vw] hidden md:flex md:items-end md:justify-end"
                                        >
                                            See More +
                                        </Link>
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
