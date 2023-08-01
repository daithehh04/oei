"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../../../assets/img/bg-grid-2.svg";
import { useRef } from "react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(function () {
        gsap.to(".list-quality", {
            y: "-90%",
            scrollTrigger: {
                trigger: ".list-quality",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
            },
        });

        const boxes = document.querySelectorAll(".quality-item");
        boxes.forEach((box) => {
            gsap.to(box, {
                scrollTrigger: {
                    trigger: box,
                    start: "top 60%",
                    end: "bottom 50%",
                    onEnter: () => {
                        box.classList.add("active");
                    },
                    onLeave: () => {
                        box.classList.remove("active");
                    },
                    onEnterBack: () => {
                        box.classList.add("active");
                    },
                    onLeaveBack: () => {
                        box.classList.remove("active");
                    },
                },
            });
        });

        gsap.to(".quality", {
            scrollTrigger: {
                trigger: ".quality",
                pin: ".quality",
                start: "top top",
                end: "70% top",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(`.title`, {
                            opacity: 0,
                        });
                    } else {
                        gsap.to(`.title`, {
                            opacity: 1,
                        });
                    }
                },
            },
        });
    }, delay);
}
export default function Quality({ data }) {
    const containerRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            initializeGSAPWithDelay(1000);
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);
    return (
        <div
            className="relative h-[100vh] z-50 quality overflow-hidden bg-member"
            ref={containerRef}
        >
            <div className="content">
                <span className="title text-[8.5vw] font-[900] uppercase absolute right-[32.8vw] md:right-0 md:hidden">
                    OEi
                </span>
                <div className="container-quality pt-[9.3125vw] flex items-start lg:flex-col">
                    <div className="left text-60pc text-[#fff] font-[800] leading-[1.33] tracking-tighter w-[40.375vw] lg:w-[80%] lg:text-[4.8vw] md:text-[8vw] md:pb-[8vw] lg:pb-[5vw]">
                        {data?.title}
                    </div>
                    <div className="overflow-hidden">
                        <div className="right list-quality w-[44.8125vw] ml-auto relative lg:w-full">
                            {data?.listItem?.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start pb-[2vw] border-b border-[#fff] border-opacity-50 quality-item pt-[1vw] md:py-[6.4vw] lg:pb-[4vw]`}
                                >
                                    <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter xl:text-[3vw] lg:text-[3.5vw] md:text-[6.67vw]">
                                        0{index + 1}
                                    </span>
                                    <div className="flex flex-col items-start ml-[5.75vw]">
                                        <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter xl:text-[3vw] lg:text-[3.5vw] md:text-[6.67vw]">
                                            {item?.title}
                                        </span>
                                        <p className="text-[1.125vw] font-[400] text-[#fff] leading-normal mt-[1.5vw] xl:text-[1.75vw] lg:text-[2.25vw] md:mt-[5vw] lg:mt-[3vw] md:text-[3.73vw]">
                                            {item?.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt="img"
                    className="absolute bottom-0 object-cover w-full h-full -z-1"
                />
            </div>
        </div>
    );
}
