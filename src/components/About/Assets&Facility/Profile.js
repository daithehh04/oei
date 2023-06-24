import Image from "next/image";
import React from "react";
import img from "../../../assets/img/profile.png";
import img2 from "../../../assets/img/profile-img.png";

export default function Profile() {
    return (
        <div className="profile mt-[10vw]">
            <div className="content">
                <div className="flex gap-[2vw]">
                    <div className="left w-[30%]">
                        <h2 className="text-[2.875vw] font-[800] text-primary pb-[0.62vw] tracking-tighter leading-[1.213] border-b-2 border-[#8b8b8b]">
                            Corporate Profile
                        </h2>
                        <Image
                            src={img2}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[14.56vw] mt-[2vw] mb-[0.75vw]"
                        />
                        <div className="flex items-center gap-[0.62vw] pb-[0.75vw] border-b border-[#ccc]">
                            <Image
                                src={img}
                                width={50}
                                height={50}
                                alt="img"
                                className="w-[1.625vw h-[1.625vw] object-cover"
                            />
                            <span className="text-[#394854] text-18pc font-[700] uppercase leading-[2]">
                                Corporate Profile
                            </span>
                        </div>
                        <a
                            href="#"
                            className="text-18pc block font-[700] text-primary uppercase mt-[1.06vw]"
                        >
                            See more +
                        </a>
                    </div>
                    <div className="right w-[70%]">
                        <h2 className="text-[2.875vw] font-[800] text-primary pb-[0.62vw] tracking-tighter leading-[1.213] border-b-2 border-[#8b8b8b]">
                            Download Equipment Datasheet
                        </h2>
                        <div className="mt-[0.75vw] overflow-x-scroll pb-[1.44vw]">
                            <div className="flex items-center w-[93.33%] py-[1.15vw] border-b border-[#ccc]">
                                <Image
                                    src={img}
                                    width={50}
                                    height={50}
                                    alt="img"
                                    className="w-[1.625vw h-[1.625vw] object-cover"
                                />
                                <span className="text-[#394854] text-[1vw] leading-[1.68] uppercase ml-[0.62vw]">
                                    Regulations on operation of the Supervisory
                                    Board
                                </span>
                                <span className="text-[#434447] text-[0.875vw] font-[300] leading-normal ml-auto">
                                    June 04,2022
                                </span>
                            </div>
                            <div className="flex items-center w-[93.33%] py-[1.15vw] border-b border-[#ccc]">
                                <Image
                                    src={img}
                                    width={50}
                                    height={50}
                                    alt="img"
                                    className="w-[1.625vw h-[1.625vw] object-cover"
                                />
                                <span className="text-[#394854] text-[1vw] leading-[1.68] uppercase ml-[0.62vw]">
                                    Regulations on operation of the Supervisory
                                    Board
                                </span>
                                <span className="text-[#434447] text-[0.875vw] font-[300] leading-normal ml-auto">
                                    June 04,2022
                                </span>
                            </div>
                            <div className="flex items-center w-[93.33%] py-[1.15vw] border-b border-[#ccc]">
                                <Image
                                    src={img}
                                    width={50}
                                    height={50}
                                    alt="img"
                                    className="w-[1.625vw h-[1.625vw] object-cover"
                                />
                                <span className="text-[#394854] text-[1vw] leading-[1.68] uppercase ml-[0.62vw]">
                                    Regulations on operation of the Supervisory
                                    Board
                                </span>
                                <span className="text-[#434447] text-[0.875vw] font-[300] leading-normal ml-auto">
                                    June 04,2022
                                </span>
                            </div>
                            <div className="flex items-center w-[93.33%] py-[1.15vw] border-b border-[#ccc]">
                                <Image
                                    src={img}
                                    width={50}
                                    height={50}
                                    alt="img"
                                    className="w-[1.625vw h-[1.625vw] object-cover"
                                />
                                <span className="text-[#394854] text-[1vw] leading-[1.68] uppercase ml-[0.62vw]">
                                    Regulations on operation of the Supervisory
                                    Board
                                </span>
                                <span className="text-[#434447] text-[0.875vw] font-[300] leading-normal ml-auto">
                                    June 04,2022
                                </span>
                            </div>
                            <div className="flex items-center w-[93.33%] py-[1.15vw] border-b border-[#ccc]">
                                <Image
                                    src={img}
                                    width={50}
                                    height={50}
                                    alt="img"
                                    className="w-[1.625vw h-[1.625vw] object-cover"
                                />
                                <span className="text-[#394854] text-[1vw] leading-[1.68] uppercase ml-[0.62vw]">
                                    Regulations on operation of the Supervisory
                                    Board
                                </span>
                                <span className="text-[#434447] text-[0.875vw] font-[300] leading-normal ml-auto">
                                    June 04,2022
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
