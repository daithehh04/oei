import Image from "next/image";
import React from "react";
import img from "../../../assets/img/about-circle.png";

export default function ISO({ data }) {
    return (
        <div className="iso relative pb-[9.75vw]">
            <div className="content">
                <p
                    className="title text-46pc leading-[1.22] text-[#394854] font-[800] tracking-tighter w-[44.625vw] pt-[10.6875vw] lg:text-[3.8vw] lg:w-[80%] md:text-[8vw] md:w-full"
                    dangerouslySetInnerHTML={{
                        __html: data?.title,
                    }}
                ></p>
                <p className="text-[#394854] font-[400] text-[1.5vw] leading-[1.58] w-[37.3125vw] ml-auto lg:text-[2.5vw] lg:w-[70%] lg:mt-[2vw] md:mt-[22.66vw] md:text-[4.26vw] md:w-[78.4%]">
                    {data?.text}
                </p>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt="img"
                    className="w-[58.9375vw] object-cover absolute top-[-2vw] left-0 rotate-90"
                />
            </div>
        </div>
    );
}
