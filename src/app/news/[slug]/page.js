"use client";
import { GET_NEWS } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import { useQuery } from "@apollo/client";
import React from "react";

export default function NewDetail(context) {
    const { data } = useQuery(GET_NEWS);
    const nodes = data?.allNews?.nodes;
    const slug = context.params.slug;
    const NewsItem = nodes?.find((e) => e?.slug === slug);

    const background = NewsItem?.featuredImage?.node;
    const title = NewsItem?.title;
    const header = { background, title };

    const dateString = NewsItem?.date;
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div className="content">
                <h2 className="text-[2.875vw] text-primary font-[800] tracking-tighter leading-[1.22] mt-[6.25vw]">
                    {NewsItem?.title}
                </h2>
                <div
                    className="content-newsDetail"
                    dangerouslySetInnerHTML={{ __html: NewsItem?.content }}
                ></div>
            </div>
        </div>
    );
}
