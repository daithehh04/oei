import Image from "next/image";
import React from "react";
import img from "../../assets/img/contact.png";

export default function Contact() {
    return (
        <div className="contact mb-[3vw]">
            <div className="content">
                <div className="wrapper flex md:flex-col-reverse">
                    <div className="left w-[50%] bg-member px-[3.125vw] text-[#fff] md:w-full md:h-auto md:px-[4.26vw]">
                        <div className="mt-[50%] -translate-y-1/2 md:my-[8.8vw] md:transform-none">
                            <span className="w-[70.35%] capitalize text-60pc font-[800] leading-[1.33] tracking-tighter md:text-[8vw]">
                                Would you like to contact us
                            </span>
                            <p className="text-[1.125vw] font-[800] leading-[1.44] mt-[1vw] md:text-[4.26vw] md:mt-[2.93vw]">
                                A traditional construction business transformed
                                with cutting-edge technology solutions for both
                                construction and customer interactions
                            </p>
                            <a
                                href="#"
                                className="inline-block border rounded-[2vw] border-[#fff] leading-[2] py-[0.75vw] px-[2.8125vw] uppercase text-[1.125vw] font-[700] mt-[1.625vw] md:text-[3.2vw] md:rounded-[8.53vw] md:mt-[6.4vw] md:px-[5.73vw]"
                            >
                                See More
                            </a>
                        </div>
                    </div>
                    <div className="right w-[50%] md:w-full md:h-[83.46vw]">
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
