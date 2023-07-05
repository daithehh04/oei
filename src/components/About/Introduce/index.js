import React from "react";
import Lorem from "./Lorem";
import Vision from "./Vision";
import Values from "./Values";
import ValuesMb from "./ValuesMb";
import Message from "@/components/Common/Message";
import Dynamic from "./Dynamic";
import OurTeams from "./OurTeams";
import getData from "@/utils/getData";
import { GET_DATA_ABOUT_PAGE } from "@/GraphQL/about/queries";
import Loading from "@/components/Common/Loading";

export default async function IndexIntroduce() {
    const data = await getData(GET_DATA_ABOUT_PAGE);
    const { introduce, vision, value, dynamic, message, manager } =
        data?.data?.page?.aboutIntroduce;
    if (!data)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-50">
                <Loading />
            </div>
        );
    return (
        <div>
            <Lorem data={introduce} />
            <Vision data={vision} />
            <div className="block md:hidden">
                <Values data={value} />
            </div>
            <div className="hidden md:block">
                <ValuesMb data={value} />
            </div>

            <div className="bg-common pt-[16.5vw] mt-[60vw] relative lg:pt-[35vw] md:pt-[190vw] md:mt-[26vw]">
                <div className="absolute top-[-28vw] right-[4.375vw] md:right-[2.667vw] content">
                    <Message data={message} />
                </div>
                <Dynamic data={dynamic} />
                <OurTeams data={manager} />
            </div>
        </div>
    );
}
