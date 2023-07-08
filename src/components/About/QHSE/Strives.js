"use client";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";

export default function Strives({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        AOS.init({
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            },
        });
    }, []);
    return (
        <div className="strives relative overflow-hidden pb-[8.5vw] lg:pb-[10vw] md:pb-[12vw] ">
            <div className="content">
                <h2
                    className="title text-46pc mt-[4.38vw] md:mt-[15vw] text-[#394854] font-[800] leading-[1.22] tracking-tighter w-[61.0625vw] z-10 lg:text-[4vw] lg:w-[80%] md:text-[6.66vw] md:w-full"
                    dangerouslySetInnerHTML={{
                        __html: data?.title,
                    }}
                    data-aos-once="true"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                ></h2>
                <div className="imgs flex gap-[3.125vw] pt-[2.5vw] md:pt-[4.27vw] items-baseline lg:flex-col">
                    <div>
                        <Image
                            src={data?.listItem?.[0]?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt={
                                data?.listItem?.[0]?.img?.altText ||
                                data?.listItem?.[0]?.img?.title
                            }
                            className="w-full h-[34.8125vw] object-cover lg:h-[54vw] md:h-[70.93vw]"
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        />
                        <p
                            className="text-[#394854] text-[1.5vw] font-[400] w-[39.4375vw] leading-[1.58] mt-[3.75vw] lg:text-[2.4vw] md:text-[3.73vw] md:mt-[4.26vw] md:w-full lg:w-full"
                            dangerouslySetInnerHTML={{
                                __html: data?.listItem?.[0]?.desc,
                            }}
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        ></p>
                    </div>
                    <div>
                        <Image
                            src={data?.listItem?.[1]?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt={
                                data?.listItem?.[1]?.img?.altText ||
                                data?.listItem?.[1]?.img?.title
                            }
                            className="w-full h-[26.375vw] object-cover lg:h-[46vw] md:h-[60vw]"
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                        <p
                            className="text-[#394854] text-[1.5vw] font-[400] w-[39.4375vw] leading-[1.58] mt-[3.75vw] lg:text-[2.4vw] lg:w-full md:text-[3.73vw] md:mt-[4.26vw] md:w-full"
                            dangerouslySetInnerHTML={{
                                __html: data?.listItem?.[1]?.desc,
                            }}
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        ></p>
                    </div>
                </div>

                <span className="heading text-[12.5vw] font-[900] uppercase absolute right-0 md:hidden">
                    OEi GROUP
                </span>
            </div>
        </div>
    );
}
