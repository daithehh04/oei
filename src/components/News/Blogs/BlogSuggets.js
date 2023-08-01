import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../assets/img/contact.png";

export default function BlogSuggets({ blog }) {
    const urlImg = blog?.featuredImage.node.sourceUrl;

    const dateString = blog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <Link
            href={`/news/blogs/${encodeURIComponent(blog?.slug)}`}
            className="block company-item"
        >
            <div>
                <Image
                    src={urlImg}
                    width={500}
                    height={500}
                    alt={
                        blog?.featuredImage.node?.altText ||
                        blog?.featuredImage.node?.title
                    }
                    className="object-cover h-[13.3125vw] w-[100%] md:h-[37.6vw]"
                />
            </div>
            <div className="info p-[1vw] pt-[1.5vw]">
                <div className="date text-[0.9292vw] font-[400] text-[#376A66] md:text-[2vw] lg:text-[1.55vw]">
                    <span>{formattedDate}</span>{" "}
                    <span className="uppercase">
                        / {blog?.categories?.nodes[0]?.name.slice(0, 4)}
                    </span>
                </div>
                <h3 className="title text-[#394854] font-[800] text-[1.25vw] tracking-tighter !line-clamp-2 min-h-[3.2vw] leading-[1.25] mt-[1vw] md:text-[2.75vw] lg:text-[1.65vw]">
                    {blog?.title}
                </h3>
                <a className="uppercase text-[0.8125vw] font-[700] flex items-end justify-end mt-[1vw] text-[#3A5469] leading-[2.57] md:text-[2vw] lg:mt-0 lg:text-[1.45vw]">
                    See More +
                </a>
            </div>
        </Link>
    );
}
