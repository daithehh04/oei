import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../assets/img/contact.png";

export default function BlogItem({ blog }) {
    const urlImg = blog?.featuredImage.node.sourceUrl;

    const dateString = blog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="block company-item">
            <Link href={`/news/blogs/${encodeURIComponent(blog?.slug)}`}>
                <Image
                    src={urlImg}
                    width={500}
                    height={500}
                    alt={
                        blog?.featuredImage.node?.altText ||
                        blog?.featuredImage.node?.title
                    }
                    className="object-cover h-[29.75vw] w-[100%] md:h-[53.6vw]"
                />
            </Link>
            <div className="info p-[1vw] pt-[1.5vw] md:p-[4.267vw]">
                <div className="date text-[1.125vw] text-[#394854] font-[400] md:text-12mb lg:text-[1.75vw]">
                    <span>{formattedDate}</span>{" "}
                    <span className="uppercase">
                        / {blog?.categories?.nodes[0]?.name.slice(0, 4)}
                    </span>
                </div>
                <Link
                    href={`/news/blogs/${encodeURIComponent(blog?.slug)}`}
                    className="title block text-[#394854] font-[800] text-[2vw] line-clamp tracking-tighter leading-[1.25] md:text-18mb lg:text-[2.5vw]"
                >
                    {blog?.title}
                </Link>
                <Link
                    href={`/news/blogs/${encodeURIComponent(blog?.slug)}`}
                    className="uppercase text-[1.11vw] font-[700] block mt-[1vw] text-[#3A5469] leading-[2.57] md:text-14mb md:flex md:items-end md:justify-end lg:text-[2vw]"
                >
                    See More +
                </Link>
            </div>
        </div>
    );
}
