import Link from "next/link";
import React from "react";

export default function NewsItem({ newsItem }) {
    const news = newsItem;
    const urlImg = news?.featuredImage.node.sourceUrl;

    const dateString = news?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <Link
            href={`/news/news&event/${encodeURIComponent(news?.slug)}`}
            className="news-item"
        >
            <div>
                <img
                    src={urlImg}
                    className="object-cover h-[20.25vw] w-[100%] md:h-[53.6vw] lg:h-[32vw]"
                />
            </div>
            <div className="info p-[1.375vw] md:p-[4.26vw]">
                <div className="date text-[1.25vw] text-[#376A66] font-[400] md:text-[3.2vw] lg:text-[2vw]">
                    <span>{formattedDate} </span> <span>/Event</span>
                </div>
                <h3 className="title text-[1.5625vw] text-[#394854] font-[700] mt-[1vw] line-clamp md:text-18mb lg:text-[2vw]">
                    {newsItem?.title}
                </h3>
                <a
                    href={`/news/news&event/${encodeURIComponent(news?.slug)}`}
                    className="uppercase text-[1.11vw] text-[#3A5469] font-[700] text-end block mt-[0.7025vw] md:text-14mb lg:text-[2vw]"
                >
                    See More +
                </a>
            </div>
        </Link>
    );
}
