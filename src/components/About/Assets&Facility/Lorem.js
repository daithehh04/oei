import Image from "next/image";
import React from "react";
import img from "../../../assets/img/about-circle.png";

export default function Lorem() {
    return (
        <div className="lorem-assets pt-[8.8175vw] pb-[9.75vw] overflow-hidden">
            <div className="content">
                <div className="relative left">
                    <h2 className="text-60pc font-[800] leading-[1.33] capitalize tracking-tighter text-primary w-[44.875vw]">
                        Lorem ipsum dolor sit amet consectetur. Aliquet fringia
                        quam vel vitae{" "}
                    </h2>
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="img"
                        className="absolute top-[0] left-[-15vw] w-[58.9375vw] object-cover"
                    />
                </div>
                <div className="right w-[44.625vw] mt-[2.5vw] ml-auto">
                    <p className="text-[#394854] text-[1.5vw] font-[400] leading-[1.38]">
                        Lorem ipsum dolor sit amet consectetur. Habitasse quam
                        bibendum nisl curabitur. Eget mauris tellus pellentesque
                        amet iaculis maecenas. Etiam massa tempus dolor nulla
                        erat cursus semper ut tincidunt. Scelerisque ornare
                        dictum ut lacus amet nunc dui platea maecenas. Auctor ut
                        condimentum dui urna orci id. .
                    </p>
                    <p className="text-[#394854] text-[1.5vw] font-[400] leading-[1.38] mt-[1.5vw]">
                        Lorem ipsum dolor sit amet consectetur. Habitasse quam
                        bibendum nisl curabitur. Eget mauris tellus pellentesque
                        amet iaculis maecenas. Etiam massa tempus dolor nulla
                        erat cursus semper ut tincidunt.
                    </p>
                </div>
            </div>
        </div>
    );
}
