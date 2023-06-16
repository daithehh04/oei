import React from "react";
import AlbumProjectSlide from "./AlbumProjectSlide";

export default function AlbumProject({ imgsAlbum }) {
    return (
        <div>
            <h3 className="text-[3.75vw] capitalize text-primary font-[800] text-center mb-[3.75vw] mt-[7.875vw]">
                album image project
            </h3>
            <AlbumProjectSlide imgsAlbum={imgsAlbum} />
        </div>
    );
}
