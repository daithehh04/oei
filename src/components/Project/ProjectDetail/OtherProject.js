import React from "react";
import OthersProjectSlide from "./OthersProjectSlide";

export default function OtherProject({ projectAll }) {
    return (
        <div className="content pb-[6.875vw]">
            <div className="flex justify-between items-center mb-[2vw] mt-[6.875vw]">
                <h3 className="text-[3.75vw] capitalize text-primary font-[800] ">
                    project Others
                </h3>
                <a
                    href="#"
                    className="text-[1vw] uppercase text-[#fff] leading-[1.56] px-[3.125vw] py-[1.125vw] rounded-[2vw] bg-member"
                >
                    See More
                </a>
            </div>
            <OthersProjectSlide projectAll={projectAll} />
        </div>
    );
}
