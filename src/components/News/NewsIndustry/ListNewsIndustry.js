"use client";

import React from "react";
import MainNews from "./MainNews";
import IndustryItem from "./IndustryItem";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";
import { GET_ALL_NEWS_INDUSTRY } from "@/GraphQL/news/queries";
import AOS from "aos";

export default function ListNewsIndustry() {
    const [activeButton, setActiveButton] = useState(0);

    const { data, refetch } = useQuery(GET_ALL_NEWS_INDUSTRY, {
        variables: {
            offset: 0,
            size: 6,
        },
    });

    const nodes = data?.posts?.nodes;

    const mainIndustry = nodes?.slice(0, 4);

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
        const element = document.querySelector(".industries");
        element.scrollIntoView();
    }, [activeButton]);
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="content">
            <div className="pt-[6.25vw] mb-[2.5vw] md:mb-[7.46vw]">
                <span
                    className="text-[1.125vw] text-[#376A66] font-[700] leading-normal uppercase tracking-[0.12em] lg:text-[2vw] md:text-[3.73vw]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    News & Event
                </span>
                <h2
                    className="text-60pc font-[800] capitalize tracking-tighter text-primary lg:text-[5vw] md:text-[8vw]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    Industry News
                </h2>
            </div>
            <MainNews mainIndustry={mainIndustry} />
            <div className="industries grid grid-cols-3 gap-x-[2vw] gap-y-[2.5vw] mt-[2.5vw] pb-[3vw] md:grid-cols-1 md:gap-[2.67vw] lg:grid-cols-2">
                {nodes?.map((item) => (
                    <IndustryItem industry={item} />
                ))}
            </div>
            <div className="pagination mt-[3vw] pb-[5vw] text-center  md:mt-[8vw] md:pb-[16vw] lg:mt-[5vw] lg:pb-[8vw]">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="btn cursor-pointer w-[3vw] h-[3vw] rounded-full bg-[#fff] outline-none text-[1.1vw] font-[600] text-[#2b2b2b] mr-[1.5vw] border-none md:w-[10.66vw] md:h-[10.66vw] md:text-16mb md:mr-[4.26vw]  lg:w-[6vw] lg:h-[6vw] lg:text-[2vw]"
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
