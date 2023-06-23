import React from "react";
import SlideCertified from "./SlideCertified";

export default function Certified() {
    return (
        <div className="pt-[7.5vw] certified_qhse bg-[#fff]">
            <h2 className="text-primary text-60pc font-[800] text-center mb-[3.375vw] md:hidden lg:text-[3.8vw]">
                ISO Certified
            </h2>
            <h2 className="text-primary text-60pc font-[800] text-center mb-[3.375vw] hidden md:block md:text-[8vw]">
                Album Image Project
            </h2>
            <SlideCertified />
        </div>
    );
}
