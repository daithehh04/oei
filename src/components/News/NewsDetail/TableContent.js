"use client";
import Image from "next/image";
import dropdown from "../../../assets/img/drdown.svg";
import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

export default function TableContent() {
    const [tableOfContents, setTableOfContents] = useState([]);
    useLayoutEffect(() => {
        const all = document.querySelector(".content-news");
        const headings = all.querySelectorAll("h3, h4, h5");
        const arr = [];

        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            const title = heading.innerText;
            const slug = "tieu-de-" + (index + 1);

            heading.id = slug;

            arr.push({ level, title, slug });
        });

        setTableOfContents(arr);
    }, []);

    return (
        <div>
            <div className="table-content p-[2vw] bg-[#fff] w-[60%] mb-[2vw] lg:w-full md:p-[4.27vw] md:mt-[7.73vw] md:mb-[6vw] mt-[2vw]">
                <div className="flex items-start justify-between">
                    <span className="text-[2vw] text-[#394854] font-[800] leading-[1.25] tracking-tighter mb-[1.5vw] md:text-[6.4vw] md:mb-[6.4vw] lg:text-[4vw]">
                        Table of Contents
                    </span>
                    <Image
                        src={dropdown}
                        alt="drop-down"
                        width={50}
                        height={50}
                        className="w-[0.75vw] h-[1vw] mt-[0.5vw] object-contain lg:w-[1.45vw] lg:h-[1.85vw] md:w-[2.13vw] md:h-[3.73vw]"
                    />
                </div>
                {/* Table content */}
                <div id="table-of-contents">
                    <ul>
                        {tableOfContents.map((item) => (
                            <li key={item.slug} data-id={item.level}>
                                <a href={`#${item.slug}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
