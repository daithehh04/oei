"use client";
import Drilled from "@/components/About/Introduce/Drilled";
import Dynamic from "@/components/About/Introduce/Dynamic";
import Message from "@/components/Common/Message";
import OurTeams from "@/components/About/Introduce/OurTeams";
import Values from "@/components/About/Introduce/Values";
import { useQuery } from "@apollo/client";
import React from "react";
import Vision from "@/components/About/Introduce/Vision";
import { GET_HEADER_ABOUT_INTRODUCE } from "@/GraphQL/about/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";

function Introduce() {
    const { data, loading, error } = useQuery(GET_HEADER_ABOUT_INTRODUCE);

    if (loading) return;
    if (error) return <div className="text-black">{error.message}</div>;

    const { header } = data?.page?.aboutIntroduce;
    return (
        <>
            <HeaderSecond header={header} />
            <main>
                <Vision />
                <Values />
                <Drilled />
                <div className="content">
                    <Message />
                </div>
                <Dynamic />
                <OurTeams />
            </main>
        </>
    );
}

export default Introduce;
