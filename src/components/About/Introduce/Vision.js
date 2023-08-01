"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import SlideVision from "./SlideVision";

export default function Vision({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        AOS.init({
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            },
        });
    }, []);
    return (
        <div className="vision relative pt-[5.06vw] md:pt-[19.2vw] ">
            <div className="flex justify-between row content md:flex-col md:items-start">
                <h3
                    className="iso text-[3.75vw] font-[800] capitalize leading-[1.33] text-[#fff] md:text-[8vw] lg:text-[6vw]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {data?.title}
                </h3>
                <p
                    className="desc text-[1.5vw] font-[400] leading-[1.38] text-[#fff] w-[55.125vw] md:text-[4.26vw] md:w-[100%] md:mt-[4.53vw] lg:text-[2vw]"
                    data-aos-once="true"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    {data?.desc}
                </p>
            </div>
            <SlideVision dataSlide={data?.years} />
        </div>
    );
}
