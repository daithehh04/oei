import React from "react";
import SlideService from "./SlideService";
import Link from "next/link";

export default function Service({ data }) {
    return (
        <div className="pt-[6.87vw] md:pt-[20vw]">
            <div className="content">
                <h4 className="text-[#376A66] text-[1.125vw] font-[700] leading-[1.5] tracking-[0.135rem] lg:text-[1.85vw] uppercase md:text-[3.73vw]">
                    {data?.title}
                </h4>
                <h3 className="capitalize text-primary text-[3.75vw] font-[800] tracking-[-0.1875rem] leading-[1.33] lg:text-[4.67vw] md:text-[8vw]">
                    {data?.subTitle}
                </h3>
                <div className="flex items-center justify-between mt-[1vw]">
                    <p className="text-[1.5vw] font-[400] text-[#394854] w-[44.6875vw] leading-[1.5] lg:w-[70%] lg:text-[2.25vw] md:text-[4.26vw] md:w-full">
                        {data?.desc}
                    </p>
                    <Link
                        href="/service"
                        className="text-[1.125vw] uppercase font-[600] text-[#fff] leading-[1.5] py-[1.03vw] px-[2.75vw] lg:py-[1.5vw] lg:px-[3.25vw] lg:rounded-[99px] lg:text-[1.5vw] bg-member rounded-[2vw] hover:scale-105 transition-all md:hidden"
                    >
                        See more
                    </Link>
                </div>
            </div>
            <SlideService dataSlide={data?.listService} />
        </div>
    );
}
