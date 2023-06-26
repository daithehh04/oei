import { GET_HEADER_ABOUT_PEOPLE } from "@/GraphQL/about/queries";
import IndexPeople from "@/components/About/People";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import React from "react";

export default async function People() {
    const data = await getData(GET_HEADER_ABOUT_PEOPLE);

    const { header } = data?.data?.page?.aboutPeople;
    return (
        <>
            <HeaderSecond header={header} />
            <main className="pb-[9.375vw] md:pb-[18.4vw]">
                <IndexPeople />
            </main>
        </>
    );
}
