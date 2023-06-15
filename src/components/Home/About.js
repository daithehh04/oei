"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import SlideTextService from "./SlideTextService";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        const boxes = document.querySelectorAll(".item-about");
        // const boxes = self.selector(".item-about");
        boxes.forEach((box) => {
            gsap.to(box, {
                x: "0",
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom",
                    end: "top 10%",
                    scrub: true,
                },
            });
        });
    }, delay);
}
const About = ({ data }) => {
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
        <div className="about relative overflow-hidden">
            <div className="container-about w-[95.625%] ml-auto mt-[12.625vw] md:w-[91.25%] md:mr-auto md:ml-auto">
                <div className="wrapper flex gap-[1.3125] md:block">
                    <div className="left relative w-[42.61%] md:w-[100%]">
                        <h2 className="sub-title text-[1.125vw] leading-normal tracking-[0.12em] uppercase font-[700] text-dateNews md:text-[3.73vw]">
                            {data?.title}
                        </h2>
                        <h3
                            className="desc text-[2.875vw] leading-[1.22] tracking-tighter md:text-[6.66vw]"
                            dangerouslySetInnerHTML={{ __html: data?.desc }}
                        ></h3>
                        <a
                            className="btn-see w-[8.9375vw] h-[8.9375vw] rounded-full flex justify-center items-center text-[1.125vw] font-[700] leading-[2] mt-[3.75vw] uppercase bg-member text-[#fff]
                        md:w-[26.66vw] md:h-[26.66vw] md:text-[3.73vw]"
                        >
                            {data?.btnSee}
                        </a>
                        <Image
                            src={data?.imgLeft?.sourceUrl}
                            className="img absolute w-[100%] left-[-15%] top-[40px] md:right-[-15%] md:left-auto md:top-[25%]"
                            alt="img"
                            width={1200}
                            height={1200}
                        />
                    </div>
                    <div
                        className="right grid w-[57.39%] gap-[0.625vw] md:w-[100%] md:pb-[18.66vw]"
                        ref={parentRef}
                    >
                        <div className="id-5 item-about"></div>
                        <div className="id-6 item-about"></div>
                        <div className="id-7 item-about"></div>
                        {data?.repeatImg.map((item, index) => (
                            <Image
                                key={index}
                                src={item?.img?.sourceUrl}
                                className={`id-${index + 1} item-about`}
                                alt="img"
                                width="500"
                                height="500"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <SlideTextService text={data?.textBottom} />
        </div>
    );
};

export default About;
