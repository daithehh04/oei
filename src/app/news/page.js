import { GET_HEADER_NEWS_PAGE } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNews from "@/components/News/ListNews/ListNews";
import getData from "@/utils/getData";
import { useQuery } from "@apollo/client";
import React from "react";

export default async function News() {
    const data = await getData(GET_HEADER_NEWS_PAGE);
    const header = data?.data?.page?.news;
    return (
        <div>
            <HeaderSecond header={header} />
            <ListNews />
        </div>
    );
}
