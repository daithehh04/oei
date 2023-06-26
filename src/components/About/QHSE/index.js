import React from "react";
import Achievements from "./Achievements";
import Strives from "./Strives";
import Quality from "./Quality";
import Certified from "./Certified";
import ISO from "./ISO";
import Contact from "@/components/Common/Contact";
import getData from "@/utils/getData";
import { GET_DATA_QHSE_PAGE } from "@/GraphQL/about/queries";

export default async function IndexQHSE() {
    const data = await getData(GET_DATA_QHSE_PAGE);
    const { achivement, info, quality, certificed, iso } =
        data?.data?.page?.aboutQhse;
    return (
        <>
            <Achievements data={achivement} />
            <Strives data={info} />
            <Quality data={quality} />
            <Certified data={certificed} />
            <ISO data={iso} />
            <Contact />
        </>
    );
}
