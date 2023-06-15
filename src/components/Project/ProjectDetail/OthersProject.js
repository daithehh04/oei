"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Link from "next/link";

const arrOtherProject = new Array(10).fill(0);

export default function OthersProject() {
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
                {arrOtherProject.map((otherProject, index) => (
                    <SwiperSlide
                        key={index}
                        className=" relative slide-item-otherProject"
                    >
                        {({ isActive }) => (
                            <div>
                                <a
                                    href="/"
                                    className="w-full h-[calc(32.5*100vw/100)]"
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </a>
                                <div className="info p-[1.5vw]">
                                    <p className="text-[1.125vw] font-[400] leading-[1.44] text-[#394854] uppercase">
                                        Project
                                    </p>
                                    <a href="/">
                                        <h3 className="pt-[0.625vw] text-[2vw] font-[700] leading-[1.25] tracking-tighter title-prj">
                                            75mw an thuan windfarm project
                                        </h3>
                                    </a>
                                    <div className="flex items-center mt-[0.5vw]">
                                        <div className="owner flex flex-col">
                                            <span className="text-[0.875vw] font-[400]">
                                                Project owner:
                                            </span>
                                            <span className="text-[1.25vw] font-[600] leading-[1.3]">
                                                PECC2
                                            </span>
                                        </div>
                                        <div className="type flex flex-col ml-[5.125vw]">
                                            <span className="text-[0.875vw] font-[400]">
                                                Cable Installation Type:
                                            </span>
                                            <span className="text-[1.25vw] font-[600] leading-[1.3]">
                                                Subsea Cables
                                            </span>
                                        </div>
                                        <a
                                            href="/"
                                            className="ml-auto font-[700] text-[0.875vw] leading-[2.57] "
                                        >
                                            SEE MORE <span>+</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
