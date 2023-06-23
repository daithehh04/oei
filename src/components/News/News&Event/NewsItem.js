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
            href={`news/news&event/${encodeURIComponent(news?.slug)}`}
            className="news-item"
        >
            <div>
                <img
                    src={urlImg}
                    className="object-cover h-[20.25vw] w-[100%]"
                />
            </div>
            <div className="info p-[1.375vw]">
                <div className="date text-[1.25vw] font-[400]">
                    <span>{formattedDate} </span> <span>/Event</span>
                </div>
                <p
                    className="desc text-[1.5625vw] font-[700] mt-[1vw] line-clamp"
                    dangerouslySetInnerHTML={{
                        __html: newsItem?.excerpt,
                    }}
                ></p>
                <a
                    href={`news/news&event/${encodeURIComponent(news?.slug)}`}
                    className="uppercase text-[1.11vw] font-[700] text-end block mt-[0.7025vw]"
                >
                    See More +
                </a>
            </div>
        </Link>
    );
}
