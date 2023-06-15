"use client";
import Drilled from "@/components/About/Introduce/Drilled";
import Dynamic from "@/components/About/Introduce/Dynamic";
import Message from "@/components/Common/Message";
import OurTeams from "@/components/About/Introduce/OurTeams";
import Solution from "@/components/About/Introduce/Solution";
import Values from "@/components/About/Introduce/Values";
import { useQuery } from "@apollo/client";
import { GET_DATA_CONTACT } from "@/GraphQL/contact/queries";
import React from "react";
import Header from "@/components/About/Introduce/Header";
import Vision from "@/components/About/Introduce/Vision";

function Introduce() {
    const { data, loading, error } = useQuery(GET_DATA_CONTACT);

    if (loading) return;
    if (error) return <div className="text-black">{error.message}</div>;

    const { header } = data?.page?.contact;
    return (
        <>
            <Header header={header} />
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
