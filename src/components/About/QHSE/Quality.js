"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import img from "../../../assets/img/bg-grid.png";
import { useRef } from "react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(function () {
        const element = document.querySelector(".quality-item_1");
        const element_2 = document.querySelector(".quality-item_2");
        const element_3 = document.querySelector(".quality-item_3");
        var positionInfo = element.getBoundingClientRect();
        var positionInfo_2 = element_2.getBoundingClientRect();
        var positionInfo_3 = element_3.getBoundingClientRect();
        var height = positionInfo.height + 44;
        var height_2 = positionInfo_2.height + 44;
        var height_3 = positionInfo_3.height + 44;
        console.log(height);

        gsap.to(".quality", {
            scrollTrigger: {
                trigger: ".quality",
                start: "top top",
                end: "bottom top",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".quality", {
                            position: "sticky",
                            top: 0,
                            height: "100vh",
                        });
                    } else {
                        gsap.to(".quality", {
                            position: "relative",
                        });
                    }
                },
            },
        });

        gsap.to(".quality-item_1", {
            scrollTrigger: {
                trigger: ".quality-item_1",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".list-quality", {
                            y: `-${height}`,
                        });
                    } else {
                        gsap.to(".list-quality", {
                            y: "0",
                        });
                    }
                },
            },
        });
        gsap.to(".quality-item_2", {
            scrollTrigger: {
                trigger: ".quality-item_2",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".list-quality", {
                            y: `-${2 * height}`,
                        });
                    } else {
                        gsap.to(".list-quality", {
                            y: `-${height}`,
                        });
                    }
                },
            },
        });
        gsap.to(".quality-item_3", {
            scrollTrigger: {
                trigger: ".quality-item_3",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".list-quality", {
                            y: `-${3 * height}`,
                        });
                    } else {
                        gsap.to(".list-quality", {
                            y: `-${3 * height}`,
                        });
                    }
                },
            },
        });
    }, delay);
}
export default function Quality() {
    const containerRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            initializeGSAPWithDelay(2000);
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);
    return (
        <div
            className="quality bg-member h-[100vh] relative z-50"
            ref={containerRef}
        >
            <div className="content">
                <span className="title text-[12.5vw] font-[900] uppercase absolute right-0 md:hidden">
                    OEi GROUP
                </span>
                <div className="pt-[9.3125vw] flex items-start">
                    <div className="left text-60pc text-[#fff] font-[800] leading-[1.33] tracking-tighter w-[40.375vw]">
                        Quality, Health & Safety and Environment of OEI
                    </div>
                    <div className="overflow-hidden">
                        <div className="right list-quality w-[44.8125vw] ml-auto">
                            <div className="flex items-start pb-[2vw] border-b border-[#ddd] quality-item_1 pt-[1vw]">
                                <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter">
                                    01
                                </span>
                                <div className="flex flex-col items-start ml-[5.75vw]">
                                    <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter">
                                        Quality
                                    </span>
                                    <p className="text-[1.125vw] font-[400] text-[#fff] leading-normal mt-[1.5vw]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam suscipit posuere
                                        arcu in convallis. Nam nec velit a elit
                                        rutrum gravida. Nam blandit leo orci,
                                        vel sagittis est vestibulum eu. Vivamus
                                        luctus varius diam, nec euismod lacus
                                        porttitor eget. Sed dictum dui eu arcu
                                        finibus maximus vel sed justo.
                                        Vestibulum ut cursus odio. Integer eget
                                        lectus quis dolor pretium molestie.
                                        Aliquam nec sapien eleifend, pharetra
                                        nunc euismod, pretium odio. Donec orci
                                        ante, pulvinar eget euismod sed,
                                        accumsan id turpis. Cras eget dictum
                                        justo, nec vehicula turpis. Aliquam
                                        pretium lacinia aliquet.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start pb-[2vw] border-b border-[#ddd] quality-item_2 pt-[3.125vw]">
                                <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter">
                                    02
                                </span>
                                <div className="flex flex-col items-start ml-[5.75vw]">
                                    <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter">
                                        Health & Safety
                                    </span>
                                    <p className="text-[1.125vw] font-[400] text-[#fff] leading-normal mt-[1.5vw]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam suscipit posuere
                                        arcu in convallis. Nam nec velit a elit
                                        rutrum gravida. Nam blandit leo orci,
                                        vel sagittis est vestibulum eu. Vivamus
                                        luctus varius diam, nec euismod lacus
                                        porttitor eget. Sed dictum dui eu arcu
                                        finibus maximus vel sed justo.
                                        Vestibulum ut cursus odio. Integer eget
                                        lectus quis dolor pretium molestie.
                                        Aliquam nec sapien eleifend, pharetra
                                        nunc euismod, pretium odio. Donec orci
                                        ante, pulvinar eget euismod sed,
                                        accumsan id turpis. Cras eget dictum
                                        justo, nec vehicula turpis. Aliquam
                                        pretium lacinia aliquet.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start pb-[2vw] border-b border-[#ddd] quality-item_3 pt-[3.125vw]">
                                <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter">
                                    03
                                </span>
                                <div className="flex flex-col items-start ml-[5.75vw]">
                                    <span className="text-[2vw] text-[#fff] font-[800] tracking-tighter">
                                        Environment
                                    </span>
                                    <p className="text-[1.125vw] font-[400] text-[#fff] leading-normal mt-[1.5vw]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam suscipit posuere
                                        arcu in convallis. Nam nec velit a elit
                                        rutrum gravida. Nam blandit leo orci,
                                        vel sagittis est vestibulum eu. Vivamus
                                        luctus varius diam, nec euismod lacus
                                        porttitor eget. Sed dictum dui eu arcu
                                        finibus maximus vel sed justo.
                                        Vestibulum ut cursus odio. Integer eget
                                        lectus quis dolor pretium molestie.
                                        Aliquam nec sapien eleifend, pharetra
                                        nunc euismod, pretium odio. Donec orci
                                        ante, pulvinar eget euismod sed,
                                        accumsan id turpis. Cras eget dictum
                                        justo, nec vehicula turpis. Aliquam
                                        pretium lacinia aliquet.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt="img"
                    className="w-full h-full object-cover absolute bottom-0 -z-1"
                />
            </div>
        </div>
    );
}
