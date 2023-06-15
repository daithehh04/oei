"use client";

import React, { useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgPlusNum from "../../assets/img/+.png";
import imgPlus from "../../assets/img/plus.png";

import SlideTextService from "./SlideTextService";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import SlideServiceMb from "./SlideServiceMb";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        const boxes = document.querySelectorAll(".service-item");
        boxes.forEach((box) => {
            gsap.to(box, {
                x: "0",
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: true,
                    markers: true,
                },
            });
        });
    }, delay);
}
const Service = ({ data }) => {
    const [overlay, setOverlay] = useState(false);
    const parentRef = useRef(null);
    const over_lay = overlay && "over-lay";
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            initializeGSAPWithDelay(2000);
        }, parentRef);
        return () => {
            ctx.revert();
        };
    }, []);
    const handleEnterOverlay = () => {
        setTimeout(() => {
            setOverlay(true);
        }, 100);
    };

    const handleLeaveOverlay = () => {
        setTimeout(() => {
            setOverlay(false);
        }, 100);
    };

    const altText = data?.altImg || "img";
    var sectionStyle = {
        width: "100%",
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${data?.background.sourceUrl})`,
    };

    return (
        <div className="service" style={sectionStyle} ref={parentRef}>
            <div className="content">
                <div className="list-service pt-[9.4375vw] grid md:hidden">
                    <div className="service-item title">
                        <h2 className="text-[1.125vw] font-[700] uppercase tracking-[0.12em]">
                            {data?.title}
                        </h2>
                        <h3 className="text-[3.75vw] capitalize leading-[1.33] font-[800]">
                            {data?.subTitle}
                        </h3>
                    </div>

                    {data?.listService.map((item, index) => (
                        <div
                            className={`service-item item-${index + 1}`}
                            onMouseEnter={handleEnterOverlay}
                            onMouseLeave={handleLeaveOverlay}
                            key={index}
                        >
                            <Image
                                src={item?.img?.sourceUrl}
                                alt={altText}
                                width={500}
                                height={500}
                            />
                            <div className="detail absolute text-[1vw]">
                                <p>{item?.desc}</p>
                                <a href="#" className="mt-[1vw]">
                                    {item?.btnSee}
                                </a>
                            </div>
                            <div className="plus w-[2.875vw] h-[2.875vw]">
                                <Image
                                    src={imgPlus}
                                    alt="img"
                                    className="!w-[1.125vw] !h-[1.125vw]"
                                />
                            </div>
                            <p className="text text-[1vw]">{item?.text}</p>
                        </div>
                    ))}

                    {data?.item1.map((item, index) => (
                        <div className="service-item item-9" key={index}>
                            <Image
                                src={item?.img?.sourceUrl}
                                alt="img"
                                width={500}
                                height={500}
                            />
                            <p className="text text-[1vw]">{item?.text}</p>
                        </div>
                    ))}

                    {data?.item2.map((item, index) => (
                        <div className="service-item item-8" key={index}>
                            <div className="num">
                                <span>{item?.number}</span>
                                <Image
                                    src={imgPlusNum}
                                    alt="img"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text text-[1vw]">{item?.text}</p>
                        </div>
                    ))}

                    {data?.item3.map((item, index) => (
                        <a
                            href="#"
                            className="service-item item-10 text-[1.125vw] text-[#fff] uppercase"
                            key={index}
                        >
                            <span>{item?.text}</span>
                        </a>
                    ))}
                </div>
                <div className="hidden md:block">
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-[3.73vw] font-[700] text-subtileNew uppercase mt-[19.2vw]">
                                we provide service
                            </h2>
                            <h3 className="text-[9.33vw] font-[800] text-primary capitalize leading-[1.19] mt-[2.133vw]">
                                Our Service
                            </h3>
                        </div>
                        <a
                            href="#"
                            className="block text-[4.26vw] text-blackBtnNews uppercase font-[800]"
                        >
                            See All +
                        </a>
                    </div>
                    <SlideServiceMb data={data?.listService} />
                </div>
            </div>
            <SlideTextService text={data?.textBottom} />
            <div className={`${over_lay}`}></div>
        </div>
    );
};

export default Service;
