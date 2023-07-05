"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from "react";
import Image from "next/image";
import img from "../../../assets/img/dowload.png";
import img2 from "../../../assets/img/bg-value.png";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        gsap.to(".bg-value__mb", {
            width: "100%",
            scrollTrigger: {
                trigger: ".bg-value__mb",
                start: "-50% 10%",
                end: "top 10%",
                scrub: true,
                once: true,
            },
        });
        gsap.to(".text-image_mb", {
            y: "-12.25vw",
            opacity: 1,
            scrollTrigger: {
                trigger: ".bg-value__mb",
                start: "-50% 10%",
                end: "top 10%",
                scrub: true,
                once: true,
            },
        });
    }, delay);
}
export default function Values({ data }) {
    const parentRef = useRef(null);
    useLayoutEffect(() => {
        if (!parentRef.current) {
            return;
        }
        let ctx = gsap.context(() => {
            initializeGSAPWithDelay(2000);
        }, parentRef);
        return () => {
            ctx.revert();
        };
    }, []);
    function fileDownloader(href) {
        const link = document.createElement("a");
        link.href = href;
        link.download = "file";
        link.click();
    }
    return (
        <div className="value pt-[7.5vw] pb-[20vw]">
            <div className="content">
                <div className="flex items-center row md:flex-col md:items-end">
                    <p
                        className="text text-46pc font-[800] w-[53%] leading-[1.22] text-[#394854] md:text-[6.66vw] md:w-[100%] lg:text-[4.5vw]"
                        dangerouslySetInnerHTML={{
                            __html: data?.title,
                        }}
                    ></p>
                    <span
                        onClick={() => fileDownloader(data?.profile)}
                        className="download cursor-pointer flex items-center justify-center bg-member w-[47%] flex-col ml-[25vw]"
                    >
                        <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="img"
                            className="img-dl w-[40%] object-cover"
                        />
                        <span className="text text-[0.6875vw] font-[400] leading-[2.18] uppercase text-[#fff] text-center md:text-[2.66vw] md:w-[80%] md:leading-[1.4] lg:w-[80%] lg:text-[1.5vw] lg:leading-[1.5]">
                            download profile
                        </span>
                    </span>
                </div>
                <div>
                    <Image
                        ref={parentRef}
                        src={data?.img?.sourceUrl}
                        width={500}
                        height={500}
                        alt="img"
                        className="bg-value__mb object-cover w-[56.5625vw] h-[34.625vw] absolute bottom-[-20vw] right-[4.375vw] md:h-[50.66vw] md:right-0 md:w-[85.6vw] md:static md:ml-auto md:mt-[6.4vw]"
                    />
                    <p
                        className="text-image_mb opacity-0 text-[3.9375vw] w-[40.3125vw] absolute font-[700] text-[#fff] bottom-[-22vw] leading-[1.05] left-[8.375vw] md:bottom-[16vw] md:text-[6.4vw] md:w-[64vw] md:left-[5vw] lg:text-[3.6vw]"
                        dangerouslySetInnerHTML={{
                            __html: data?.text,
                        }}
                    ></p>
                </div>
            </div>
        </div>
    );
}
