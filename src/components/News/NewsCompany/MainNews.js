import React, { useEffect } from "react";
import CompanySuggets from "./CompanySuggets";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

export default function MainNews({ mainCompany }) {
    const firstBlog = mainCompany?.[0];
    const arrBlogs = mainCompany?.slice(1, 6);
    const urlImg = firstBlog?.featuredImage.node.sourceUrl;

    const dateString = firstBlog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        AOS.init({
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            },
        });
    }, []);
    return (
        <div
            className="main-company flex gap-x-[1.875vw] justify-between md:flex-col"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Link
                href={`/news/company-news/${encodeURIComponent(
                    firstBlog?.slug
                )}`}
                className="left w-[66%] md:w-full md:mb-[10.66vw]"
            >
                <Image
                    src={urlImg}
                    width={500}
                    height={500}
                    alt={
                        firstBlog?.featuredImage.node?.altText ||
                        firstBlog?.featuredImage.node?.title
                    }
                    className="w-full h-[40.0625vw] object-cover md:h-[70.93vw]"
                />
                <div className="info">
                    <span className="text-[#394854] text-[1.125vw] leading-[1.9] uppercase mt-[1.5vw] md:mt-[4.26vw] md:text-16mb lg:text-[1.75vw]">
                        {formattedDate}{" "}
                        <span className="uppercase">
                            / {firstBlog?.categories?.nodes[0]?.name}
                        </span>
                    </span>
                    <h3 className="title text-[#394854] font-[800] text-[2vw] leading-[1.25] tracking-tighter md:text-20mb lg:text-[2.5vw] line-clamp-3">
                        {firstBlog?.title}
                    </h3>
                    <p
                        className="text-[#394854] mt-[1vw] text-[1.125vw] leading-[1.6] md:text-14mb lg:text-[1.75vw]"
                        dangerouslySetInnerHTML={{
                            __html: firstBlog?.excerpt,
                        }}
                    />
                    <Link
                        href={`/news/company-news/${encodeURIComponent(
                            firstBlog?.slug
                        )}`}
                        className="text-[1.11vw] text-[#3A5469] mt-[1vw] font-[700] uppercase leading-[2.57] md:text-18mb lg:text-[1.875vw]"
                    >
                        See More +
                    </Link>
                </div>
            </Link>
            <div className="right md:w-full">
                <span className="text-[2vw] font-[800] text-[#394854] leading-[1.25] mb-[1vw] md:text-24mb lg:text-[3vw]">
                    Most Commented
                </span>
                {arrBlogs?.map((item, index) => (
                    <CompanySuggets news={item} key={index} />
                ))}
            </div>
        </div>
    );
}
