import React from "react";
import AlbumProjectSlide from "./AlbumProjectSlide";
import AlbumProjectSlideMb from "./AlbumProjectSlideMb";

export default function AlbumProject({ imgsAlbum }) {
    return (
        <div className="mb-[5.12vw] md:mb-[14.47vw]">
            <div className="flex justify-between pt-[6.69vw] mb-[3.75vw] md:pt-[16vw] content md:flex-col">
                <h3 className="text-[3.75vw] capitalize text-primary font-[800] md:text-[8vw] lg:text-[4.67vw]">
                    {imgsAlbum?.title}
                </h3>
                <p className="text-[1.125vw] font-[400] leading-[1.5] text-[#394854] w-[44.6875vw] md:text-[3.73vw] md:w-full md:mt-[2.67vw]">
                    {imgsAlbum?.desc}
                </p>
            </div>
            <div className="md:hidden">
                <AlbumProjectSlide imgsAlbum={imgsAlbum?.imgs} />
            </div>
            <div className="hidden md:block border-y border-[#ccc] pt-[8.71vw] pb-[10.31vw]">
                <AlbumProjectSlideMb imgsAlbum={imgsAlbum?.imgs} />
            </div>
        </div>
    );
}
