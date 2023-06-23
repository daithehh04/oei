import { GET_HEADER_COMPANY_NEWS } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNewsCompany from "@/components/News/NewsCompany/ListNewsCompany";
import MainNews from "@/components/News/NewsCompany/MainNews";
import getData from "@/utils/getData";
import React from "react";

export default async function Company() {
    const data = await getData(GET_HEADER_COMPANY_NEWS);

    const { header } = data?.data?.page?.companyNews;
    return (
        <>
            <HeaderSecond header={header} />
            <div className="bg-[#FAFAFA]">
                <ListNewsCompany />
            </div>
        </>
    );
}
