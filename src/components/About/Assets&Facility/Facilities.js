import React from "react";
import FacilitiesSlide from "./FacilitiesSlide";

export default function Facilities({ data }) {
    return (
        <div className="mt-[22.8125vw] md:mt-[44vw] lg:mt-[26vw]">
            <h2 className="text-60pc text-primary font-[800] leading-[1.33] tracking-tighter w-[58vw] mb-[2.5vw] content md:text-[8vw] md:w-full">
                {data?.title}
            </h2>
            <div className="pb-[5vw] md:pb-[16vw] lg:pb-[10vw]">
                <FacilitiesSlide dataSlide={data?.listAssets} />
            </div>
        </div>
    );
}
