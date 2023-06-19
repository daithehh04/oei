import { GET_ALL_PROJECTS } from "@/GraphQL/project/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import AlbumProject from "@/components/Project/ProjectDetail/AlbumProject";
import OtherProject from "@/components/Project/ProjectDetail/OtherProject";
import getData from "@/utils/getData";
import { useQuery } from "@apollo/client";
import React from "react";

export default async function ProjectDetail(context) {
    const data = await getData(GET_ALL_PROJECTS);
    const nodes = data?.data?.allProject?.nodes;
    const slug = context.params.slug;
    const projectItem = nodes?.find((e) => e?.slug === slug);

    const background = projectItem?.featuredImage?.node;
    const title = projectItem?.title;
    const header = { background, title };

    const imgsAlbum = projectItem?.projectDetail?.imgs;

    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div className="content mt-[10.625vw] mb-[8.75vw]">
                <div className="flex">
                    <div className="location w-[45.5625vw]">
                        <span className="text-[2vw] font-[800] leading-[1.41] text-[#3A5469] capitalize">
                            {projectItem?.projectDetail?.location}
                        </span>
                        <h2 className="text-[3vw] font-[400] leading-[1.31] text-[#394854] mt-[0.625vw] capitalize">
                            {projectItem?.projectDetail?.titleLocation}
                        </h2>
                        <ul className="grid grid-cols-2 mt-[4.375vw] gap-x-[2.6875vw]">
                            {projectItem?.projectDetail?.repeatLocation?.map(
                                (item) => (
                                    <li className="py-[1vw] border-t border-[#BDBDBD]">
                                        <span className="text-[1.25vw] text-[#3A5469] font-[700] leading-[2.25]">
                                            {item?.title}
                                        </span>
                                        <p className="text-[1.5vw] text-[#394854] font-[400] leading-[1.38]">
                                            {item?.content}
                                        </p>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="tech w-[37.5vw] bg-member ml-auto px-[3.75vw] py-[2.5vw] text-[#fff]">
                        <span className="text-[2vw] capitalize font-[800] leading-[1.75] tracking-tighter flex justify-center">
                            {projectItem?.projectDetail?.tech}
                        </span>
                        <ul className="mt-[2vw]">
                            {projectItem?.projectDetail?.repeatTech.map(
                                (item) => (
                                    <li className="pt-[1vw] pb-[1.5vw] border-t border-[#fff]">
                                        <span className="text-[1.25vw] tracking-tighter capitalize font-[700]">
                                            {item?.title}
                                        </span>
                                        <p className="text-[1.5vw] font-[400] leading-[1.38] mt-[0.625vw]">
                                            {item?.content}
                                        </p>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content">
                <div
                    className="content-projectDetail"
                    dangerouslySetInnerHTML={{ __html: projectItem?.content }}
                ></div>
            </div>
            <AlbumProject imgsAlbum={imgsAlbum} />
            <OtherProject projectAll={nodes} />
        </div>
    );
}
