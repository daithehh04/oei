"use client";
import AOS from "aos";
import { useEffect } from "react";
import React, { useState } from "react";
import SlideEquipment from "./SlideEquipment";

export default function Equipment({ data }) {
    const [selectedTitle, setSelectedTitle] = useState(1);

    const handleTitleClick = (title) => {
        setSelectedTitle(title);
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="equipment bg-member pt-[6vw]">
            <div className="content">
                <h2
                    className="text-[#fff] md:text-primary text-[2.875vw] font-[800] leading-[1.21] tracking-tighter w-[46.625vw]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {data?.title}
                </h2>
                <div className="flex gap-[2.55vw] mt-[2vw] pb-[6vw]">
                    <ul
                        className="list-heading w-[20%] mt-[1vw]"
                        data-aos-once="true"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        {data?.listEquip?.map((item, index) => (
                            <li
                                onClick={() => handleTitleClick(index + 1)}
                                className={`heading-item text-[#fff] opacity-75 text-24pc leading-[1.27] capitalize pb-[1.57vw] py-[3vw] border-b border-[#ccc] lg:text-[2.25vw] ${
                                    selectedTitle === index + 1 ? "active" : ""
                                }`}
                            >
                                {item?.title}
                            </li>
                        ))}
                    </ul>
                    <div
                        className="list-content w-[80%]"
                        data-aos-once="true"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        {data?.listEquip?.map(
                            (item, index) =>
                                selectedTitle === index + 1 && (
                                    <div className="flex justify-between wrapper">
                                        <div className="left w-[22.67vw] lg:w-[27vw]">
                                            <h3 className="name text-[#fff] text-[2.875vw] font-[800] leading-[1.21] tracking-tighter mt-[4.5vw] lg:text-[3.25vw]">
                                                {item?.title}
                                            </h3>
                                            <p className="desc text-[#fff] text-18pc leading-normal mt-[1.57vw] lg:text-[1.65vw]">
                                                {item?.text}
                                            </p>
                                        </div>
                                        <div className="right w-[38.65vw]">
                                            <SlideEquipment
                                                dataSlide={item?.imgs}
                                            />
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
