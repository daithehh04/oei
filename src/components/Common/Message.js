"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import img2 from "../../assets/img/comman.png";

function Message({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="message md:mt-[0]">
            <div className="relative flex w-full wrapper md:flex-col">
                <p className="ceo-message text-[1.125vw] uppercase absolute top-0 w-[63%] border-b border-[#fff] text-[#fff] font-[400] mt-[2.5vw] leading-normal ml-[35%] md:ml-[3vw] md:w-[93%] md:text-[3.73vw] md:top-[50%] lg:text-[1.75vw]">
                    {data?.role}
                </p>
                <div className="left w-[50%] md:w-full">
                    <Image
                        src={data?.img?.sourceUrl}
                        width={500}
                        height={500}
                        alt={data?.img?.altText || data?.img?.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="right w-[50%] md:w-full bg-member px-[4.375vw] text-[#fff]">
                    <Image
                        src={img2}
                        width={100}
                        height={100}
                        alt="img"
                        className="w-[7.9375vw] object-contain mt-[8.6875vw] ml-[-1.5vw] md:hidden"
                    />
                    <h3
                        className="title text-[2.875vw] font-[800] leading-[1.22] text-[#fff] tracking-tighter mt-[-3vw] md:text-[6.66vw] md:mt-[25.06vw] lg:text-[4vw]"
                        data-aos-once="true"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {data?.title}
                    </h3>
                    <p
                        className="desc text-[#fff] text-[1.5vw] font-[400] leading-[1.38] w-[32.4375vw] mt-[1.5vw] md:w-[100%] md:text-[4.26vw] md:mt-[2.13vw] lg:text-[2vw]"
                        data-aos-once="true"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {data?.text}
                    </p>
                    <div className="name mt-[4.5625vw] pb-[5.75vw] md:pb-[8.53vw] w-max ml-auto">
                        <p
                            className="text-[1.25vw] font-[700] leading-[1.3] text-[#fff] tracking-[-0.03em] md:text-[4.26vw] lg:text-[2vw]"
                            data-aos-once="true"
                            data-aos="fade-up"
                            data-aos-duration="1400"
                        >
                            {data?.name}
                        </p>
                        <p
                            className="text-[0.875vw] font-[700] leading-[1.43] text-[#fff] mt-[0.375vw] md:text-[3.2vw] lg:text-[1.45vw]"
                            data-aos-once="true"
                            data-aos="fade-up"
                            data-aos-duration="1600"
                        >
                            {data?.signature}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
