import { GET_HEADER_INDUSTRY_NEWS } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNewsIndustry from "@/components/News/NewsIndustry/ListNewsIndustry";
import getData from "@/utils/getData";
import React from "react";

export default async function Industry() {
    const data = await getData(GET_HEADER_INDUSTRY_NEWS);

    const { header } = data?.data?.page?.industryNews;
    return (
        <>
            <HeaderSecond header={header} />
            <div className="bg-[#FAFAFA] ">
                <ListNewsIndustry />
            </div>
        </>
    );
}
