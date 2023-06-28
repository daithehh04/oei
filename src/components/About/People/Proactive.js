"use client";
import React from "react";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

export default function Proactive({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="proactive">
            <div className="content">
                <h2
                    className="title text-46pc font-[800] leading-[1.22] w-[44.15vw] text-[#394854] mt-[9.75vw] tracking-tighter md:w-full md:text-[6.67vw] md:mt-[16vw] lg:text-[4vw]"
                    dangerouslySetInnerHTML={{
                        __html: data?.title,
                    }}
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                ></h2>
                <div className="flex md:flex-col">
                    <div className="left w-[44.75vw] md:w-[100%]">
                        <p
                            className="text-[#394854] font-[400] text-[1.125vw] leading-normal w-[36.9375vw] mt-[3.125vw] md:w-full md:text-[3.73vw] md:mt-[4.26vw] lg:text-[1.75vw]"
                            data-aos-once="true"
                            data-aos="fade-up"
                            data-aos-duration="1600"
                        >
                            {data?.left?.text1}
                        </p>
                        <p
                            className="text-[#394854] font-[400] text-[1.125vw] leading-normal  w-[36.9375vw] mt-[1.5vw] md:w-full md:text-[3.73vw] md:mt-[4.26vw] lg:text-[1.75vw]"
                            data-aos-once="true"
                            data-aos="fade-up"
                            data-aos-duration="1800"
                        >
                            {data?.left?.text2}
                        </p>
                        <Image
                            src={data?.left?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[34.0625vw] object-cover mt-[7.5vw] md:h-[71.73vw]"
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        />
                    </div>
                    <div className="right w-[36.9375vw] ml-auto md:w-[100%] md:flex md:flex-col-reverse">
                        <Image
                            src={data?.right?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[34.0625vw] object-cover md:h-[71.73vw] md:mt-[6.4vw]"
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        />
                        <ul
                            className="mt-[7.0625vw] text-[#394854] text-[1.125vw] font-[600] flex flex-col gap-[1vw] list-disc md:text-[4.26vw] md:gap-[4.26vw] lg:text-[2vw]"
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            {data?.right?.listItem?.map((item) => (
                                <li>{item?.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
