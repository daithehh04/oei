"use client";

import React from "react";
import MainBlog from "./MainBlog";
import BlogItem from "./BlogItem";
import { useState } from "react";
import { GET_ALL_NEWS_BLOGS } from "@/GraphQL/news/queries";
import { useQuery } from "@apollo/client";
import AOS from "aos";
import { useEffect } from "react";
import Loading from "@/components/Common/Loading";
import { useRef } from "react";
import CategoryNews from "@/components/Common/CategoryNews";

export default function ListBlog({ titles, mainBlog, othersNews }) {
    const [activeButton, setActiveButton] = useState(0);

    const { data, refetch } = useQuery(GET_ALL_NEWS_BLOGS, {
        variables: {
            offset: 0,
            size: 9,
        },
    });

    const nodes = data?.posts?.nodes;

    const pageInfo = data?.posts?.pageInfo.offsetPagination.total;
    const totalPages = Math.ceil(pageInfo / 9);

    const handleClick = (buttonIdex) => {
        setActiveButton(buttonIdex);
        refetch({
            offset: buttonIdex * 9,
            size: 9,
        });
    };
    const eleRef = useRef();
    useEffect(() => {
        eleRef?.current?.scrollIntoView();
    }, [activeButton]);
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        AOS.refresh();
    }, []);
    AOS.init({
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        },
    });

    // others News img
    const imgNews = [
        othersNews.newsEvent.sourceUrl,
        othersNews.companyNews.sourceUrl,
        othersNews.industryNews.sourceUrl,
    ];
    // const typeNews = ["news event", "company news", "industry news"];
    const typeNews = [
        {
            title: "news event",
            slug: "news&event",
        },
        {
            title: "company news",
            slug: "company-news",
        },
        {
            title: "industry news",
            slug: "industry-news",
        },
    ];
    if (!data)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-50">
                <Loading />
            </div>
        );
    return (
        <div className="content" ref={eleRef}>
            <div className="pt-[6.25vw] mb-[2.5vw] md:mb-[9.6vw]">
                <span
                    className="text-[1.125vw] text-[#376A66] font-[700] leading-normal uppercase tracking-[0.12em] lg:text-[2vw] md:text-[3.73vw]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    {titles?.title}
                </span>
                <h2
                    className="text-60pc font-[800] capitalize tracking-tighter text-primary lg:text-[5vw] md:text-[8vw]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    {titles?.subTitle}
                </h2>
            </div>
            <MainBlog mainBlogs={mainBlog} />
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-x-[2vw] gap-y-[2.5vw] mt-[2.5vw] md:mt-[6.4vw] md:grid-cols-1 md:gap-[2.67vw]">
                {nodes?.map((item, index) => (
                    <div
                        data-aos-once="true"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        key={index}
                    >
                        <BlogItem blog={item} />
                    </div>
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
            <CategoryNews imgNews={imgNews} typeNews={typeNews} />
        </div>
    );
}
