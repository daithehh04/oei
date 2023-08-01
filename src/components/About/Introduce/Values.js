"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from "react";
import Image from "next/image";
import img from "../../../assets/img/dowload.png";
import AOS from "aos";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        gsap.to(".bg-value", {
            // width: "91.25%",
            scrollTrigger: {
                trigger: ".bg-value",
                start: "-50% 10%",
                end: "top 10%",
                scrub: true,
                once: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".bg-value", {
                            width: "91.25%",
                        });
                    } else {
                        gsap.to(".bg-value", {
                            width: initial,
                        });
                    }
                },
            },
        });
        gsap.to(".text-image", {
            y: "-10.25vw",
            opacity: 1,
            scrollTrigger: {
                trigger: ".bg-value",
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
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="value pt-[7.5vw] pb-[20vw]">
            <div className="content">
                <div className="flex items-center row ">
                    <p
                        className="text text-46pc font-[800] w-[53%] lg:w-full leading-[1.22] text-[#394854] lg:text-[4.5vw]"
                        dangerouslySetInnerHTML={{
                            __html: data?.title,
                        }}
                        data-aos-once="true"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    ></p>
                </div>
                <div className="overflow-hidden">
                    <Image
                        ref={parentRef}
                        src={data?.img?.sourceUrl}
                        width={500}
                        height={500}
                        alt={data?.img?.altText || data?.img?.title}
                        className="bg-value object-cover w-[56.5625vw] h-[34.625vw] absolute bottom-[-20vw] right-[4.375vw]"
                    />
                    <p
                        className="text-image text-[3.9375vw] w-[40.3125vw] absolute font-[700] text-[#fff] bottom-[-24vw] leading-[1.05] left-[8.375vw] lg:text-[3.8vw]"
                        dangerouslySetInnerHTML={{
                            __html: data?.text,
                        }}
                    ></p>
                </div>
            </div>
        </div>
    );
}
