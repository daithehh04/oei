import React from "react";
import img from "../../../assets/img/asset-1.png";
import Image from "next/image";

export default function Dynamic() {
    return (
        <div className="dynamic-assets">
            <div className="content">
                <h2 className="text-46pc text-primary w-[42.875vw] leading-[1.22] font-[800] pt-[6.875vw]">
                    Dynamic Working Environment, Professional
                </h2>
                <p className="w-[36.4375vw] text-24pc font-[400] leading-[1.5] ml-auto">
                    To become a highly professional, competitive company and
                    first choice to customers in Vietnam, as a reputable,
                    strategic and reliable partner in the{" "}
                </p>
                <div className="mt-[3.75vw] w-[75.75vw] h-[35.75vw] mx-auto">
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="img"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
