"use client";

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import MainNews from "./MainNews";
import { useQuery } from "@apollo/client";
import { GET_ALL_NEWS_EVENTS } from "@/GraphQL/news/queries";

export default function ListNews() {
    const [activeButton, setActiveButton] = useState(0);

    const { data, refetch } = useQuery(GET_ALL_NEWS_EVENTS, {
        variables: {
            offset: 0,
            size: 9,
        },
    });

    const nodes = data?.posts?.nodes;

    const firstNews = nodes?.[0];

    const pageInfo = data?.posts?.pageInfo.offsetPagination.total;
    const totalPages = Math.ceil(pageInfo / 9);

    const handleClick = (buttonIdex) => {
        setActiveButton(buttonIdex);
        refetch({
            offset: buttonIdex * 9,
            size: 9,
        });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeButton]);
    return (
        <div className="list-news content pt-[11vw]">
            <div className="head">
                <div className="mb-[2.5vw] md:mb-[9.6vw]">
                    <san className="text-[1.125vw] text-[#376A66] font-[700] leading-normal uppercase tracking-[0.12] lg:text-[2vw] md:text-[3.73vw]">
                        News & Event
                    </san>
                    <h2 className="text-60pc font-[800] capitalize tracking-tighter text-primary lg:text-[5vw] md:hidden">
                        Follow Us
                    </h2>
                    <h2 className="text-[8vw] leading-[1.167] font-[800] capitalize tracking-tighter text-primary hidden md:block">
                        Follow Our Journey
                    </h2>
                </div>
            </div>
            <MainNews news={firstNews} />

            <div className="list-news grid grid-cols-3 gap-[2vw] mt-[5.4375vw] md:grid-cols-1 md:gap-[2.67vw] lg:grid-cols-2">
                {nodes && nodes?.map((item) => <NewsItem newsItem={item} />)}
            </div>
            <div className="pagination mt-[3vw] pb-[5vw] text-center md:mt-[8vw] md:pb-[16vw] lg:mt-[5vw] lg:pb-[8vw]">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="btn cursor-pointer w-[3vw] h-[3vw] rounded-full bg-[#fff] outline-none text-[1.1vw] font-[600] text-[#2b2b2b] mr-[1.5vw] border-none md:w-[10.66vw] md:h-[10.66vw] md:text-16mb md:mr-[4.26vw]  lg:w-[6vw] lg:h-[6vw] lg:text-[2vw] "
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
