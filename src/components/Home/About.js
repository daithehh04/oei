'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image';
import SlideTextService from './SlideTextService';

gsap.registerPlugin(ScrollTrigger);

function initializeGSAPWithDelay(delay) {
    setTimeout(() => {
        const boxes = document.querySelectorAll('.item-about');
        // const boxes = self.selector(".item-about");
        boxes.forEach((box) => {
            gsap.to(box, {
                x: '0',
                scrollTrigger: {
                    trigger: box,
                    start: 'top bottom',
                    end: 'top 10%',
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
                    </div>
                </div>
                <SlideTextService text={data?.textBottom} />
            </div>
        </div>
    );
};

export default About;
