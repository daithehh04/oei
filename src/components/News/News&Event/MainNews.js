import Link from "next/link";
import React from "react";

export default function MainNews({ news }) {
    const urlImg = news?.featuredImage?.node?.sourceUrl;

    const dateString = news?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="main-news flex md:flex-col">
            <Link
                href={`/news/news&event/${encodeURIComponent(news?.slug)}`}
                className="left w-[50%] md:w-full"
            >
                <img
                    src={urlImg}
                    alt="img"
                    className="w-[100%] h-[38.5vw] object-cover md:h-[70.93vw] lg:h-auto"
                />
            </Link>
            <div className="right w-[50%] pt-[2.5vw] px-[3.75vw] pb-[3.75vw] flex flex-col justify-between md:w-full md:pt-[6.4vw] md:pb-[8.53vw] md:px-[2.66vw]">
                <div className="top">
                    <p className="uppercase text-[1.25vw] md:text-[4.26vw]">
                        <span>{formattedDate}</span> / <span>event</span>
                    </p>
                    <h3>
                        <Link
                            href={`/news/news&event/${encodeURIComponent(
                                news?.slug
                            )}`}
                            className="title text-[3.75vw] line-clamp md:text-[6.67vw] "
                        >
                            {news?.title}
                        </Link>
                    </h3>
                </div>
                <div className="bottom md:mt-[8.53vw]">
                    <p
                        className="text w-[28.125vw] text-[1.125vw] md:text-14mb md:w-full lg:text-[2vw] lg:w-full"
                        dangerouslySetInnerHTML={{
                            __html: news?.excerpt,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
