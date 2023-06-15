import React from "react";
import SlideVision from "./SlideVision";

export default function Vision() {
    return (
        <div className="vision">
            <div className="row content">
                <h3 className="iso text-[3.75vw] font-[800] capitalize leading-[1.33] text-[#fff]">
                    Our Vision
                </h3>
                <p className="desc text-[1.5vw] font-[400] leading-[1.38] text-[#fff] w-[31.0625vw]">
                    To become a highly professional, competitive company and
                    first choice to customers in Vietnam, as a reputable,
                    strategic and reliable partner in the Offshore Wind Power
                    and Oil & Gas services sectors.
                </p>
            </div>
            <SlideVision />
        </div>
    );
}
