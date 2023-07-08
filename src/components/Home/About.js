"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../assets/img/about-circle.png";
import Image from "next/image";
import SlideTextService from "./SlideTextService";
import AOS from "aos";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        const boxes = document.querySelectorAll(".item-about");
        boxes.forEach((box) => {
            gsap.to(box, {
                x: "0",
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom",
                    end: "top 50%",
                    scrub: true,
                    once: true,
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
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="relative overflow-hidden about">
            <div className="container-about w-[95.625%] ml-auto mt-[12.625vw] md:w-[91.25%] md:mr-auto md:ml-auto">
                <div className="wrapper relative flex gap-[1.3125vw] md:w-full md:block">
                    <div className="left relative w-[40.61%] md:w-[100%]">
                        <h2
                            className="sub-title text-[1.125vw] leading-normal tracking-[0.12em] uppercase font-[700] text-dateNews md:text-[3.73vw]"
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            {data?.title}
                        </h2>
                        <h3
                            className="desc text-[2.875vw] leading-[1.22] tracking-tighter md:text-[6.66vw]"
                            dangerouslySetInnerHTML={{ __html: data?.desc }}
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        ></h3>
                        <Link
                            href={`/about-us/introduce`}
                            className="btn-see w-[8.9375vw] h-[8.9375vw] rounded-full flex justify-center items-center text-[1.125vw] font-[700] leading-[2] mt-[3.75vw] uppercase bg-member text-[#fff]
                        md:w-[26.66vw] md:h-[26.66vw] md:text-[3.73vw]"
                        >
                            {data?.btnSee}
                        </Link>
                    </div>
                    <Image
                        src={img}
                        className="img -z-10 absolute w-[58.9375vw] object-cover left-[-12%] top-[8vw] md:right-[-24%] md:w-[136vw] md:left-auto md:top-[20%]"
                        alt="img"
                        width={1200}
                        height={1200}
                    />
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
