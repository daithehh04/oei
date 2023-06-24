import { GET_HEADER_ABOUT_ASSETS } from "@/GraphQL/about/queries";
import Album from "@/components/About/Assets&Facility/Album";
import Dynamic from "@/components/About/Assets&Facility/Dynamic";
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
                <Dynamic />
                <Facilities />
                <Album />
                <Profile />
                <div className="pb-[7.86vw] mt-[5vw]">
                    <Contact />
                </div>
            </main>
        </>
    );
}
