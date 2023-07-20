"use client";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import AlbumSlide from "./AlbumSlide";

export default function Album({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="pt-[5vw] capitalize md:pt-[8.53vw]">
            <div className="flex items-start justify-between content mb-[3.75vw] md:flex-col md:mb-[6.4vw]">
                <h2
                    className="text-60pc font-[800] text-primary leading-[1.33] tracking-tighter md:text-[8vw] md:w-full"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    {data?.title}
                </h2>
                {/* <h2
                    className="text-60pc hidden md:block font-[800] leading-[1.33] tracking-tighter md:text-[8vw] md:w-full"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    {data?.title}
                </h2> */}
                <p
                    className="text-24pc w-[37.9375vw] font-[400] leading-[1.38] text-[#394854] hidden md:block md:text-[4.267vw] md:mt-[2.13vw] md:w-full lg:text-[1.65vw]"
                    data-aos-once="true"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    {data?.desc}
                </p>
            </div>
            <AlbumSlide dataSlide={data?.listProject} />
        </div>
    );
}
