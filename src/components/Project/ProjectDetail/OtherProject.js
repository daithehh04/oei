import React from "react";
import OthersProjectSlide from "./OthersProjectSlide";
import Link from "next/link";

export default function OtherProject({ projectAll }) {
    return (
        <div className="content pb-[6.875vw]">
            <div className="flex justify-between items-center mb-[2vw] mt-[6.875vw]">
                <h3 className="text-[3.75vw] capitalize text-primary font-[800] md:text-[8vw] lg:text-[4.67vw]">
                    project Others
                </h3>
                <Link
                    href="/project"
                    className="text-[1vw] uppercase text-[#fff] leading-[1.56] px-[3.125vw] py-[1.125vw] rounded-[2vw] bg-member lg:text-[1.5vw] lg:rounded-[3vw] md:hidden"
                >
                    See More
                </Link>
                <Link
                    href="/project"
                    className="text-[4.267vw] hidden md:block uppercase text-[#394854] leading-[1.25] font-[800]"
                >
                    See More +
                </Link>
            </div>
            <OthersProjectSlide projectAll={projectAll} />
        </div>
    );
}
