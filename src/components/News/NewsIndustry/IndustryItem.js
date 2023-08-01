import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function IndustryItem({ industry }) {
    const urlImg = industry?.featuredImage.node.sourceUrl;

    const dateString = industry?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="block company-item">
            <Link
                href={`/news/industry-news/${encodeURIComponent(
                    industry?.slug
                )}`}
            >
                <Image
                    src={urlImg}
                    width={500}
                    height={500}
                    alt={
                        industry?.featuredImage.node?.altText ||
                        industry?.featuredImage.node?.title
                    }
                    className="object-cover h-[20.3125vw] w-[100%] md:h-[53.6vw] lg:h-[32vw]"
                />
            </Link>
            <div className="info pt-[1.5vw] px-[1.25vw] pb-[2vw] bg-[#fff] md:p-[4.27vw]">
                <div className="date text-[1.25vw] font-[400] text-[#376A66] md:text-[3.2vw] lg:text-[2vw]">
                    <span>{formattedDate}</span>{" "}
                    <span className="uppercase">
                        / {industry?.categories?.nodes[0]?.name}
                    </span>
                </div>
                <Link
                    href={`/news/industry-news/${encodeURIComponent(
                        industry?.slug
                    )}`}
                    className="title block text-[#394854] font-[800] text-[1.58vw] !line-clamp-2 tracking-tighter leading-[1.25] min-h-[4vw] mt-[1vw] md:text-[4.8vw] lg:text-[2.25vw]"
                >
                    {industry?.title}
                </Link>
                <Link
                    href={`/news/industry-news/${encodeURIComponent(
                        industry?.slug
                    )}`}
                    className="uppercase text-[1.12vw] font-[700] flex items-end justify-end mt-[1vw] text-[#3A5469] leading-[2.57] md:text-[3.73vw] lg:text-[2vw]"
                >
                    See More +
                </Link>
            </div>
        </div>
    );
}
