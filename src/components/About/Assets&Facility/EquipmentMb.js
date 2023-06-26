"use client";
import Image from "next/image";
import React from "react";
import dropdown from "../../../assets/img/dropdown.svg";
import SlideEquipment from "./SlideEquipment";
import { useState } from "react";
import { useRef } from "react";

export default function EquipmentMb({ data }) {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const handleTitleClick = (title) => {
        if (selectedTitle === title) {
            setSelectedTitle(null);
        } else {
            setSelectedTitle(title);
        }
        setClicked((prev) => !prev);
    };
    return (
        <div className="equipment-mb">
            <div className="content">
                <h2 className="text-primary font-[800] leading-[1.21] tracking-tighter text-[8vw] w-full pt-[12vw] mb-[4vw]">
                    {data?.title}
                </h2>
                <div className="list-equip">
                    {data?.listEquip?.map((item, index) => (
                        <div className="item-equip">
                            <div
                                onClick={() => handleTitleClick(index + 1)}
                                className={`flex items-center justify-between question py-[4.58vw] border-t border-[#ccc] cursor-pointer ${
                                    selectedTitle === index + 1 ? "active" : ""
                                }`}
                            >
                                <span className="text-[#676767] text-[4.8vw] capitalize leading-[1.83] opacity-75">
                                    {item?.title}
                                </span>
                                <Image
                                    src={dropdown}
                                    width={50}
                                    height={50}
                                    alt="img"
                                    className="object-contain w-[4vw] h-[4vw]"
                                />
                            </div>
                            <div
                                className="answer"
                                ref={contentEl}
                                style={
                                    selectedTitle === index + 1
                                        ? {
                                              height: contentEl.current
                                                  .scrollHeight,
                                          }
                                        : { height: "0px", overflow: "hidden" }
                                }
                            >
                                <div className="w-full top pt-[4.48vw] border-t border-[#ccc]">
                                    <h3 className="name text-[#394854] text-[6.66vw] font-[800] leading-[1.21] tracking-tighter">
                                        {item?.title}
                                    </h3>
                                    <p className="desc text-[#333] text-[3.73vw] mt-[2.13vw] leading-normal">
                                        {item?.text}
                                    </p>
                                </div>
                                <div className="slide-equip w-full bottom mt-[4.53vw] pb-[6.45vw]">
                                    <SlideEquipment dataSlide={item?.imgs} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
