"use client";

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import MainNews from "./MainNews";
import { useQuery } from "@apollo/client";
import { GET_ALL_NEWS } from "@/GraphQL/news/queries";

export default function ListNews() {
    const initCategory = ["category1", "category2", "category3"];
    const [activeButton, setActiveButton] = useState(0);
    const [selectedButton, setSelectedButton] = useState(1);

    const [category, setCategory] = useState(initCategory);
    const { data, refetch } = useQuery(GET_ALL_NEWS, {
        variables: {
            categorySlug: category,
            offset: 0,
            size: 9,
        },
    });

    const nodes = data?.allNews?.nodes;
    const firstNews = nodes?.[0];

    const pageInfo = data?.allNews?.pageInfo.offsetPagination.total;
    const totalPages = Math.ceil(pageInfo / 9);

    const handleSelect = (e) => {
        const value = e.target.getAttribute("data-value");
        const idBtn = +e.target.getAttribute("data-btn");
        if (value !== "") {
            setCategory(value);
        } else {
            setCategory(initCategory);
        }
        setSelectedButton(idBtn);
        setActiveButton(0);
    };

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
            <div className="head flex justify-between items-end mb-[3.8125vw]">
                <div className="title">
                    <p className="uppercase text-[1.125vw] tracking-widest text-[#376A66] font-[700]">
                        news & events
                    </p>
                    <h2 className="text capitalize text-[3.75vw] font-[800]">
                        Follow Our Journey
                    </h2>
                </div>
                <ul className="filter flex gap-[1.5vw]">
                    <li
                        className={`filter-item text-[0.875vw] w-[8.25vw] py-[0.71875vw] text-center ${
                            selectedButton === 1 ? `active` : ``
                        }`}
                        data-value=""
                        data-btn="1"
                        onClick={handleSelect}
                    >
                        All News
                    </li>
                    <li
                        className={`filter-item text-[0.875vw] w-[8.25vw] py-[0.71875vw] text-center ${
                            selectedButton === 2 ? `active` : ``
                        }`}
                        data-value="category1"
                        data-btn="2"
                        onClick={handleSelect}
                    >
                        Event
                    </li>
                    <li
                        className={`filter-item text-[0.875vw] w-[8.25vw] py-[0.71875vw] text-center ${
                            selectedButton === 3 ? `active` : ``
                        }`}
                        data-value="category2"
                        data-btn="3"
                        onClick={handleSelect}
                    >
                        Company News
                    </li>
                    <li
                        className={`filter-item text-[0.875vw] w-[8.25vw] py-[0.71875vw] text-center ${
                            selectedButton === 4 ? `active` : ``
                        }`}
                        data-value="category3"
                        data-btn="4"
                        onClick={handleSelect}
                    >
                        Industry
                    </li>
                </ul>
            </div>
            <MainNews news={firstNews} />

            <div className="list-news grid grid-cols-3 gap-[2vw] mt-[5.4375vw]">
                {nodes?.map((item) => (
                    <NewsItem newsItem={item} />
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="btn"
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
