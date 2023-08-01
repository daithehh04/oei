"use client";

import React from "react";
import Image from "next/image";

export default function Values({ data }) {
    return (
        <div className="value pt-[7.5vw] pb-[20vw] relative md:pb-[36vw]">
            <div className="content">
                <div className="flex items-center row md:flex-col md:items-end">
                    <p
                        className="text text-46pc font-[800] w-[53%] leading-[1.22] text-[#394854] md:text-[6.66vw] md:w-[100%] lg:text-[4.5vw]"
                        dangerouslySetInnerHTML={{
                            __html: data?.title,
                        }}
                    ></p>
                </div>
                <div>
                    <Image
                        src={data?.img?.sourceUrl}
                        width={500}
                        height={500}
                        alt="img"
                        className="bg-value__mb object-cover w-[56.5625vw] h-[34.625vw] absolute bottom-[-20vw] right-[4.375vw] md:h-[50.66vw] md:bottom-[-25vw] md:left-[2.66vw] md:w-[94.66%]"
                    />
                    <p
                        className="text-image_mb text-[3.9375vw] w-[40.3125vw] absolute font-[700] text-[#fff] bottom-[-22vw] leading-[1.05] left-[8.375vw] md:bottom-[-20vw] md:text-[6.4vw] md:w-[64vw] md:left-[5vw] lg:text-[3.6vw]"
                        dangerouslySetInnerHTML={{
                            __html: data?.text,
                        }}
                    ></p>
                </div>
            </div>
        </div>
    );
}
