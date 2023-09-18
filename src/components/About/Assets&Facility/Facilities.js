"use client";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import FacilitiesSlide from "./FacilitiesSlide";

export default function Facilities({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="pt-[7.44vw] md:pt-[16vw] lg:pt-[12vw] bg-[#FAFAFA]">
            <h2
                className="text-60pc text-primary font-[800] leading-[1.33] tracking-tighter w-[58vw] mb-[2.5vw] content md:text-[8vw] md:w-full"
                data-aos-once="true"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                {data?.title}
            </h2>
            <div className="pb-[7.5vw] md:pb-[16vw] lg:pb-[10vw]">
                <FacilitiesSlide dataSlide={data?.listItem} />
            </div>
        </div>
    );
}
