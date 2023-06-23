import Image from "next/image";
import React from "react";
import img from "../../../assets/img/iso-circle.png";

export default function ISO() {
    return (
        <div className="iso relative pb-[9.75vw]">
            <div className="content">
                <p className="title text-46pc leading-[1.22] text-[#394854] font-[800] tracking-tighter w-[44.625vw] pt-[10.6875vw] lg:text-[3.8vw] lg:w-[80%] md:text-[8vw] md:w-full">
                    Our Company <strong>quality management</strong> and
                    operation system have been recognized and{" "}
                    <strong>certified</strong> by DNV according to ISO 9001:2015
                    and ISO 45001:2018
                </p>
                <p className="text-[#394854] font-[400] text-[1.5vw] leading-[1.58] w-[37.3125vw] ml-auto lg:text-[2.5vw] lg:w-[70%] lg:mt-[2vw] md:mt-[22.66vw] md:text-[4.26vw] md:w-[78.4%]">
                    To deliver the quality commitment for the provision of
                    hi-tech services in compliance with the industrial codes and
                    standards and specifications.
                </p>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt="img"
                    className="w-[58.9375vw] object-cover absolute top-0 left-0"
                />
            </div>
        </div>
    );
}
