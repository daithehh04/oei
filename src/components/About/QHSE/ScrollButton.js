import React, { useState, useEffect, useRef } from "react";

const ScrollButton = () => {
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);
    const sectionRef = useRef(null);
    const prevScrollTopRef = useRef(0);

    const handleScroll = () => {
        const section = sectionRef.current;
        const scrollTop = section.scrollTop;

        if (scrollTop > prevScrollTopRef.current) {
            setShowScrollUp(true);
            setShowScrollDown(false);
        } else {
            setShowScrollUp(false);
            setShowScrollDown(true);
        }

        prevScrollTopRef.current = scrollTop;
    };

    const handleScrollUp = () => {
        const section = sectionRef.current;
        section.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScrollDown = () => {
        const section = sectionRef.current;
        section.scrollTo({
            top: section.scrollHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const section = sectionRef.current;
        section.addEventListener("scroll", handleScroll);

        return () => {
            section.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {showScrollUp && (
                <button className="scrollBtn scrollUp" onClick={handleScrollUp}>
                    Scroll Up
                </button>
            )}
            {showScrollDown && (
                <button
                    className="scrollBtn scrollDown"
                    onClick={handleScrollDown}
                >
                    Scroll Down
                </button>
            )}
            <section
                className="history pt-[6.25vw]"
                id="history"
                ref={sectionRef}
            >
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
                                <div
                                    className={`year-${index + 2016}`}
                                    key={index}
                                >
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
                            <div className="overlay-year"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScrollButton;
