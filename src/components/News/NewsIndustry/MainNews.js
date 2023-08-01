import React, { useEffect } from "react";
import IndustrySuggets from "./IndustrySuggets";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

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
            className="main-industry"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="flex gap-x-[1.875vw] justify-between md:flex-col">
                <div className="w-[66%] md:w-full lg:w-[58%]">
                    <Image
                        src={urlImg}
                        width={500}
                        height={500}
                        alt={
                            firstBlog?.featuredImage.node?.altText ||
                            firstBlog?.featuredImage.node?.title
                        }
                        className="w-full h-[30.4375vw] object-cover md:h-[70.93vw]"
                    />
                </div>
                <div className="info w-[34%] md:w-full lg:w-[42%]">
                    <span className="text-[#376A66] text-[1.125vw] uppercase md:text-16mb md:pt-[4.26vw] md:leading-[2.15] lg:text-[1.7vw]">
                        {formattedDate}{" "}
                        <span className="uppercase">
                            / {firstBlog?.categories?.nodes[0]?.name}
                        </span>
                    </span>
                    <h3>
                        <Link
                            href={`/news/industry-news/${encodeURIComponent(
                                firstBlog?.slug
                            )}`}
                            className="text-[#394854] block font-[800] text-[2vw] !line-clamp-4 leading-[1.25] tracking-tighter mt-[0.5vw] md:text-20mb lg:text-[2.25vw] "
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
                        className="text-[#394854] block mt-[2.5vw] font-[700] text-[1.12vw] uppercase leading-[2.57] md:text-18mb lg:text-[1.75vw] lg:mt-[1vw]"
                    >
                        See More +
                    </Link>
                </div>
            </div>
            <div className="mt-[4.625vw] grid grid-cols-3 gap-[1.875vw] md:grid-cols-1 lg:mt-[3vw]">
                {arrBlogs?.map((item, index) => (
                    <IndustrySuggets blog={item} key={index} />
                ))}
            </div>
        </div>
    );
}
