import Link from "next/link";
import React from "react";

export default function IndustrySuggets({ blog }) {
    const dateString = blog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="industry-suggets md:pt-[4.27vw] md:border-t md:border-[#ccc]">
            <span className="text-[#376A66] text-[1.125vw] uppercase md:text-16mb md:leading-[2.15] lg:text-[1.75vw]">
                {formattedDate}{" "}
                <span className="uppercase">
                    / {blog?.categories?.nodes[0]?.name}
                </span>
            </span>
            <h3>
                <Link
                    href={`/news/industry-news/${encodeURIComponent(
                        blog?.slug
                    )}`}
                    className="text-[#394854] block font-[800] text-[2vw] leading-[1.25] !line-clamp-2 min-h-[5vw] tracking-tighter mt-[0.5vw] md:text-25mb lg:text-[2.25vw]"
                >
                    {blog?.title}
                </Link>
            </h3>
            <p
                className="text-[#394854] leading-[1.44] mt-[1.75vw] text-[1.125vw] md:text-14mb md:mt-[7.47vw] lg:text-[1.875vw]"
                dangerouslySetInnerHTML={{
                    __html: blog?.excerpt,
                }}
            />
            <Link
                href={`/news/industry-news/${encodeURIComponent(blog?.slug)}`}
                className="text-[#394854] block mt-[2.5vw] font-[700] text-[1.12vw] uppercase leading-[2.57] md:leading-[1.5] md:mt-[6.4vw] md:mb-[4.27vw] md:text-[4.267vw] lg:text-[1.75vw]"
            >
                See More +
            </Link>
        </div>
    );
}
