"use client";
import Image from "next/image";
import Navbar from "../../Common/Navbar";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Solution from "./Solution";

gsap.registerPlugin(ScrollTrigger);
function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        gsap.to(".bg-insure", {
            x: "0",
            scrollTrigger: {
                trigger: ".bg-insure",
                start: "5% top",
                end: "3000 top",
                scrub: true,
                markers: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".img-banner", {
                            scaleX: 0.7,
                            scaleY: 0.6,
                        });
                        gsap.to(".title-banner", {
                            opacity: 0,
                        });
                        gsap.to(".solution", {
                            y: 0,
                        });
                    } else {
                        gsap.to(".img-banner", {
                            scale: 1,
                        });
                        gsap.to(".title-banner", {
                            opacity: 1,
                        });
                        gsap.to(".solution", {
                            y: "100%",
                        });
                    }
                },
            },
        });
    }, delay);
}
const src =
    "https://demo1.okhub.tech/wp-content/uploads/2023/06/Rectangle-4752.jpg";

export default function Header({ header }) {
    const parentRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            initializeGSAPWithDelay(2000);
        }, parentRef);
        return () => {
            ctx.revert();
        };
    }, []);
    const { background, breadcrumb, title } = header;
    return (
        <header
            className="w-[100vw] h-[100vh] relative bg-insure overflow-hidden"
            ref={parentRef}
        >
            <Image
                className="object-cover img-banner"
                src={background?.sourceUrl}
                alt={background?.altText || background?.title}
                fill
            />
            <Navbar />
            <div className="absolute bottom-[8.875vw] left-[4.375vw] title-banner">
                <div className="flex gap-x-[0.5vw] text-[white]">
                    <span className="uppercase text-[1.125vw] leading-[150%] tracking-[0.12em] opacity-50">
                        Home /
                    </span>
                    <span className="uppercase text-[1.125vw] leading-[150%] tracking-[0.12em]">
                        ABOUT US
                    </span>
                </div>
                <h1 className="capitalize tracking-[-0.05em] font-extrabold text-[3.75vw] leading-[133%] text-[white]">
                    Introduction
                </h1>
            </div>
            <div className="absolute z-30 left-1/2 bottom-[2vw] -translate-x-1/2">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L12 12L23 1" stroke="white" strokeWidth="2" />
                    <path
                        d="M1 12L12 23L23 12"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <Solution />
        </header>
    );
}
