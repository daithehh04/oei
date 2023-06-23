import { GET_HEADER_NEWS_PAGE } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNews from "@/components/News/News&Event/ListNews";
import getData from "@/utils/getData";
import React from "react";

export default async function Event() {
    const data = await getData(GET_HEADER_NEWS_PAGE);
    const header = data?.data?.page?.news;
    return (
        <div>
            <HeaderSecond header={header} />
            <div className="bg-[#FAFAFA]">
                <ListNews />
            </div>
        </div>
    );
}
