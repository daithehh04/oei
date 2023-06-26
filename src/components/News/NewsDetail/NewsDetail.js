import Image from "next/image";
import twitter from "../../../assets/img/twitter.png";
import fb from "../../../assets/img/fb.png";
import linkedin from "../../../assets/img/linkedin.png";

import dropdown from "../../../assets/img/arrow-down.png";
import HeaderSecond from "@/components/Common/HeaderSecond";
import Link from "next/link";
// import React, { useEffect, useState } from "react";

export default async function NewsDetail({ NewsItem }) {
    // const [headings, setHeadings] = useState([]);
    const background = NewsItem?.featuredImage?.node;
    const title = NewsItem?.title;
    const header = { background, title };

    const dateString = NewsItem?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;

    // useEffect(() => {
    //     setTimeout(() => {
    //         var headings = document.querySelectorAll("h3, h4");
    //         setHeadings(headings);

    //         headings.forEach(function (heading, index) {
    //             var level = parseInt(heading.tagName.charAt(1));
    //             var title = heading.innerText;
    //             var slug = "tieu-de-" + (index + 1);

    //             heading.id = slug;
    //         });
    //     }, 2000);
    // }, []);
    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            {/* {JSON.stringify(NewsItem)} */}
            <div className="content-newsDetail">
                <h2 className="text-[2.875vw] text-primary font-[800] tracking-tighter leading-[1.22] mt-[6.25vw] mb-[1vw] md:text-[6.67vw] md:mt-[16vw] lg:text-[4.67vw]">
                    {NewsItem?.title}
                </h2>
                <span className="text-[1.25w] font-[400] leading-[1.69] text-[#376A66] md:text-[4.8vw] md:mt-[2.67vw]">
                    {formattedDate} / EVENT
                </span>
                <div className="w-[100%] h-[1px] bg-neutral-200 mt-[1vw] mb-[2vw]"></div>
                <Image
                    src={NewsItem?.newsDetail?.image?.sourceUrl}
                    width={500}
                    height={500}
                    alt="img"
                    className="h-[35.4375vw] w-full object-cover mt-[2vw] md:h-[50vw] md:mt-[4.63vw]"
                />
                {/* Table content */}
                <div className="table-content p-[2vw] bg-[#fff] w-[60%] mb-[2vw] md:w-full md:p-[4.27vw] md:mt-[7.73vw]">
                    <div className="flex items-center justify-between">
                        <span className="text-[2vw] text-[#394854] font-[800] leading-[1.25] tracking-tighter mb-[1.5vw] md:text-[6.4vw] lg:text-[4vw]">
                            Table of Contents
                        </span>
                        <Image
                            src={dropdown}
                            alt="drop-down"
                            width={50}
                            height={50}
                            className="w-[0.75vw] h-[1vw] object-contain lg:w-[1.35vw] lg:h-[1.85vw] md:w-[2.13vw] md:h-[3.73vw]"
                        />
                    </div>
                    {/* Table content */}
                    {/* <div id="table-of-contents">
                        <ul>
                            {headings.map((heading, index) => {
                                const level = parseInt(
                                    heading.tagName.charAt(1)
                                );
                                const title = heading.innerText;
                                const slug = "tieu-de-" + (index + 1);

                                return (
                                    <li key={slug}>
                                        <a href={`#${slug}`}>{title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div> */}
                    {/* {titles.map((item, index) => (
                        <a href={`#element-${index + 1}`}>
                            <h3
                                className="text-[1.125vw] font-[600] leading-[1.83] text-[#394854] mt-[1vw]"
                                key={index}
                            >
                                {item.textContent}
                            </h3>
                        </a>
                    ))} */}
                </div>

                {/* Content news */}
                <div
                    className="content-news"
                    dangerouslySetInnerHTML={{ __html: NewsItem?.content }}
                ></div>
                <div className="w-[100%] h-[1px] bg-neutral-200 mt-[2vw] mb-[1.5vw] md:mt-[4.27vw] md:mb-[4.8vw]"></div>
                <div className="social flex gap-[0.8125vw] items-center justify-end md:gap-[3.47vw]">
                    <span className="uppercase text-[0.875vw] text-[#394854] font-[700] leading-[1.43] md:text-[3.46vw] lg:text-[2vw]">
                        share on it:
                    </span>
                    <ul className="flex items-center gap-[0.5vw] md:gap-[2.13vw]">
                        <li>
                            <Link href="#">
                                <Image
                                    src={twitter}
                                    alt="twitter"
                                    width={50}
                                    height={50}
                                    className="w-[1vw] h-[1.5vw] object-contain lg:w-[1.75vw] lg:h-[2.5vw] md:w-[5vw] md:h-[6.4vw]"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    src={fb}
                                    alt="fb"
                                    width={50}
                                    height={50}
                                    className="w-[1.5vw] h-[1.5vw] object-contain lg:w-[2.5vw] lg:h-[2.5vw] md:w-[6.4vw] md:h-[6.4vw]"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    src={linkedin}
                                    alt="linkedin"
                                    width={50}
                                    height={50}
                                    className="w-[1.5vw] h-[1.5vw] object-contain lg:w-[2.5vw] lg:h-[2.5vw] md:w-[6.4vw] md:h-[6.4vw]"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
