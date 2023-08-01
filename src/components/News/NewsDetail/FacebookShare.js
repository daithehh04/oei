"use client";
import React from "react";
import Image from "next/image";
import fb from "../../../assets/img/facebook.svg";

const FacebookShare = ({ url, quote }) => {
    const handleClick = () => {
        const facebookUrl = "https://www.facebook.com/sharer/sharer.php?";
        const params = new URLSearchParams({
            u: url,
            quote: quote,
        });
        window.open(facebookUrl + params.toString(), "_blank");
    };

    return (
        <button onClick={handleClick}>
            <Image
                src={fb}
                alt="fb"
                width={50}
                height={50}
                className="w-[1.5vw] h-[1.5vw] object-contain lg:w-[2.5vw] lg:h-[2.5vw] md:w-[6.4vw] md:h-[6.4vw]"
            />
        </button>
    );
};

export default FacebookShare;
