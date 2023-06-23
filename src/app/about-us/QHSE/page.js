import { GET_HEADER_ABOUT_QHSE } from "@/GraphQL/about/queries";
import Drilled from "@/components/About/Introduce/Drilled";
import Achievements from "@/components/About/QHSE/Achievements";
import Certified from "@/components/About/QHSE/Certified";
import ISO from "@/components/About/QHSE/ISO";
import Quality from "@/components/About/QHSE/Quality";
import QualitySlide from "@/components/About/QHSE/QualitySlide";
import Strives from "@/components/About/QHSE/Strives";
import Contact from "@/components/Common/Contact";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import React from "react";

export default async function QHSE() {
    const data = await getData(GET_HEADER_ABOUT_QHSE);

    const { header } = data?.data?.page?.aboutQhse;
    return (
        <>
            <HeaderSecond header={header} />
            <main>
                <Achievements />
                <Strives />
                <Quality />
                <Certified />
                <ISO />
                <Contact />
            </main>
        </>
    );
}
