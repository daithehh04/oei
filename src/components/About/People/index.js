import React from "react";
import Member from "./Member";
import Proactive from "./Proactive";
import Management from "./Management";
import ListMember from "./ListMember";
import ListMemberMb from "./ListMemberMb";
import getData from "@/utils/getData";
import { GET_DATA_PEOPLE_PAGE } from "@/GraphQL/about/queries";

export default async function IndexPeople() {
    const data = await getData(GET_DATA_PEOPLE_PAGE);
    const { member, proactive, message, people } =
        data?.data?.page?.aboutPeople;
    return (
        <div>
            <Member data={member} />
            <Proactive data={proactive} />
            <Management data={message} />
            <div className="block lg:hidden">
                <ListMember data={people} />
            </div>
            <div className="hidden lg:block">
                <ListMemberMb data={people} />
            </div>
        </div>
    );
}
