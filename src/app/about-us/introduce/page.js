import Dynamic from "@/components/About/Introduce/Dynamic";
import Message from "@/components/Common/Message";
import OurTeams from "@/components/About/Introduce/OurTeams";
import Values from "@/components/About/Introduce/Values";
import React from "react";
import Vision from "@/components/About/Introduce/Vision";
import { GET_HEADER_ABOUT_INTRODUCE } from "@/GraphQL/about/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import Lorem from "@/components/About/Introduce/Lorem";
import getData from "@/utils/getData";
import ValuesMb from "@/components/About/Introduce/ValuesMb";

export default async function Introduce() {
    const data = await getData(GET_HEADER_ABOUT_INTRODUCE);

    const { header } = data?.data?.page?.aboutIntroduce;
    return (
        <>
            <HeaderSecond header={header} />
            <main>
                <Lorem />
                <Vision />
                <div className="block md:hidden">
                    <Values />
                </div>
                <div className="hidden md:block">
                    <ValuesMb />
                </div>
                <div className="content  mt-[33vw]">
                    <Message />
                </div>
                <Dynamic />
                <OurTeams />
            </main>
        </>
    );
}
