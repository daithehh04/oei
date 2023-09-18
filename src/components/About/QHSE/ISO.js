"use client";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import img from "../../../assets/img/bg-common.png";

export default function ISO({ data }) {
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
        <div className="iso relative z-10 pb-[9.75vw] overflow-hidden">
            <div className="content">
                <p
                    className="title text-46pc leading-[1.22] text-[#394854] font-[800] tracking-tighter w-[44.625vw] pt-[10.6875vw] lg:text-[3.8vw] lg:w-[80%] md:text-[8vw] md:w-full"
                    dangerouslySetInnerHTML={{
                        __html: data?.title,
                    }}
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                ></p>
                <p
                    className="text-[#394854] font-[400] text-[1.5vw] leading-[1.58] w-[37.3125vw] ml-auto lg:text-[2.5vw] lg:w-[70%] lg:mt-[2vw] md:mt-[16vw] md:text-[4.26vw] md:w-[78.4%]"
                    data-aos-once="true"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    {data?.text}
                </p>
            </div>
            <Image
                src={img}
                width={1500}
                height={1000}
                alt="img"
                className="absolute inset-0 z-[-1] object-cover w-full md:hidden"
            />
        </div>
    );
}
