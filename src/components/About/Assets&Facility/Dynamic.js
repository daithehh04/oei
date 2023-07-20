"use client";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
export default function Dynamic({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="dynamic-assets">
            <div>
                <div className="flex items-start justify-between pt-[6.12vw] md:flex-col md:pt-[16vw] content">
                    <h2
                        className="text-60pc text-primary w-[31.0625vw] tracking-tighter leading-[1.22] font-[800] md:w-full md:text-[8vw]"
                        data-aos-once="true"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        {data?.title}
                    </h2>
                    <p
                        className="w-[36.4375vw] text-18pc text-[#394854] font-[400] leading-[1.5 md:w-full md:text-[4.26vw] md:mt-[2.13vw] lg:text-[1.65vw] lg:w-[54vw]"
                        data-aos-once="true"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        {data?.desc}
                    </p>
                </div>
                <div className="mt-[2.5vw] md:mt-[5.33vw] content">
                    <div className="flex gap-[1.87vw] h-[39.3125vw] md:h-auto md:gap-[2.13vw] md:flex-col-reverse">
                        <div className="left w-[52.43vw] h-full md:w-full">
                            <Image
                                src={data?.img1.sourceUrl}
                                width={1000}
                                height={1000}
                                alt={data?.img1.altText || data?.img1.title}
                                className="block object-cover w-full h-full md:h-[43.7vw]"
                            />
                        </div>
                        <div className="right flex flex-col gap-[1.5vw] h-full md:flex-row md:gap-[1.87vw]">
                            <Image
                                src={data?.img2.sourceUrl}
                                width={1000}
                                height={1000}
                                alt={data?.img2.altText || data?.img2.title}
                                className="block object-cover w-full h-[19.025vw] md:h-[32.5vw] md:w-[50%]"
                            />
                            <Image
                                src={data?.img3.sourceUrl}
                                width={1000}
                                height={1000}
                                alt={data?.img3.altText || data?.img3.title}
                                className="block object-cover w-full h-[19.025vw] md:h-[32.5vw] md:w-[50%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
