"use client";

import React, { useState } from "react";
import MainNews from "./MainNews";
import CompanyItem from "./CompanyItem";
import { useQuery } from "@apollo/client";
import { GET_ALL_NEWS_COMPANY } from "@/GraphQL/news/queries";
import { useEffect } from "react";

export default function ListNewsCompany() {
    const [activeButton, setActiveButton] = useState(0);

    const { data, refetch } = useQuery(GET_ALL_NEWS_COMPANY, {
        variables: {
            offset: 0,
            size: 6,
        },
    });

    const nodes = data?.posts?.nodes;

    const mainCompany = nodes?.slice(0, 6);

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
        window.scrollTo(0, 0);
    }, [activeButton]);
    return (
        <div className="content">
            <div className="pt-[6.25vw] mb-[2.5vw]">
                <san className="text-[1.125vw] text-[#376A66] font-[700] leading-normal uppercase tracking-[0.12em]">
                    News & Event
                </san>
                <h2 className="text-60pc font-[800] capitalize tracking-tighter text-primary">
                    Company News
                </h2>
            </div>
            <MainNews mainCompany={mainCompany} />
            <div>
                <div className="mt-[6.25vw] mb-[2.5vw]">
                    <san className="text-[1.125vw] text-[#376A66] font-[700] leading-normal uppercase tracking-[0.12]">
                        News & Event
                    </san>
                    <h2 className="text-60pc font-[800] capitalize tracking-tighter text-primary">
                        article List
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-x-[2vw] gap-y-[2.5vw] ">
                    {nodes?.map((item) => (
                        <CompanyItem company={item} />
                    ))}
                </div>
                <div className="pagination mt-[3vw] pb-[5vw] text-center ">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            className="btn cursor-pointer w-[3vw] h-[3vw] rounded-full bg-[#fff] outline-none text-[1.1vw] font-[600] text-[#2b2b2b] mr-[1.5vw] border-none"
                            key={index}
                            onClick={() => handleClick(index)}
                            style={{
                                backgroundColor:
                                    activeButton === index ? "#4ca757" : "#fff",
                                color:
                                    activeButton === index ? "#fff" : "#4ca757",
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
