import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../assets/img/contact.png";

export default function BlogSuggets({ blog }) {
    const urlImg = blog?.featuredImage.node.sourceUrl;

    const dateString = blog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="block company-item">
            <a href="#">
                <Image
                    src={urlImg}
                    width={500}
                    height={500}
                    alt="img"
                    className="object-cover h-[13.3125vw] w-[100%]"
                />
            </a>
            <div className="info mt-[1.5vw]">
                <div className="date text-[0.9292vw] font-[400] text-[#376A66]">
                    <span>{formattedDate}</span> <span>/Event</span>
                </div>
                <a
                    href="#"
                    className="title block text-[#394854] font-[800] text-[1.25vw] tracking-tighter leading-[1.25] mt-[1vw]"
                >
                    {blog?.title}
                </a>
                <a
                    href="#"
                    className="uppercase text-[0.8125vw] font-[700] flex items-end justify-end mt-[1vw] text-[#3A5469] leading-[2.57]"
                >
                    See More +
                </a>
            </div>
        </div>
    );
}
