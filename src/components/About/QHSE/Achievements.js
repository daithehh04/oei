"use client";
import { useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
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
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: 0,
                        });
                        gsap.to(".num-16", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
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
                            y: "-18.75vw",
                        });
                        gsap.to(".num-17", {
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: "-37.5vw",
                        });
                        gsap.to(".num-17", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
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
                            y: "-37.5vw",
                        });
                        gsap.to(".num-18", {
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: "-56.25vw",
                        });
                        gsap.to(".num-18", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
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
                            y: "-56.25vw",
                        });
                        gsap.to(".num-19", {
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: "-75vw",
                        });
                        gsap.to(".num-19", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
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
                            y: "-75vw",
                        });
                        gsap.to(".num-20", {
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: "-93.75vw",
                        });
                        gsap.to(".num-20", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
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
                            y: "-93.75vw",
                        });
                        gsap.to(".num-21", {
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: "-112.5vw",
                        });
                        gsap.to(".num-21", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
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
                            y: "-112.5vw",
                        });
                        gsap.to(".num-22", {
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: "-131.25vw",
                        });
                        gsap.to(".num-22", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
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
                            y: "-131.25vw",
                        });
                        gsap.to(".num-23", {
                            backgroundImage:
                                "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                        });
                    } else {
                        gsap.to(".year-right", {
                            y: "-150vw",
                        });
                        gsap.to(".num-23", {
                            backgroundImage: "unset",
                            WebkitBackgroundClip: "unset",
                            WebkitTextFillColor: "unset",
                            backgroundClip: "unset",
                            textFillColor: "unset",
                            color: "#ededed",
                        });
                    }
                },
            },
        });
        // ==================== Active Scroll Post ======================
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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
                            });
                        }
                    },
                },
            });
        });

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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
                            });
                        }
                    },
                },
            });
        });
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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
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
                                backgroundImage:
                                    "linear-gradient(180deg, #4ca757 0%, #16a571 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            });
                        } else {
                            gsap.to(`.${item.classList[1]}_title`, {
                                backgroundImage: "unset",
                                WebkitBackgroundClip: "unset",
                                WebkitTextFillColor: "unset",
                                backgroundClip: "unset",
                                textFillColor: "unset",
                                color: "#3A5469",
                            });
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
            initializeGSAPWithDelay(1000);
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <>
            <section className="history pt-[6.25vw]">
                <div className="content">
                    <h3 className="title text-18pc font-[800] leading-normal tracking-tighter text-[#3A5469] uppercase border-b border-[#ccc] pb-[0.875vw] lg:text-[2.5vw]">
                        {data?.title}
                    </h3>
                    <div className="flex w-full wrapper">
                        <div className="years sticky h-[100vh] flex items-center mr-auto w-[41.0625vw]">
                            <div className="years-content">
                                <div className="number">
                                    <div className="year-left">20</div>
                                    <div className="year-right">
                                        {data?.listProject?.map(
                                            (item, index) => (
                                                <p
                                                    className={`num num-${
                                                        index + 16
                                                    }`}
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
                                        width="31.25vw"
                                        height="31.25vw"
                                        viewBox="0 0 31.25vw 31.25vw"
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
                            className="history-events w-[41.8125vw] ml-auto"
                            ref={containerRef}
                        >
                            {data?.listProject?.map((item, index) => (
                                <div className={`year-${index + 2016}`}>
                                    <div
                                        className={`history-item item-${
                                            index + 16
                                        }`}
                                        data-year={`${index + 2016}`}
                                    >
                                        <div>
                                            <span className="time">
                                                {item?.year}
                                            </span>
                                            <h4
                                                className={`item-${
                                                    index + 16
                                                }_title`}
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

                            {/* <div className="year-2016">
                                <div
                                    className="history-item item-16"
                                    data-year="2016"
                                >
                                    <div>
                                        <span className="time">2016</span>
                                        <h4 className="item-16_title">
                                            OIE Construction Projects - HSEQ
                                            Yearly Snapshot 2021
                                        </h4>
                                        <p className="pb-[2vw] border-b border-[#ccc]">
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Hic,
                                            inventore dignissimos perferendis
                                            pariatur minus.
                                        </p>
                                        <div className="info">
                                            <p>
                                                Welcome to OIE's brief annual
                                                summary of our Health, Safety,
                                                Environment, and Quality (HSEQ)
                                                performance for the year 2023.
                                            </p>
                                            <p>
                                                <strong>Health:</strong>{" "}
                                                Incident Rate: 3 incidents per
                                                100 full-time employees Sick
                                                Days: 1.8% of total working days
                                            </p>
                                            <p>
                                                <strong>Safety:</strong> Total
                                                Recordable Incident Rate: 4.5
                                                per 100 full-time employees.
                                                Safety Compliance Rate: 97%
                                            </p>
                                            <p>
                                                <strong>Quality:</strong>{" "}
                                                Customer Satisfaction: 92%
                                                satisfaction rate Project
                                                Delivery: 90% on-time and
                                                on-budget Highlights
                                            </p>
                                            <p>
                                                Obtained ISO 14001 Environmental
                                                Management
                                                Certification.Launched new
                                                safety training
                                                program.Completed the XYZ
                                                project ahead of schedule and
                                                under budget.As we move into
                                                2024, we stay committed to
                                                excellence in health, safety,
                                                environmental sustainability,
                                                and quality in our construction
                                                projects. Thank you for your
                                                support.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="overlay-year"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
