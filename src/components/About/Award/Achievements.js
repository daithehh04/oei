"use client";

import { useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(function () {
        gsap.to(".year-2016", {
            scrollTrigger: {
                trigger: ".year-2016",
                start: "-1000px 50%",
                end: "bottom 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: 0,
                        });
                        gsap.to(".num-16", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: 0,
                        });
                        gsap.to(".num-16", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        gsap.to(".year-2017", {
            scrollTrigger: {
                trigger: ".year-2017",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: -300,
                        });
                        gsap.to(".num-17", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: -600,
                        });
                        gsap.to(".num-17", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        gsap.to(".year-2018", {
            scrollTrigger: {
                trigger: ".year-2018",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: -600,
                        });
                        gsap.to(".num-18", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: -900,
                        });
                        gsap.to(".num-18", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        gsap.to(".year-2019", {
            scrollTrigger: {
                trigger: ".year-2019",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: -900,
                        });
                        gsap.to(".num-19", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: -1200,
                        });
                        gsap.to(".num-19", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        gsap.to(".year-2020", {
            scrollTrigger: {
                trigger: ".year-2020",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: -1200,
                        });
                        gsap.to(".num-20", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: -1500,
                        });
                        gsap.to(".num-20", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        gsap.to(".year-2021", {
            scrollTrigger: {
                trigger: ".year-2021",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: -1500,
                        });
                        gsap.to(".num-21", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: -1800,
                        });
                        gsap.to(".num-21", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        gsap.to(".year-2022", {
            scrollTrigger: {
                trigger: ".year-2022",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: -1800,
                        });
                        gsap.to(".num-22", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: -2100,
                        });
                        gsap.to(".num-22", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        gsap.to(".year-2023", {
            scrollTrigger: {
                trigger: ".year-2023",
                start: "top 50%",
                end: "2000px 50%",
                scrub: true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(".year-right", {
                            y: -2100,
                        });
                        gsap.to(".num-23", {
                            color: "#16a571",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: -2400,
                        });
                        gsap.to(".num-23", {
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        // ==================== Active Scroll Post ======================
        // 2016
        const divElements_2016 = document.querySelectorAll(
            'div[data-year="2016"]'
        );
        divElements_2016.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
        // 2017
        const divElements_2017 = document.querySelectorAll(
            'div[data-year="2017"]'
        );
        divElements_2017.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
        // 2018
        const divElements_2018 = document.querySelectorAll(
            'div[data-year="2018"]'
        );
        divElements_2018.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
        // 2019
        const divElements_2019 = document.querySelectorAll(
            'div[data-year="2019"]'
        );
        divElements_2019.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
        // 2020
        const divElements_2020 = document.querySelectorAll(
            'div[data-year="2020"]'
        );
        divElements_2020.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
        // 2021
        const divElements_2021 = document.querySelectorAll(
            'div[data-year="2021"]'
        );
        divElements_2021.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
        // 2022
        const divElements_2022 = document.querySelectorAll(
            'div[data-year="2022"]'
        );
        divElements_2022.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
        // 2023
        const divElements_2023 = document.querySelectorAll(
            'div[data-year="2023"]'
        );
        divElements_2023.forEach((item) => {
            gsap.to(`.${item.classList[1]}`, {
                scrollTrigger: {
                    trigger: `.${item.classList[1]}`,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "green",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                color: "#3A5469",
                                fontSize: "32px",
                                fontWeight: "800",
                                letterSpacing: "-0.05em",
                            });
                        }
                    },
                },
            });
        });
    }, delay);
}

export default function Achievements() {
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
            initializeGSAPWithDelay(1000);
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <>
            <section className="history">
                <div className="content">
                    <h3 className="title">our achievements</h3>
                    <div className="wrapper">
                        <div className="years">
                            <div className="years-content">
                                <div className="number">
                                    <div className="year-left">20</div>
                                    <div className="year-right">
                                        <p className="num num-16">16</p>
                                        <p className="num num-17">17</p>
                                        <p className="num num-18">18</p>
                                        <p className="num num-19">19</p>
                                        <p className="num num-20">20</p>
                                        <p className="num num-21">21</p>
                                        <p className="num num-22">22</p>
                                        <p className="num num-23">23</p>
                                    </div>
                                </div>
                                <div className="circle">
                                    <svg
                                        className="history-years-vertical__circle"
                                        width="480"
                                        height="480"
                                        viewBox="0 0 480 480"
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
                        <div className="history-events" ref={containerRef}>
                            <div className="year-2016">
                                <div
                                    className="history-item item-161"
                                    data-year="2016"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2016
                                        </span>
                                        <h4 className="item-161_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-162"
                                    data-year="2016"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2016
                                        </span>
                                        <h4 className="item-162_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="year-2017">
                                <div
                                    className="history-item item-171"
                                    data-year="2017"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2017
                                        </span>
                                        <h4 className="item-171_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-172"
                                    data-year="2017"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2017
                                        </span>
                                        <h4 className="item-172_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="year-2018">
                                <div
                                    className="history-item item-181"
                                    data-year="2018"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2018
                                        </span>
                                        <h4 className="item-181_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-182"
                                    data-year="2018"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2018
                                        </span>
                                        <h4 className="item-182_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-183"
                                    data-year="2018"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2018
                                        </span>
                                        <h4 className="item-183_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="year-2019">
                                <div
                                    className="history-item item-191"
                                    data-year="2019"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2019
                                        </span>
                                        <h4 className="item-191_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-192"
                                    data-year="2019"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2019
                                        </span>
                                        <h4 className="item-192_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-193"
                                    data-year="2019"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2019
                                        </span>
                                        <h4 className="item-193_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="year-2020">
                                <div
                                    className="history-item item-201"
                                    data-year="2020"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2020
                                        </span>
                                        <h4 className="item-201_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-202"
                                    data-year="2020"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2020
                                        </span>
                                        <h4 className="item-202_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="year-2021">
                                <div
                                    className="history-item item-211"
                                    data-year="2021"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2021
                                        </span>
                                        <h4 className="item-211_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="year-2022">
                                <div
                                    className="history-item item-221"
                                    data-year="2022"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2022
                                        </span>
                                        <h4 className="item-221_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-222"
                                    data-year="2022"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2022
                                        </span>
                                        <h4 className="item-222_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="year-2023">
                                <div
                                    className="history-item item-231"
                                    data-year="2023"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2023
                                        </span>
                                        <h4 className="item-231_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-232"
                                    data-year="2023"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2023
                                        </span>
                                        <h4 className="item-232_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-233"
                                    data-year="2023"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2023
                                        </span>
                                        <h4 className="item-233_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="history-item item-234"
                                    data-year="2023"
                                >
                                    <div>
                                        <span className="time">
                                            March 8, 2023
                                        </span>
                                        <h4 className="item-234_title">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                    </div>
                                    <img
                                        src="https://media.istockphoto.com/id/1337266548/photo/trophy-engraved-with-2022.webp?b=1&s=170667a&w=0&k=20&c=3iiYU52iRpi2PLrR1IYdLbPEczuG4AlLhbuFt3kT2Zg="
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
