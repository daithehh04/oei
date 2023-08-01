"use client";
import { useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../../assets/img/db-arr.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay, data) {
    setTimeout(function () {
        gsap.to(".history-events", {
            scrollTrigger: {
                trigger: ".history-events",
                start: "top bottom",
                end: "bottom bottom",
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".overlay-year", {
                            height: "10vw",
                        });
                    } else {
                        gsap.to(".overlay-year", {
                            height: 0,
                        });
                    }
                },
            },
        });
        // first year
        data?.listProject?.slice(0, 1)?.map((item, index) => {
            gsap.to(`.year-${item?.year.toString().slice(2, 4)}`, {
                scrollTrigger: {
                    trigger: `.year-${item?.year}`,
                    start: "-1000px 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(".year-right", {
                                y: 0,
                            });
                            gsap.to(
                                `.num-${item?.year.toString().slice(2, 4)}`,
                                {
                                    backgroundImage:
                                        "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    textFillColor: "transparent",
                                }
                            );
                        } else {
                            gsap.to(".year-right", {
                                y: 0,
                            });
                            gsap.to(
                                `.num-${item?.year.toString().slice(2, 4)}`,
                                {
                                    backgroundImage: "unset",
                                    WebkitBackgroundClip: "unset",
                                    WebkitTextFillColor: "unset",
                                    backgroundClip: "unset",
                                    textFillColor: "unset",
                                    color: "#ededed",
                                }
                            );
                        }
                    },
                },
            });
        });
        // years
        data?.listProject
            ?.slice(1, data?.listProject.length - 1)
            ?.map((item, index) => {
                gsap.to(`.year-${item?.year.toString().slice(2, 4)}`, {
                    scrollTrigger: {
                        trigger: `.year-${item?.year}`,
                        start: "top 50%",
                        end: "bottom 50%",
                        scrub: true,
                        onToggle: (self) => {
                            if (self.isActive) {
                                gsap.to(".year-right", {
                                    y: `${-15 * (index + 1)}vw`,
                                });
                                gsap.to(
                                    `.num-${item?.year.toString().slice(2, 4)}`,
                                    {
                                        backgroundImage:
                                            "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        textFillColor: "transparent",
                                    }
                                );
                            } else {
                                gsap.to(".year-right", {
                                    y: `${-15 * (index + 2)}vw`,
                                });
                                gsap.to(
                                    `.num-${item?.year.toString().slice(2, 4)}`,
                                    {
                                        backgroundImage: "unset",
                                        WebkitBackgroundClip: "unset",
                                        WebkitTextFillColor: "unset",
                                        backgroundClip: "unset",
                                        textFillColor: "unset",
                                        color: "#ededed",
                                    }
                                );
                            }
                        },
                    },
                });
            });

        // last year
        data?.listProject
            ?.slice(data?.listProject.length - 1, data?.listProject.length)
            ?.map((item, index) => {
                gsap.to(`.year-${item?.year.toString().slice(2, 4)}`, {
                    scrollTrigger: {
                        trigger: `.year-${item?.year}`,
                        start: "top 50%",
                        end: "2000px 50%",
                        scrub: true,
                        onToggle: (self) => {
                            if (self.isActive) {
                                gsap.to(".year-right", {
                                    y: `${
                                        -15 * (data?.listProject.length - 1)
                                    }vw`,
                                });
                                gsap.to(
                                    `.num-${item?.year.toString().slice(2, 4)}`,
                                    {
                                        backgroundImage:
                                            "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        textFillColor: "transparent",
                                    }
                                );
                            } else {
                                gsap.to(".year-right", {
                                    y: `${-15 * data?.listProject.length}vw`,
                                });
                                gsap.to(
                                    `.num-${item?.year.toString().slice(2, 4)}`,
                                    {
                                        backgroundImage: "unset",
                                        WebkitBackgroundClip: "unset",
                                        WebkitTextFillColor: "unset",
                                        backgroundClip: "unset",
                                        textFillColor: "unset",
                                        color: "#ededed",
                                    }
                                );
                            }
                        },
                    },
                });
            });
        // ==================== Active Scroll Post ======================

        data?.listProject?.map((item) => {
            gsap.to(`.item-${item?.year.toString().slice(2, 4)}`, {
                scrollTrigger: {
                    trigger: `.item-${item?.year.toString().slice(2, 4)}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(
                                `.item-${item?.year
                                    .toString()
                                    .slice(2, 4)}_title`,
                                {
                                    backgroundImage:
                                        "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    textFillColor: "transparent",
                                }
                            );
                        } else {
                            gsap.to(
                                `.item-${item?.year
                                    .toString()
                                    .slice(2, 4)}_title`,
                                {
                                    backgroundImage: "unset",
                                    WebkitBackgroundClip: "unset",
                                    WebkitTextFillColor: "unset",
                                    backgroundClip: "unset",
                                    textFillColor: "unset",
                                    color: "#3A5469",
                                }
                            );
                        }
                    },
                },
            });
        });
    }, delay);
}

export default function Achievements({ data }) {
    const containerRef = useRef(null);
    const [rate, setRate] = useState(1);
    const handleScroll = () => {
        const containerHeight = containerRef.current?.clientHeight;
        const rect = containerRef.current?.getBoundingClientRect();
        const visibleContentHeight = window.innerHeight - rect?.top;
        let rate_test = visibleContentHeight / containerHeight;
        let rate = 1 - rate_test;
        if (rate < 0) {
            rate = 0;
        }
        if (rate > 1) {
            rate = 1;
        }
        setRate(rate);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // =================== Scroll number year ========================
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            initializeGSAPWithDelay(1000, data);
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);
    // Scroll Button
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);
    const sectionRef = useRef(null);
    const sectionDRef = useRef(null);
    const prevScrollTopRef = useRef(0);

    const handleScrollBtn = () => {
        const ele = document.querySelector("#history");
        const heightEle = ele.clientHeight;
        const scrollTop = window.pageYOffset;

        if (scrollTop < prevScrollTopRef.current) {
            setShowScrollUp(true);
            setShowScrollDown(false);
        } else {
            setShowScrollUp(false);
            setShowScrollDown(true);
        }
        if (scrollTop > heightEle || scrollTop < 1000) {
            setShowScrollUp(false);
            setShowScrollDown(false);
        }

        prevScrollTopRef.current = scrollTop;
    };
    const handleScrollUp = () => {
        const section = sectionRef.current;
        section.scrollIntoView();
    };

    const handleScrollDown = () => {
        const section = sectionDRef.current;
        section.scrollIntoView();
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScrollBtn);

        return () => {
            window.removeEventListener("scroll", handleScrollBtn);
        };
    }, []);
    return (
        <>
            <section
                className="history pt-[6.25vw]"
                ref={sectionRef}
                id="history"
            >
                <div className="content">
                    <h3 className="title text-18pc font-[800] leading-normal tracking-tighter text-[#3A5469] uppercase border-b border-[#ccc] pb-[0.875vw] lg:text-[2.5vw]">
                        {data?.title}
                    </h3>
                    <div className="flex w-full wrapper">
                        <div className="years sticky h-[100vh] flex items-center mr-auto w-[36.5vw]">
                            <div className="years-content">
                                <div className="number">
                                    <div className="year-left">20</div>
                                    <div className="year-right">
                                        {data?.listProject?.map(
                                            (item, index) => (
                                                <p
                                                    className={`num num-${item?.year
                                                        .toString()
                                                        .slice(2, 4)}`}
                                                    key={index}
                                                >
                                                    {item?.year
                                                        .toString()
                                                        .slice(2, 4)}
                                                </p>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="circle">
                                    <svg
                                        className="history-years-vertical__circle"
                                        width="27.44vw"
                                        height="27.44vw"
                                        viewBox="0 0 27.44vw 27.44vw"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            rx="1"
                                            width="2"
                                            height="2"
                                            pathLength="1"
                                        ></rect>
                                        <rect
                                            className="js-sticky-history-progress"
                                            x="0.5"
                                            y="0.5"
                                            rx="1"
                                            width="2"
                                            height="2"
                                            pathLength="1"
                                            style={{
                                                strokeDashoffset: rate,
                                            }}
                                        ></rect>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            className="history-events w-[52.25vw] ml-auto"
                            ref={containerRef}
                        >
                            {data?.listProject?.map((item, index) => (
                                <div
                                    className={`year-${item?.year}`}
                                    key={index}
                                >
                                    <div
                                        className={`history-item item-${item?.year
                                            .toString()
                                            .slice(2, 4)}
                                        }`}
                                        data-year={`${item?.year}`}
                                    >
                                        <div>
                                            <span className="time">
                                                {item?.year}
                                            </span>
                                            <h4
                                                className={`item-${item?.year
                                                    .toString()
                                                    .slice(2, 4)}_title`}
                                            >
                                                {item?.title}
                                            </h4>
                                            <p className="pb-[2vw] border-b border-[#ccc]">
                                                {item?.desc}
                                            </p>
                                            <div className="info">
                                                <p className="heading">
                                                    {item?.heading}
                                                </p>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.content,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="overlay-year"></div>
                        </div>
                    </div>
                </div>
                {showScrollUp && (
                    <button
                        className="scroll-btn btn-up fixed text-[1vw] text-[#394854] right-[25%] bottom-[10px] flex flex-col items-center animate-bounce"
                        onClick={handleScrollUp}
                    >
                        <Image
                            src={img}
                            width={50}
                            height={50}
                            alt="arrow down"
                            className="rotate-180 w-[1vw] h-[1vw] "
                        />
                        Skip now
                    </button>
                )}
                {showScrollDown && (
                    <button
                        className="scroll-btn btn-down fixed text-[1vw] text-[#394854] right-[25%] bottom-[10px] flex flex-col items-center animate-bounce"
                        onClick={handleScrollDown}
                    >
                        <Image
                            src={img}
                            width={50}
                            height={50}
                            alt="arrow up"
                            className="w-[1vw] h-[1vw] "
                        />
                        Skip now
                    </button>
                )}
                <span ref={sectionDRef} id="bottom"></span>
            </section>
        </>
    );
}
