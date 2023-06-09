"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import img1 from "../../../assets/img/drilled.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
function initializeGSAPWithDelay(delay) {
    setTimeout(function () {
        const info2 = document.querySelector(".info-2");
        const info3 = document.querySelector(".info-3");
        const info4 = document.querySelector(".info-4");

        const equ1 = document.querySelector(".equ-1");
        const equ2 = document.querySelector(".equ-2");
        const equ3 = document.querySelector(".equ-3");
        const equ4 = document.querySelector(".equ-4");

        const img1 = document.querySelector(".imgs .img-1");
        const img2 = document.querySelector(".imgs .img-2");
        const img3 = document.querySelector(".imgs .img-3");
        const img4 = document.querySelector(".imgs .img-4");

        // =============================================

        gsap.to(".drilled", {
            scrollTrigger: {
                trigger: ".drilled",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".drilled", {
                            position: "sticky",
                            top: 0,
                            height: "100vh",
                        });
                    } else {
                        gsap.to(".drilled", {
                            position: "static",
                            height: "auto",
                        });
                    }
                },
            },
        });
        gsap.to(".info-1", {
            scrollTrigger: {
                trigger: ".info-1",
                start: "none 10%",
                end: "bottom 10%",
                scrub: true,
                onEnter: () => {
                    info2.classList.add("active");
                    equ2.classList.add("active");
                    img2.classList.add("active");
                    equ1.classList.remove("active");
                    img1.classList.remove("active");
                },
                onLeave: () => {
                    info2.classList.remove("active");
                    equ2.classList.remove("active");
                    img2.classList.remove("active");
                },
                onEnterBack: () => {
                    info2.classList.add("active");
                    equ2.classList.add("active");
                    img2.classList.add("active");
                    equ1.classList.remove("active");
                    img1.classList.remove("active");
                },
                onLeaveBack: () => {
                    info2.classList.remove("active");
                    equ2.classList.remove("active");
                    img2.classList.remove("active");
                    equ1.classList.add("active");
                    img1.classList.add("active");
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".info-num", {
                            y: -198,
                        });
                    } else {
                        gsap.to(".info-num", {
                            y: 0,
                        });
                    }
                },
            },
        });
        gsap.to(".info-2", {
            scrollTrigger: {
                trigger: ".info-2",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
                onEnter: () => {
                    info3.classList.add("active");
                    equ3.classList.add("active");
                    img3.classList.add("active");
                },
                onLeave: () => {
                    info3.classList.remove("active");
                    equ3.classList.remove("active");
                    img3.classList.remove("active");
                },
                onEnterBack: () => {
                    info3.classList.add("active");
                    equ3.classList.add("active");
                    img3.classList.add("active");
                },
                onLeaveBack: () => {
                    info3.classList.remove("active");
                    equ3.classList.remove("active");
                    img3.classList.remove("active");
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".info-num", {
                            y: -396,
                        });
                    } else {
                        gsap.to(".info-num", {
                            y: -198,
                        });
                    }
                },
            },
        });
        gsap.to(".info-3", {
            scrollTrigger: {
                trigger: ".info-3",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
                onEnter: () => {
                    info4.classList.add("active");
                    equ4.classList.add("active");
                    img4.classList.add("active");
                },
                onLeave: () => {
                    info4.classList.remove("active");
                    equ4.classList.remove("active");
                    img4.classList.remove("active");
                },
                onEnterBack: () => {
                    info4.classList.add("active");
                    equ4.classList.add("active");
                    img4.classList.add("active");
                },
                onLeaveBack: () => {
                    info4.classList.remove("active");
                    equ4.classList.remove("active");
                    img4.classList.remove("active");
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".info-num", {
                            y: -594,
                        });
                    } else {
                        gsap.to(".info-num", {
                            y: -396,
                        });
                    }
                },
            },
        });
        gsap.to(".info-4", {
            scrollTrigger: {
                trigger: ".info-4",
                start: "top 10%",
                end: "bottom 10%",
                scrub: true,
                onEnter: () => {
                    info4.classList.add("active");
                    equ4.classList.add("active");
                    img4.classList.add("active");
                },

                onEnterBack: () => {
                    info4.classList.add("active");
                    equ4.classList.add("active");
                    img4.classList.add("active");
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".info-num", {
                            y: -594,
                        });
                    } else {
                        gsap.to(".info-num", {
                            y: -594,
                        });
                    }
                },
            },
        });
    }, delay);
}
export default function Drilled() {
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
        <>
            <section className="drilled" ref={containerRef}>
                <div className="content">
                    <div className="wrapper">
                        <div className="imgs">
                            <Image
                                src={img1}
                                width={400}
                                height={400}
                                alt="img"
                                className="img-1 active"
                            />
                            <img
                                className="img-2"
                                src="https://naftagaz.com/upload/resize_cache/iblock/9f7/612_718_2/bk8hd7jggoo4duwcrfmw3rhp7t1lwf1s.jpg"
                                alt=""
                            />
                            <img
                                className="img-3"
                                src="	https://naftagaz.com/upload/resize_cache/iblock/bb0/612_718_2/3wh83i060bitemlzk7j1qo3o91me6845.jpg"
                                alt=""
                            />
                            <img
                                className="img-4"
                                src="https://naftagaz.com/upload/resize_cache/iblock/18c/612_718_2/7stfebpvvors6zsh86h6zz6gf80adbrs.jpg"
                                alt=""
                            />
                        </div>
                        <div className="info">
                            <div className="left">
                                <ul className="info-num">
                                    <li className="info-1 active">
                                        <span className="equ-1 active">
                                            Wells Drilled 1
                                        </span>
                                        <div className="num">
                                            <span>16</span>
                                            <span>+</span>
                                        </div>
                                    </li>
                                    <li className="info-2">
                                        <span className="equ-2">
                                            Wells Drilled 2
                                        </span>
                                        <div className="num">
                                            <span>1000</span>
                                            <span>+</span>
                                        </div>
                                    </li>
                                    <li className="info-3">
                                        <span className="equ-3">
                                            Wells Drilled 3
                                        </span>
                                        <div className="num">
                                            <span>250</span>
                                            <span>+</span>
                                        </div>
                                    </li>
                                    <li className="info-4">
                                        <span className="equ-4">
                                            Wells Drilled 4
                                        </span>
                                        <div className="num">
                                            <span>10</span>
                                            <span>+</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
