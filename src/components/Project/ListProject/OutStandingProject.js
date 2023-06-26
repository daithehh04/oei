import React from "react";
import SlideOutstandingProject from "./SlideOutStandingProject";

export default function OutStandingProject({ project, total }) {
    return (
        <div>
            <div className="flex mt-[6.25vw] md:flex-col md:mt-[16vw]">
                <h2 className=" text-[3.75vw] text-primary leading-[1.33] font-[800] lg:text-[4.67vw] md:text-[8vw]">
                    Ongoing project
                </h2>
                <p className="w-[46.5625vw] ml-auto text-[1.5vw] font-[400] leading-[1.38] mb-[2.31vw] text-[#394854] lg:text-[2vw] md:w-full md:text-[4.267vw] md:mb-[6.4vw] md:mt-[4.27vw] ">
                    Explore the Cutting Edge - Delve into our active projects
                    where innovation meets execution. Our ongoing projects are a
                    testament to our expertise in Project Management, Onshore
                    Construction, Offshore Transportation, and more. Witness the
                    live amalgamation of technical proficiency and sustainable
                    solutions as we create infrastructures for a greener
                    tomorrow.
                </p>
            </div>
            <SlideOutstandingProject project={project} total={total} />
        </div>
    );
}
