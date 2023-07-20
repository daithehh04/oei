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
import img from "../../../assets/img/bg-common.png";
import Image from "next/image";
import Service from "./Service";

export default async function IndexIntroduce() {
    const data = await getData(GET_DATA_ABOUT_PAGE);
    const { introduce, vision, value, listService, dynamic } =
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

            <div className="pt-[20vw] relative">
                <Service data={listService} />
                <Dynamic data={dynamic} />
                <Image
                    src={img}
                    width={1000}
                    height={1000}
                    alt="img"
                    className="absolute top-0 bottom-0 w-full h-full object-cover left-0 right-0 z-[-1] background-service"
                />
            </div>
        </div>
    );
}
