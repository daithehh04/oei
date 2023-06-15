"use client";

import { GET_DATA_CONTACT } from "@/GraphQL/contact/queries";
import Member from "@/components/About/People/Member";
import HeaderSecond from "@/components/Common/HeaderSecond";
import { useQuery } from "@apollo/client";
import React from "react";

function People() {
    const { data, loading, error } = useQuery(GET_DATA_CONTACT);

    if (loading) return;
    if (error) return <div className="text-black">{error.message}</div>;

    const { header } = data?.page?.contact;
    return (
        <>
            <HeaderSecond header={header} />
            <div>
                <Member />
            </div>
        </>
    );
}

export default People;
