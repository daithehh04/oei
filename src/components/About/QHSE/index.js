import React from "react";
import Achievements from "./Achievements";
import Strives from "./Strives";
import Quality from "./Quality";
import Certified from "./Certified";
import ISO from "./ISO";
import Contact from "@/components/Common/Contact";
import getData from "@/utils/getData";
import { GET_DATA_QHSE_PAGE } from "@/GraphQL/about/queries";
import AchievementMb from "./AchievementMb";
import Loading from "@/components/Common/Loading";

export default async function IndexQHSE() {
    const data = await getData(GET_DATA_QHSE_PAGE);
    const { achivement, info, quality, certificed, iso } =
        data?.data?.page?.aboutQhse;
    if (!data)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-50">
                <Loading />
            </div>
        );
    return (
        <>
            <div className="block md:hidden">
                <Achievements data={achivement} />
            </div>
            <div className="hidden md:block">
                <AchievementMb data={achivement} />
            </div>
            <Strives data={info} />
            <Quality data={quality} />
            <Certified data={certificed} />
            <ISO data={iso} />
            <Contact />
        </>
    );
}
