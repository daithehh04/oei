"use client";
import Image from "next/image";
import img from "../../../assets/img/profile.png";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";

export default function Profile({ data }) {
    function fileDownloader(href) {
        const link = document.createElement("a");
        link.href = href;
        link.download = "file";
        link.click();
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div
            className="profile mt-[10vw] md:mt-[16.48vw]"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="content">
                <div className="flex gap-[2vw] md:flex-col">
                    <div className="left w-[30%] md:w-full lg:w-[40%]">
                        <h2 className="text-[2.875vw] font-[800] text-primary pb-[0.62vw] tracking-tighter leading-[1.213] border-b-2 border-[#979797] md:text-[8vw] md:pb-[2.13vw]">
                            {data?.left?.title}
                        </h2>
                        <Image
                            src={data?.left?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[14.56vw] object-cover mt-[2vw] mb-[0.75vw] md:h-[50.94vw] md:my-[4.45vw] lg:h-[25vw]"
                        />
                        <div className="flex items-center gap-[0.62vw] pb-[0.75vw] border-b border-[#ccc] md:pb-[4.45vw] cursor-pointer">
                            <Image
                                src={img}
                                width={50}
                                height={50}
                                alt="img"
                                className="w-[1.625vw h-[1.625vw] object-contain md:w-[6.23vw] md:h-[6.23vw] lg:w-[3.2vw] lg:h-[3.2vw] "
                            />
                            <span
                                onClick={() => fileDownloader(data?.left?.url)}
                                className="text-[#394854] text-18pc font-[700] uppercase leading-[2] lg:text-[1.75vw] md:hidden"
                            >
                                {data?.left?.label}
                            </span>
                            <span
                                onClick={() => fileDownloader(data?.left?.url)}
                                className="text-[#394854] text-[3.2vw] font-[700] uppercase leading-[2] hidden md:block"
                            >
                                {data?.left.labelMobile}
                            </span>
                        </div>
                    </div>
                    <div className="right w-[70%] md:w-full md:mt-[10.67vw] lg:w-[60%]">
                        <h2 className="text-[2.875vw] font-[800] text-primary pb-[0.62vw] tracking-tighter leading-[1.213] border-b-2 border-[#979797] md:text-[8vw] md:pb-[2.13vw]">
                            {data?.right?.title}
                        </h2>
                        <div className="mt-[0.75vw] pb-[1.44vw] h-[20vw] lg:h-[30vw] md:h-[70vw] overflow-y-auto">
                            {data?.right?.listItem?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center w-[93.33%] py-[1.15vw] border-b border-[#ccc] md:py-[4.27vw] cursor-pointer"
                                >
                                    <Image
                                        src={img}
                                        width={50}
                                        height={50}
                                        alt="img"
                                        className="w-[1.625vw h-[1.625vw] object-contain md:w-[6.23vw] md:h-[6.23vw] lg:w-[3.2vw] lg:h-[3.2vw]"
                                    />
                                    <span
                                        onClick={() =>
                                            fileDownloader(item?.url)
                                        }
                                        className="text-[#394854] text-[1vw] leading-[1.68] uppercase ml-[0.62vw] md:text-[3.2vw] md:ml-[1.23vw] md:line-clamp-1 lg:text-[1.55vw]"
                                    >
                                        {item?.text}
                                    </span>
                                    <span className="text-[#434447] text-[0.875vw] font-[300] leading-normal ml-auto md:text-[2.75vw] lg:text-[1.45vw] md:hidden">
                                        {item?.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
