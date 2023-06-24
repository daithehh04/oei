import React from "react";
import AlbumSlide from "./AlbumSlide";

export default function Album() {
    return (
        <div className="pt-[5vw] bg-member capitalize ">
            <div className="flex items-start justify-between content mb-[3.75vw]">
                <h2 className="text-60pc w-[44.375vw] font-[800] text-[#fff] leading-[1.33] tracking-tighter">
                    Recent Showcasing Successful Projects
                </h2>
                <p className="text-24pc w-[37.9375vw] font-[400] leading-[1.38] text-[#fff]">
                    Our projects demonstrate how our state-of-the-art facilities
                    played a pivotal role in delivering outstanding outcomes,
                    combining precision, efficiency, and teamwork for successful
                    project completion.
                </p>
            </div>
            <AlbumSlide />
        </div>
    );
}
