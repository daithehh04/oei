import React from "react";
import SlideVision from "./SlideVision";
import Image from "next/image";

import img from "../../../assets/img/bg-grid.png";

export default function Vision({ data }) {
    return (
        <div className="vision relative pt-[6.25vw] md:pt-[19.2vw] ">
            <div className="flex items-center justify-between row content md:flex-col md:items-start">
                <h3 className="iso text-[3.75vw] font-[800] capitalize leading-[1.33] text-[#fff] md:text-[8vw] lg:text-[6vw]">
                    {data?.title}
                </h3>
                <p className="desc text-[1.5vw] font-[400] leading-[1.38] text-[#fff] w-[44.4375vw] md:text-[4.26vw] md:w-[100%] md:mt-[4.53vw] lg:text-[2vw]">
                    {data?.desc}
                </p>
            </div>
            <SlideVision dataSlide={data?.years} />
        </div>
    );
}
