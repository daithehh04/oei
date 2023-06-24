import React from "react";
import FacilitiesSlide from "./FacilitiesSlide";

export default function Facilities() {
    return (
        <div className=" mt-[22.8125vw]">
            <h2 className="text-60pc text-primary font-[800] leading-[1.33] tracking-tighter w-[58vw] mb-[2.5vw] content">
                Our Facilities: Where Success Thrives{" "}
            </h2>
            <div className="pb-[5vw]">
                <FacilitiesSlide />
            </div>
        </div>
    );
}
