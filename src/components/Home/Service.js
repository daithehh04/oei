"use client";

import React, { useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgPlusNum from "../../assets/img/+.png";
import imgPlus from "../../assets/img/Add.svg";
import bgCommon from "../../assets/img/bg-common.svg";

import SlideTextService from "./SlideTextService";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import SlideServiceMb from "./SlideServiceMb";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        const boxes = document.querySelectorAll(".service-item");
        boxes.forEach((box) => {
            gsap.to(box, {
                // x: "0",
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom",
                    end: "top 70%",
                    scrub: true,
                    once: true,
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(box, {
                                x: 0,
                            });
                        }
                    },
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

    return (
        <div className="relative service" ref={parentRef}>
            <div>
                <div className="list-service pt-[9.4375vw] content grid lg:hidden">
                    <div className="service-item title ">
                        <h2 className="text-[1.125vw] font-[700] uppercase tracking-[0.12em]">
                            {data?.title}
                        </h2>
                        <h3 className="text-[3.75vw] capitalize leading-[1.33] font-[800]">
                            {data?.subTitle}
                        </h3>
                    </div>

                    {data?.outstandingService?.map((item, index) => (
                        <Link
                            href={`/service/${encodeURIComponent(item?.slug)}`}
                            className={`service-item relative item-${
                                index + 1
                            }`}
                            onMouseEnter={handleEnterOverlay}
                            onMouseLeave={handleLeaveOverlay}
                            key={index}
                        >
                            <Image
                                src={item?.featuredImage?.node?.sourceUrl}
                                alt={
                                    item?.featuredImage?.node?.altText ||
                                    item?.featuredImage?.node?.title
                                }
                                width={500}
                                height={500}
                            />
                            <div className="detail absolute z-10 text-[1vw] ">
                                <p
                                    className="line-clamp-3"
                                    dangerouslySetInnerHTML={{
                                        __html: item?.excerpt,
                                    }}
                                ></p>
                                <div className="btn-see block mt-[1vw] uppercase font-[700]">
                                    See more +
                                </div>
                            </div>
                            <div className="plus w-[2.875vw] h-[2.875vw]">
                                <Image
                                    src={imgPlus}
                                    alt="img"
                                    className="!w-[1.125vw] !h-[1.125vw]"
                                />
                            </div>
                            <p className="text text-[1vw] z-10">
                                {item?.title}
                            </p>
                            <div className="absolute top-0 bottom-0 left-0 right-0 overlay-service"></div>
                        </Link>
                    ))}

                    {data?.item2.map((item, index) => (
                        <div className="service-item item-9" key={index}>
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

                    <Link
                        href={`/service`}
                        className="service-item item-10 text-[1.125vw] text-[#fff] uppercase"
                    >
                        <span>See More</span>
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-end justify-between content">
                        <div>
                            <h2 className="text-[3.73vw] font-[700] text-subtileNew uppercase mt-[19.2vw]">
                                {data?.titleMobile}
                            </h2>
                            <h3 className="text-[9.33vw] font-[800] text-primary capitalize leading-[1.19] mt-[2.133vw]">
                                {data?.subtitleMobile}
                            </h3>
                        </div>
                        <Link
                            href={`/service`}
                            className="block text-[4.26vw] text-blackBtnNews uppercase font-[800]"
                        >
                            See All +
                        </Link>
                    </div>
                    <SlideServiceMb data={data?.outstandingService} />
                </div>
            </div>
            <SlideTextService text={data?.textBottom} />
            <div className={`${over_lay}`}></div>
            <Image
                src={bgCommon}
                width={500}
                height={500}
                alt="img"
                className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
            />
        </div>
    );
};

export default Service;
