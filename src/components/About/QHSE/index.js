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

export default async function IndexQHSE() {
    const data = await getData(GET_DATA_QHSE_PAGE);
    const { achivement, info, quality, certificed, iso } =
        data?.data?.page?.aboutQhse;
    return (
        <>
            <div className="hidden md:block">
                <AchievementMb data={achivement} />
            </div>
            <div className="block md:hidden">
                <Achievements data={achivement} />
            </div>
            <Strives data={info} />
            <Quality data={quality} />
            <Certified data={certificed} />
            <ISO data={iso} />
            <Contact />
        </>
    );
}
