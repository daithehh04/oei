import { GET_HEADER_ABOUT_ASSETS } from "@/GraphQL/about/queries";
import IndexAssets from "@/components/About/Assets&Facility";
import Album from "@/components/About/Assets&Facility/Album";
import Dynamic from "@/components/About/Assets&Facility/Dynamic";
import Equipment from "@/components/About/Assets&Facility/Equipment";
import EquipmentMb from "@/components/About/Assets&Facility/EquipmentMb";
import Facilities from "@/components/About/Assets&Facility/Facilities";
import Profile from "@/components/About/Assets&Facility/Profile";
import Contact from "@/components/Common/Contact";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import React from "react";

export default async function Assets() {
    const data = await getData(GET_HEADER_ABOUT_ASSETS);

    const { header } = data?.data?.page?.aboutAssets;
    return (
        <>
            <HeaderSecond header={header} />
            <main>
                <IndexAssets />
            </main>
        </>
    );
}
