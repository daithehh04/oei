import React from "react";
import AlbumProjectSlide from "./AlbumProjectSlide";
import AlbumProjectSlideMb from "./AlbumProjectSlideMb";

export default function AlbumProject({ imgsAlbum }) {
    return (
        <div className="mb-[5.12vw] md:mb-[14.47vw]">
            <h3 className="text-[3.75vw] capitalize text-primary font-[800] text-center mb-[3.75vw] mt-[7.875vw] md:text-[8vw] lg:text-[4.67vw]">
                album image project
            </h3>
            <div className="md:hidden">
                <AlbumProjectSlide imgsAlbum={imgsAlbum} />
            </div>
            <div className="hidden md:block">
                <AlbumProjectSlideMb imgsAlbum={imgsAlbum} />
            </div>
        </div>
    );
}
