import React from "react";
import SlideTeams from "./SlideTeams";

export default function OurTeams() {
    return (
        <div className="our-teams pt-[7.5625vw] pb-[6.25vw] md:pb-[16vw] ">
            <div className="content">
                <div className="row flex justify-between items-center mb-[3.75vw] md:mb-[6.4vw]">
                    <h3 className="title text-60pc font-[800] leading-[1.33] flex items-center capitalize text-primary tracking-tighter md:text-[8vw] lg:text-[4.5vw]">
                        Our Management
                    </h3>
                    <a
                        href="/"
                        className="btn-see text-[4.266vw] leading-[2.25] uppercase text-[#394854] font-[800] hidden md:block"
                    >
                        See All +
                    </a>
                </div>
                <SlideTeams />
            </div>
        </div>
    );
}
