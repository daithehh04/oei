"use client";
import ListProject from "@/components/Project/ListProject/ListProject";
import React from "react";
import OthersProject from "@/components/Project/ProjectDetail/OthersProjectSlide";
import { GET_DATA_CONTACT } from "@/GraphQL/contact/queries";
import { useQuery } from "@apollo/client";
import HeaderSecond from "@/components/Common/HeaderSecond";
import { GET_HEADER_PROJECT } from "@/GraphQL/project/queries";

export default function Project() {
    const { data } = useQuery(GET_HEADER_PROJECT);

    const header = data?.page?.headerProject;
    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div>
                <ListProject />
            </div>
        </div>
    );
}
