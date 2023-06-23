import Link from "next/link";
import React from "react";

export default function CompanySuggets({ news }) {
    const dateString = news?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="company-suggets pt-[2vw] pb-[1vw] border-t border-[#BDBDBD] md:pt-[6.4vw]">
            <span className="text-[#376A66] text-[0.9292vw] uppercase md:text-12mb lg:text-[1.75vw]">
                {formattedDate} / Event
            </span>
            <h3>
                <Link
                    href={`/news/company-news/${encodeURIComponent(
                        news?.slug
                    )}`}
                    className=" block text-[#394854] font-[800] text-[1.25vw] leading-[1.35] md:text-18mb lg:text-[2vw]"
                >
                    {news?.title}
                </Link>
            </h3>
            <Link
                href={`/news/company-news/${encodeURIComponent(news?.slug)}`}
                className="text-[#394854] font-[700] text-[0.8125vw] flex justify-end items-end uppercase leading-[2.57] md:text-13mb lg:text-[1.6vw]"
            >
                See More +
            </Link>
        </div>
    );
}
