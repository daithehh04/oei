import ListProject from "@/components/Project/ListProject/ListProject";
import React from "react";
import HeaderSecond from "@/components/Common/HeaderSecond";
import { GET_HEADER_PROJECT } from "@/GraphQL/project/queries";
import getData from "@/utils/getData";

export default async function Project() {
    const data = await getData(GET_HEADER_PROJECT);
    const header = data?.data?.page?.headerProject;
    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div>
                <ListProject />
            </div>
        </div>
    );
}
