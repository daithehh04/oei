"use client";

import React from "react";
import MainBlog from "./MainBlog";
import BlogItem from "./BlogItem";
import { useState } from "react";
import { GET_ALL_NEWS_BLOGS } from "@/GraphQL/news/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function ListBlog() {
    const [activeButton, setActiveButton] = useState(0);

    const { data, refetch } = useQuery(GET_ALL_NEWS_BLOGS, {
        variables: {
            offset: 0,
            size: 6,
        },
    });

    const nodes = data?.posts?.nodes;

    const mainBlogs = nodes?.slice(0, 5);

    const pageInfo = data?.posts?.pageInfo.offsetPagination.total;
    const totalPages = Math.ceil(pageInfo / 6);

    const handleClick = (buttonIdex) => {
        setActiveButton(buttonIdex);
        refetch({
            offset: buttonIdex * 6,
            size: 6,
        });
    };
    useEffect(() => {
        const element = document.querySelector(".content");
        element.scrollIntoView();
        // window.scrollTo(0, 0);
    }, [activeButton]);
    return (
        <div className="content">
            <div className="pt-[6.25vw] mb-[2.5vw] md:mb-[9.6vw]">
                <san className="text-[1.125vw] text-[#376A66] font-[700] leading-normal uppercase tracking-[0.12em] lg:text-[2vw] md:text-[3.73vw]">
                    News & Event
                </san>
                <h2 className="text-60pc font-[800] capitalize tracking-tighter text-primary lg:text-[5vw] md:text-[8vw]">
                    Blogs
                </h2>
            </div>
            <MainBlog mainBlogs={mainBlogs} />
            <div className="grid grid-cols-2 gap-x-[2vw] gap-y-[2.5vw] mt-[2.5vw] md:mt-[6.4vw] md:grid-cols-1 md:gap-[2.67vw]">
                {nodes?.map((item) => (
                    <BlogItem blog={item} />
                ))}
            </div>
            <div className="pagination mt-[3vw] pb-[5vw] text-center md:mt-[6.4vw] md:pb-[16vw] lg:mt-[5vw] lg:pb-[8vw]">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="btn cursor-pointer w-[3vw] h-[3vw] rounded-full bg-[#fff] outline-none text-[1.1vw] font-[600] text-[#2b2b2b] mr-[1.5vw] border-none md:w-[10.66vw] md:h-[10.66vw] md:text-16mb md:mr-[4.26vw] lg:w-[6vw] lg:h-[6vw] lg:text-[2vw]"
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            backgroundColor:
                                activeButton === index ? "#4ca757" : "#fff",
                            color: activeButton === index ? "#fff" : "#4ca757",
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
