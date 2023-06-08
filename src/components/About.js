"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import img from "../assets/img/about-circle.png";
import img2 from "../assets/img/about-2.png";
import img3 from "../assets/img/about-3.png";
import img4 from "../assets/img/about-4.png";
import img5 from "../assets/img/about-5.png";
import SlideTextService from "./SlideTextService";

gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
    const parentRef = useRef(null);
    useLayoutEffect(() => {
        if (!parentRef.current) {
            return;
        }
        let ctx = gsap.context((self) => {
            // const boxes = document.querySelectorAll(".item-about")
            const boxes = self.selector(".item-about");
            boxes.forEach((box) => {
                gsap.to(box, {
                    x: "0",
                    scrollTrigger: {
                        trigger: box,
                        start: "top bottom",
                        end: "top 10%",
                        markers: true,
                        scrub: true,
                    },
                });
            });
        }, parentRef);
        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="about">
            <div className="container-about">
                <div className="wrapper">
                    <div className="left">
                        <h2 className="sub-title">{data?.title}</h2>
                        <h3
                            className="desc"
                            dangerouslySetInnerHTML={{ __html: data?.desc }}
                        ></h3>
                        <a className="btn-see">{data?.btnSee}</a>
                        <Image
                            src={data?.imgLeft?.sourceUrl}
                            className="img"
                            alt="img"
                            width={1200}
                            height={1200}
                        />
                    </div>
                    <div className="right" ref={parentRef}>
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
                        {/* <Image
                            src={img2}
                            className="id-1 item-about"
                            alt="img"
                            width={500}
                            height={500}
                        />
                        <Image
                            src={img3}
                            className="id-2 item-about"
                            alt="img"
                            width={500}
                            height={500}
                        />
                        <Image
                            src={img4}
                            className="id-3 item-about"
                            alt="img"
                            width={500}
                            height={500}
                        />
                        <Image
                            src={img5}
                            className="id-4 item-about"
                            alt="img"
                            width={500}
                            height={500}
                        /> */}
                    </div>
                </div>
                <SlideTextService text={data?.textBottom} />
            </div>
        </div>
    );
};

export default About;
