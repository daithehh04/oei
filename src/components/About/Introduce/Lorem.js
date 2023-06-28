"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

export default function Lorem({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="lorem-introduce pt-[6.25vw] pb-[4.5625vw] overflow-hidden">
            <div className="content">
                <h2
                    className="w-[50.1875vw] text-46pc font-[800] leading-[1.22] text-primary tracking-tighter lg:text-[4.5vw] lg:w-[80%] md:text-[6.66vw] md:w-[100%]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    {data?.title}
                </h2>
                <div className="flex justify-between w-[95%] ml-auto md:flex-col-reverse md:w-[100%]">
                    <div className="left w-[39.375vw] mt-[7.25vw] md:w-[80.53vw] md:mr-auto md:mt-[8.53vw]">
                        <Image
                            src={data?.left?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt="img"
                            className="object-cover w-full"
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        />
                        <p
                            className="text mt-[3.75vw]"
                            dangerouslySetInnerHTML={{
                                __html: data?.left?.text1,
                            }}
                            data-aos-once="true"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        ></p>
                        <p
                            className="text"
                            dangerouslySetInnerHTML={{
                                __html: data?.left?.text2,
                            }}
                            data-aos-once="true"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        ></p>
                        <p
                            className="text mt-[2vw] md:mt-[4.75vw]"
                            dangerouslySetInnerHTML={{
                                __html: data?.left?.text3,
                            }}
                            data-aos-once="true"
                            data-aos="fade-up"
                            data-aos-duration="1400"
                        ></p>
                    </div>
                    <div className="right w-[36.9375vw] mt-[3.75vw] md:flex md:flex-col-reverse md:w-[80.53vw] md:mt-[6.4vw] md:ml-auto">
                        <p
                            className="text mb-[5.875vw] md:mt-[4.26vw]"
                            dangerouslySetInnerHTML={{
                                __html: data?.right?.text,
                            }}
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        ></p>
                        <Image
                            src={data?.right?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt="img"
                            className="object-cover w-full"
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
