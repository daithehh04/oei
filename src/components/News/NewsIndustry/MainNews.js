import React from "react";
import IndustrySuggets from "./IndustrySuggets";
import Image from "next/image";
import img from "../../../assets/img/industry-news.png";
import Link from "next/link";

export default function MainNews({ mainIndustry }) {
    const firstBlog = mainIndustry?.[0];
    const arrBlogs = mainIndustry?.slice(1, 4);
    const urlImg = firstBlog?.featuredImage.node.sourceUrl;

    const dateString = firstBlog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="main-industry">
            <div className="flex gap-x-[1.875vw] justify-between md:flex-col">
                <div className="w-[66%] md:w-full lg:w-[58%]">
                    <Image
                        src={urlImg}
                        width={500}
                        height={500}
                        alt="img"
                        className="w-full h-[30.4375vw] object-cover md:h-[70.93vw]"
                    />
                </div>
                <div className="info w-[34%] md:w-full lg:w-[42%]">
                    <span className="text-[#376A66] text-[1.125vw] uppercase md:text-16mb md:pt-[4.26vw] md:leading-[2.15] lg:text-[1.7vw]">
                        {formattedDate} / company news
                    </span>
                    <h3>
                        <Link
                            href={`/news/industry-news/${encodeURIComponent(
                                firstBlog?.slug
                            )}`}
                            className="text-[#394854] font-[800] text-[2vw] leading-[1.25] tracking-tighter mt-[0.5vw] md:text-20mb lg:text-[2.25vw] "
                        >
                            {firstBlog?.title}
                        </Link>
                    </h3>
                    <p
                        className="text-[#394854] leading-[1.44] mt-[1.75vw] text-[1.125vw] md:text-14mb lg:text-[1.75vw]"
                        dangerouslySetInnerHTML={{
                            __html: firstBlog?.excerpt,
                        }}
                    />
                    <Link
                        href={`/news/industry-news/${encodeURIComponent(
                            firstBlog?.slug
                        )}`}
                        className="text-[#394854] block mt-[2.5vw] font-[700] text-[0.8125vw] uppercase leading-[2.57] md:text-18mb lg:text-[1.75vw] lg:mt-[1vw]"
                    >
                        See More +
                    </Link>
                </div>
            </div>
            <div className="mt-[4.625vw] grid grid-cols-3 gap-[1.875vw] md:grid-cols-1 lg:mt-[3vw]">
                {arrBlogs?.map((item) => (
                    <IndustrySuggets blog={item} />
                ))}
            </div>
        </div>
    );
}
