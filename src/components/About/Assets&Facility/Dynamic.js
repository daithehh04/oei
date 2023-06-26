import React from "react";
import img from "../../../assets/img/asset-1.png";
import Image from "next/image";
import SlideAssets from "./SlideAssets";

export default function Dynamic({ data }) {
    return (
        <div className="dynamic-assets">
            <div className="content">
                <div className="flex items-start justify-between pt-[6.12vw] md:flex-col md:pt-[16vw]">
                    <h2 className="text-60pc text-primary w-[31.0625vw] tracking-tighter leading-[1.22] font-[800] md:w-full md:text-[8vw]">
                        {data?.title}
                    </h2>
                    <p className="w-[36.4375vw] text-18pc text-[#394854] font-[400] leading-[1.5 md:w-full md:text-[4.26vw] md:mt-[2.13vw] lg:text-[1.65vw] lg:w-[54vw]">
                        {data?.desc}
                    </p>
                </div>
                <div className="mt-[6.44vw] md:mt-[5.33vw]">
                    <SlideAssets dataSlide={data?.album} />
                </div>
            </div>
        </div>
    );
}
