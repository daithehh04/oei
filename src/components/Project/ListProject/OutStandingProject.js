import React from "react";
import SlideOutstandingProject from "./SlideOutStandingProject";

export default function OutStandingProject({ project, total }) {
    return (
        <div>
            <h2 className="mt-[6.25vw] text-[3.75vw] text-primary leading-[1.33] font-[800]">
                Outstanding project
            </h2>
            <p className="w-[40vw] ml-auto text-[1.5vw] font-[400] leading-[1.38] mt-[1vw] mb-[2.625vw]">
                To become a highly professional, competitive company and first
                choice to customers in Vietnam, as a reputable, strategic and
                reliable partner in the Offshore Wind Power.
            </p>
            <SlideOutstandingProject project={project} total={total} />
        </div>
    );
}
