import React from "react";
import IndustrySuggets from "./IndustrySuggets";
import Image from "next/image";
import img from "../../../assets/img/industry-news.png";

export default function MainNews() {
    return (
        <div>
            <div className="flex gap-x-[1.875vw] justify-between">
                <div className="w-[66%]">
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="img"
                        className="w-full h-[30.4375vw] object-cover"
                    />
                </div>
                <div className="w-[34%]">
                    <span className="text-[#376A66] text-[1.125vw] uppercase">
                        26.04.2022 / company news
                    </span>
                    <h3 className="text-[#394854] font-[800] text-[2vw] leading-[1.25] tracking-tighter mt-[0.5vw]">
                        OEI Awarded the Contract for Providing Submarine Cable
                    </h3>
                    <p className="text-[#394854] leading-[1.44] mt-[1.75vw] text-[1.125vw]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit.
                    </p>
                    <a
                        href="#"
                        className="text-[#394854] block mt-[2.5vw] font-[700] text-[0.8125vw] uppercase leading-[2.57]"
                    >
                        See More +
                    </a>
                </div>
            </div>
            <div className="mt-[4.625vw] grid grid-cols-3 gap-[1.875vw]">
                <IndustrySuggets />
                <IndustrySuggets />
                <IndustrySuggets />
            </div>
        </div>
    );
}
