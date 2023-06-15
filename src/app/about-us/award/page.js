"use client";

import Achievements from "@/components/About/Award/Achievements";
import Certified from "@/components/About/Award/Certified";
import Company from "@/components/About/Award/Company";
import Review from "@/components/About/Award/Review";
import HeaderSecond from "@/components/Common/HeaderSecond";
import { useQuery } from "@apollo/client";
import { GET_DATA_CONTACT } from "@/GraphQL/contact/queries";
import React from "react";

function Award() {
    const { data, loading, error } = useQuery(GET_DATA_CONTACT);

    if (loading) return;
    if (error) return <div className="text-black">{error.message}</div>;

    const { header } = data?.page?.contact;
    return (
        <>
            <HeaderSecond header={header} />
            <main className="award">
                <Certified />
                <Achievements />
                <div className="wrapper-34">
                    <Company />
                    <Review />
                </div>
            </main>
        </>
    );
}

export default Award;
