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
        gsap.to(".bg-value", {
            scrollTrigger: {
                trigger: ".bg-value",
                start: "top 10%",
                end: "110% 10%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".bg-value", {
                            width: "91.25%",
                            y: "6.25vw",
                        });
                        gsap.to(".text-image", {
                            opacity: 1,
                        });
                    } else {
                        gsap.to(".bg-value", {
                            width: "56.5625vw",
                            y: 0,
                        });
                        gsap.to(".text-image", {
                            opacity: 0,
                        });
                    }
                },
            },
        });
    }, delay);
}
export default function Values() {
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
    return (
        <div className="value pt-[7.5vw] pb-[20vw]">
            <div className="content">
                <div className="row flex items-center ">
                    <p className="text text-46pc font-[800] w-[53%] leading-[1.22] text-[#394854]  lg:text-[4.5vw]">
                        The <strong>CORE VALUES</strong> our Company aims for
                        are <strong>“TRUST & RELIABILITY”</strong>, which are
                        instilled and maintained by not only leaders, but all
                        employees of the Company
                    </p>
                    <a
                        href="/"
                        className="download flex items-center justify-center bg-member w-[47%] flex-col ml-[25vw]"
                    >
                        <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="img"
                            className="img-dl w-[40%] object-cover"
                        />
                        <span className="text text-[0.6875vw] font-[400] leading-[2.18] uppercase text-[#fff] text-center lg:w-[80%] lg:text-[1.5vw] lg:leading-[1.5]">
                            download profile
                        </span>
                    </a>
                </div>
                <div>
                    <Image
                        ref={parentRef}
                        src={img2}
                        width={500}
                        height={500}
                        alt="img"
                        className="bg-value object-cover w-[56.5625vw] h-[34.625vw] absolute bottom-[-20vw] right-[4.375vw]"
                    />
                    <p className="text-image text-[3.9375vw] w-[40.3125vw] absolute font-[700] text-[#fff] bottom-[-20vw] leading-[1.05] left-[8.375vw] lg:text-[3.8vw]">
                        <strong> Solutions </strong> toward customer
                        satisfaction
                    </p>
                </div>
            </div>
        </div>
    );
}
