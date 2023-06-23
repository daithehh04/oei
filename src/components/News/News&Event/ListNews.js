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
                <div className="mb-[2.5vw]">
                    <san className="text-[1.125vw] text-[#376A66] font-[700] leading-normal uppercase tracking-[0.12]">
                        News & Event
                    </san>
                    <h2 className="text-60pc font-[800] capitalize tracking-tighter text-primary">
                        Follow Us
                    </h2>
                </div>
            </div>
            <MainNews news={firstNews} />

            <div className="list-news grid grid-cols-3 gap-[2vw] mt-[5.4375vw]">
                {nodes && nodes?.map((item) => <NewsItem newsItem={item} />)}
            </div>
            <div className="pagination mt-[3vw] pb-[5vw] text-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="btn cursor-pointer w-[3vw] h-[3vw] rounded-full bg-[#fff] outline-none text-[1.1vw] font-[600] text-[#2b2b2b] mr-[1.5vw] border-none"
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
