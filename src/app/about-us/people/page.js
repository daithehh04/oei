import { GET_HEADER_ABOUT_PEOPLE } from "@/GraphQL/about/queries";
import ListMember from "@/components/About/People/ListMember";
import ListMemberMb from "@/components/About/People/ListMemberMb";
import Management from "@/components/About/People/Management";
import Member from "@/components/About/People/Member";
import Proactive from "@/components/About/People/Proactive";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import React from "react";

export default async function People() {
    const data = await getData(GET_HEADER_ABOUT_PEOPLE);

    const { header } = data?.data?.page?.aboutPeople;
    return (
        <>
            <HeaderSecond header={header} />
            <div className="pb-[9.375vw] md:pb-[18.4vw]">
                <Member />
                <Proactive />
                <Management />
                <div className="block lg:hidden">
                    <ListMember />
                </div>
                <div className="hidden lg:block">
                    <ListMemberMb />
                </div>
            </div>
        </>
    );
}
