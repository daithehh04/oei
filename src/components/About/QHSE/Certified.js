"use client";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import SlideCertified from "./SlideCertified";
import SlideCertifiedMb from "./SlideCertidiedMb";

export default function Certified({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="pt-[7.5vw] md:pt-[12vw] certified_qhse bg-[#fff]">
            <h2
                className="text-primary text-60pc font-[800] text-center mb-[3.375vw]  md:text-[8vw] md:mb-[9vw] lg:text-[3.8vw]"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                {data?.title}
            </h2>
            <div className="md:hidden">
                <SlideCertified dataSlide={data.album} />
            </div>
            <div className="hidden md:block pb-[12vw]">
                <SlideCertifiedMb dataSlide={data.album} />
            </div>
        </div>
    );
}
