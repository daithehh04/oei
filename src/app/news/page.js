"use client";
import { GET_HEADER_NEWS } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNews from "@/components/News/ListNews/ListNews";
import { useQuery } from "@apollo/client";
import React from "react";

export default function News() {
    const { data } = useQuery(GET_HEADER_NEWS);
    const header = data?.page?.news;
    return (
        <div>
            <HeaderSecond header={header} />
            <ListNews />
        </div>
    );
}
