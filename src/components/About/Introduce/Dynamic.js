"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import img from "../../../assets/img/dynamic.png";
import Image from "next/image";

function Dynamic({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="dynamic mt-[8.12vw] pb-[8vw] overflow-hidden">
            <div className="content">
                <div className="flex justify-between md:flex-col md:mt-[2.13vw]">
                    <div className="title md:w-full">
                        <h3
                            className="text-[3.75vw] font-[800] leading-[1.22] text-primary md:text-[8vw] lg:text-[4.67vw]"
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            {data?.title}
                        </h3>
                    </div>
                    <p
                        className="desc text-[1.5vw] font-[400] leading-normal w-[44.125vw] text-blackBtnNews md:text-[4.26vw] md:w-full lg:text-[2vw] md:mt-[2.13vw]"
                        data-aos-once="true"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        {data?.desc}
                    </p>
                </div>
                <div className="flex w-full wrapper mt-[2.5vw] lg:flex-col md:mt-[8.3vw]">
                    <div className="left w-[38.8125vw] h-[30.1875vw] lg:w-full lg:h-[40vw] md:h-[63.2vw]">
                        <Image
                            src={data?.image?.sourceUrl}
                            width={1000}
                            height={1000}
                            alt={data?.image?.altText || data?.image?.title}
                            className="object-cover w-full h-full"
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        />
                    </div>
                    <div className="right w-[44.6875vw] ml-auto lg:w-full lg:mt-[3vw] md:mt-[6.63vw]">
                        <div className="category">
                            <ul>
                                {data?.listItem?.map((item, index) => (
                                    <li
                                        data-aos-once="true"
                                        data-aos="fade-up"
                                        data-aos-duration={`1000+${
                                            (index + 1) * 500
                                        }`}
                                        key={index}
                                        className="py-[1.5vw] md:pt-[3vw] hover:border-[#394854] hover:border-opacity-50 md:pb-[3.6vw] font-[600] text-[2vw] tracking-[-0.1rem] leading-[1.25] text-[#394854] border-b border-[#ccc]"
                                    >
                                        {item?.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dynamic;
