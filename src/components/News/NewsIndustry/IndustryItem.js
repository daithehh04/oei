import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../assets/img/contact.png";

export default function IndustryItem({ industry }) {
    const urlImg = industry?.featuredImage.node.sourceUrl;

    const dateString = industry?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div href="#" className="block company-item">
            <a href="#">
                <Image
                    src={urlImg}
                    width={500}
                    height={500}
                    alt="img"
                    className="object-cover h-[20.3125vw] w-[100%]"
                />
            </a>
            <div className="info pt-[1.5vw] px-[1.25vw] pb-[2vw] bg-[#fff]">
                <div className="date text-[1.25vw] font-[400] text-[#376A66]">
                    <span>{formattedDate}</span> <span>/Event</span>
                </div>
                <a
                    href="#"
                    className="title block text-[#394854] font-[800] text-[1.58vw] tracking-tighter leading-[1.25] mt-[1vw]"
                >
                    {industry?.title}
                </a>
                <a
                    href="#"
                    className="uppercase text-[1.11vw] block font-[700] flex items-end justify-end mt-[1vw] text-[#3A5469] leading-[2.57]"
                >
                    See More +
                </a>
            </div>
        </div>
    );
}
