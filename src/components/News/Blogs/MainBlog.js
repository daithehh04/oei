import React from "react";
import BlogSuggets from "./BlogSuggets";
import Image from "next/image";
import img from "../../../assets/img/contact.png";
import Link from "next/link";

export default function MainBlog({ mainBlogs }) {
    const firstBlog = mainBlogs?.[0];
    const arrBlogs = mainBlogs?.slice(1, 5);
    const urlImg = firstBlog?.featuredImage.node.sourceUrl;

    const dateString = firstBlog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="main-blog">
            <div className="flex gap-[1.875vw] md:flex-col">
                <div className="item w-[50%] md:w-full">
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
                    <div className="info">
                        <span className="text-[#376A66] text-[1.125vw] uppercase mt-[1.5vw] md:text-16mb md:mt-[4.26vw] lg:text-[1.75vw]">
                            {formattedDate}{" "}
                            <span className="uppercase">
                                /{" "}
                                {firstBlog?.categories?.nodes[0]?.name.slice(
                                    0,
                                    4
                                )}
                            </span>
                        </span>
                        <h3>
                            <Link
                                href={`/news/blogs/${encodeURIComponent(
                                    firstBlog?.slug
                                )}`}
                                className="text-[#394854] font-[800] text-[2vw] leading-[1.25] tracking-tighter mt-[0.5vw] md:text-20mb lg:text-[2.5vw]"
                            >
                                {firstBlog?.title}
                            </Link>
                        </h3>
                        <p
                            className="text-[#394854] leading-[1.44] mt-[1.5vw] text-[1.125vw] md:text-14mb lg:text-[1.875vw]"
                            dangerouslySetInnerHTML={{
                                __html: firstBlog?.excerpt,
                            }}
                        />
                        <Link
                            href={`/news/blogs/${encodeURIComponent(
                                firstBlog?.slug
                            )}`}
                            className="text-[#394854] md:mb-[4.27vw] font-[700] text-[1.11vw] block uppercase leading-[2.57] mt-[1vw] md:text-18mb lg:text-[2vw]"
                        >
                            See More +
                        </Link>
                    </div>
                </div>
                <div className="w-[50%] grid grid-cols-2 gap-x-[1.875vw] gap-y-[1.5vw] md:w-full">
                    {arrBlogs?.map((item) => (
                        <BlogSuggets blog={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
