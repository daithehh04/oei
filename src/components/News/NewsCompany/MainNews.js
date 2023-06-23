import React from "react";
import CompanySuggets from "./CompanySuggets";
import Image from "next/image";
import img from "../../../assets/img/company-news.png";

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
    return (
        <div>
            <div>
                <div className="flex gap-x-[1.875vw] justify-between">
                    <div className="left w-[66%] ">
                        <Image
                            src={urlImg}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[40.0625vw] object-cover"
                        />
                        <div className="info">
                            <span className="text-[#394854] text-[1.125vw] leading-[1.9] uppercase mt-[1.5vw]">
                                {formattedDate} / company news
                            </span>
                            <h3 className="text-[#394854] font-[800] text-[2vw] leading-[1.25] tracking-tighter">
                                {firstBlog?.title}
                            </h3>
                            <p
                                className="text-[#394854] mt-[1vw] text-[1.125vw] leading-[1.6]"
                                dangerouslySetInnerHTML={{
                                    __html: firstBlog?.excerpt,
                                }}
                            />
                            <a
                                href="#"
                                className="text-[1.11vw] text-[#3A5469] mt-[1vw] font-[700] uppercase leading-[2.57]"
                            >
                                See More +
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <span className="text-[2vw] font-[800] text-[#394854] leading-[1.25] mb-[1vw]">
                            Most Commented
                        </span>
                        {arrBlogs?.map((item) => (
                            <CompanySuggets news={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
