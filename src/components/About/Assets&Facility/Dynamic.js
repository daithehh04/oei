import React from "react";
import img from "../../../assets/img/asset-1.png";
import Image from "next/image";
import SlideAssets from "./SlideAssets";

export default function Dynamic() {
    return (
        <div className="dynamic-assets">
            <div className="content">
                <div className="flex items-start justify-between  pt-[6.12vw]">
                    <h2 className="text-60pc text-primary w-[31.0625vw] tracking-tighter leading-[1.22] font-[800]">
                        Our Capabilities and Assets
                    </h2>
                    <p className="w-[36.4375vw] text-18pc text-[#394854] font-[400] leading-[1.5">
                        OEI excels in the energy sector with a diverse range of
                        equipment for onshore and offshore construction in Wind
                        Energy and Oil & Gas. Our assets include advanced
                        facilities, offices, workshops, and specialized marine
                        equipment like cable laying and construction barges.
                        With industry-leading heavy lift cranes and construction
                        equipment, OEI is equipped for excellence in every
                        project
                    </p>
                </div>
                <div className="mt-[6.44vw]">
                    <SlideAssets />
                </div>
            </div>
        </div>
    );
}
