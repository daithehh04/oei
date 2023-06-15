"use client";
import ListProject from "@/components/Project/ListProject/ListProject";
import React from "react";
import OthersProject from "@/components/Project/ProjectDetail/OthersProject";
import { GET_DATA_CONTACT } from "@/GraphQL/contact/queries";
import { useQuery } from "@apollo/client";
import HeaderSecond from "@/components/Common/HeaderSecond";

export default function Project() {
    const { data, loading, error } = useQuery(GET_DATA_CONTACT);

    if (loading) return;
    if (error) return <div className="text-black">{error.message}</div>;

    const { header } = data?.page?.contact;
    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div>
                <ListProject />
            </div>
        </div>
    );
}
