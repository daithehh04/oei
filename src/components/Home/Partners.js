"use client";
import { useEffect, useRef } from "react";
import SlidePartners from "./SlidePartners";

const Partners = ({ data }) => {
    const refPartners = useRef();
    if (!refPartners.current) return;
    useEffect(() => {
        function scrollReveal() {
            if (
                refPartners.current.getBoundingClientRect().top <
                window.innerHeight / 2
            ) {
                refPartners.current.classList.add("active");
            }
        }
        window.addEventListener("scroll", scrollReveal);
        scrollReveal();
    });
    return (
        <section className="partners py-[8.75vw] " ref={refPartners}>
            <div className="wrapper w-[79.5vw] m-auto text-center">
                <h2 className="title text-[1.125vw] leading-normal font-[700] pt-[5vw] tracking-[0.12em] uppercase text-subtileNew">
                    {data?.title}
                </h2>
                <h3 className="text w-[74.69%] m-auto text-[2.875vw] font-[800] leading-[1.22] tracking-tighter mt-[1vw] text-primary">
                    {data?.desc}
                </h3>
                <div className="mx-[3.125vw] slideP">
                    <SlidePartners dataSlide={data?.partnersRow} />
                </div>
            </div>
        </section>
    );
};

export default Partners;
