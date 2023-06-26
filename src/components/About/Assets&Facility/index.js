import React from "react";
import Dynamic from "./Dynamic";
import Facilities from "./Facilities";
import Album from "./Album";
import Equipment from "./Equipment";
import EquipmentMb from "./EquipmentMb";
import Contact from "@/components/Common/Contact";
import Profile from "./Profile";
import getData from "@/utils/getData";
import { GET_DATA_ASSETS_PAGE } from "@/GraphQL/about/queries";

export default async function IndexAssets() {
    const data = await getData(GET_DATA_ASSETS_PAGE);
    const { assets, facilities, album, equipment, profile } =
        data?.data?.page?.aboutAssets;
    return (
        <div>
            <Dynamic data={assets} />
            <Facilities data={facilities} />
            <Album data={album} />
            <div className="md:hidden">
                <Equipment data={equipment} />
            </div>
            <div className="hidden md:block">
                <EquipmentMb data={equipment} />
            </div>
            <Profile data={profile} />
            <div className="pb-[7.86vw] mt-[5vw]">
                <Contact />
            </div>
        </div>
    );
}
