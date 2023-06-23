import React from "react";
import AlbumSlide from "./AlbumSlide";

export default function Album() {
    return (
        <div className="pt-[5vw] bg-member capitalize font-[800] text-[#fff] leading-[1.33] tracking-tighter">
            <div className="flex items-center justify-between content mb-[3.75vw]">
                <h2 className="text-60pc">Album image</h2>
                <p className="text-24pc w-[31.0625vw] font-[400] leading-[1.38]">
                    Lorem ipsum dolor sit amet consectetur. Tempus diam feugiat
                    eleifend ornare scelerisque magnis.{" "}
                </p>
            </div>
            <AlbumSlide />
        </div>
    );
}
