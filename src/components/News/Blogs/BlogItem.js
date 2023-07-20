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
    const year = String(date.getFullYear());

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <Link
            href={`/news/blogs/${encodeURIComponent(blog?.slug)}`}
            className="block company-item"
        >
            <Image
                src={urlImg}
                width={500}
                height={500}
                alt={
                    blog?.featuredImage.node?.altText ||
                    blog?.featuredImage.node?.title
                }
                className="object-cover h-[20.3vw] lg:h-[30vw] w-[100%] md:h-[53.6vw]"
            />
            <div className="info p-[1vw] pt-[1.5vw] md:p-[4.267vw]">
                <div className="date text-[1.125vw] text-[#394854] font-[400] md:text-12mb lg:text-[1.75vw]">
                    <span>{formattedDate}</span>{" "}
                    <span className="uppercase">
                        / {blog?.categories?.nodes[0]?.name.slice(0, 4)}
                    </span>
                </div>
                <h3 className="title block text-[#394854] font-[800] text-[1.586vw] !line-clamp-2 min-h-[4vw] tracking-tighter leading-[1.25] md:text-18mb lg:text-[2.5vw]">
                    {blog?.title}
                </h3>
                <a className="uppercase cursor-pointer text-[1.11vw] font-[700] mt-[1vw] text-[#3A5469] leading-[2.57] md:text-14mb flex items-end justify-end lg:text-[2vw]">
                    See More +
                </a>
            </div>
        </Link>
    );
}
