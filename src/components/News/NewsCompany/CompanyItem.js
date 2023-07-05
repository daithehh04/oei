import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function CompanyItem({ company }) {
    const urlImg = company?.featuredImage.node.sourceUrl;

    const dateString = company?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <Link
            href={`/news/company-news/${encodeURIComponent(company?.slug)}`}
            className="company-item"
        >
            <div>
                <Image
                    src={urlImg}
                    width={500}
                    height={500}
                    alt={
                        company?.featuredImage.node?.altText ||
                        company?.featuredImage.node?.title
                    }
                    className="object-cover h-[29.75vw] w-[100%] md:h-[53.6vw]"
                />
            </div>
            <div className="info p-[1vw] pt-[1.5vw] md:p-[4.26vw]">
                <div className="date text-[1.25vw] font-[400] md:text-12mb lg:text-[2vw]">
                    <span>{formattedDate}</span>{" "}
                    <span className="uppercase">
                        / {company?.categories?.nodes[0]?.name}
                    </span>
                </div>
                <h3 className="title block text-[#394854] mt-[0.5vw] font-[800] text-[2vw] line-clamp tracking-tighter leading-[1.25] md:text-18mb lg:text-[2.5vw]">
                    {company?.title}
                </h3>
                <Link
                    href={`/news/company-news/${encodeURIComponent(
                        company?.slug
                    )}`}
                    className="uppercase text-[1.11vw] font-[700] block mt-[1vw] text-[#3A5469] leading-[2.57] md:text-14mb md:flex md:items-end md:justify-end lg:text-[2vw]"
                >
                    See More +
                </Link>
            </div>
        </Link>
    );
}
