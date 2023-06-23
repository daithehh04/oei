import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../assets/img/contact.png";

export default function BlogItem({ blog }) {
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
                    className="object-cover h-[29.75vw] w-[100%]"
                />
            </a>
            <div className="info mt-[1.5vw]">
                <div className="date text-[1.125vw] font-[400]">
                    <span>{formattedDate}</span> <span>/Event</span>
                </div>
                <a
                    href="#"
                    className="title block text-[#394854] font-[800] text-[2vw] tracking-tighter leading-[1.25]"
                >
                    {blog?.title}
                </a>
                <a
                    href="#"
                    className="uppercase text-[1.11vw] font-[700] block mt-[1vw] text-[#3A5469] leading-[2.57]"
                >
                    See More +
                </a>
            </div>
        </div>
    );
}
