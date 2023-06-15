"use client";

import { useLayoutEffect, useRef } from "react";
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
                end: "bottom 10%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".bg-value", {
                            width: "100%",
                            y: 100,
                            right: 0,
                        });
                        gsap.to(".text-image", {
                            opacity: 1,
                        });
                    } else {
                        gsap.to(".bg-value", {
                            width: "57.8125%",
                            y: 0,
                            right: 70,
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
        <div className="value">
            <div className="content">
                <div className="row">
                    <p className="text">
                        The <strong>CORE VALUES</strong> our Company aims for
                        are <strong>“TRUST & RELIABILITY”</strong>, which are
                        instilled and maintained by not only leaders, but all
                        employees of the Company
                    </p>
                    <a href="/" className="download">
                        <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="img"
                            className="img-dl"
                        />
                        <span className="text">download profile</span>
                    </a>
                </div>
                <div>
                    <Image
                        ref={parentRef}
                        src={img2}
                        width={500}
                        height={500}
                        alt="img"
                        className="bg-value"
                    />
                    <p className="text-image">
                        <strong> Solutions </strong> toward customer
                        satisfaction
                    </p>
                </div>
            </div>
        </div>
    );
}
