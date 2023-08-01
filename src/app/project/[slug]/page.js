import { GET_ALL_PROJECTS } from "@/GraphQL/project/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import AlbumProject from "@/components/Project/ProjectDetail/AlbumProject";
import OtherProject from "@/components/Project/ProjectDetail/OtherProject";
import getData from "@/utils/getData";
import React from "react";

import img from "../../../assets/img/about-circle.png";
import bg from "../../../assets/img/bg-common.png";
import Image from "next/image";
import Contact from "@/components/Common/Contact";
import SlideImage from "@/components/Project/ProjectDetail/SlideImage";

export async function generateMetadata({ params }) {
    const data = await getData(GET_ALL_PROJECTS);
    if (!data) return;
    const projectDetail = data?.data?.allProject?.nodes.find(
        (e) => e?.slug === params?.slug
    );
    const { featuredImage, title, excerpt } = projectDetail;
    return {
        title: title,
        description: excerpt,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: title,
            description: excerpt,
            url: process.env.DOMAIN,
            siteName: process.env.SITE_NAME,
            images: [
                {
                    url: featuredImage?.node?.sourceUrl,
                    alt:
                        featuredImage?.node?.altText ||
                        featuredImage?.node?.title,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: excerpt,
            creator: process.env.SITE_NAME,
            images: [
                {
                    url: featuredImage?.node?.sourceUrl,
                    alt:
                        featuredImage?.node?.altText ||
                        featuredImage?.node?.title,
                },
            ],
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export default async function ProjectDetail(context) {
    const data = await getData(GET_ALL_PROJECTS);
    const nodes = data?.data?.allProject?.nodes;
    const slug = context.params.slug;
    const projectItem = nodes?.find((e) => e?.slug === slug);

    const result = nodes?.filter((item) => item?.slug !== projectItem?.slug);

    const background = projectItem?.featuredImage?.node;
    const title = projectItem?.title;
    const header = { background, title };

    const imgsAlbum = projectItem?.projectDetail?.imgProjects;

    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div className="relative pt-[6.87vw] pb-[8.12vw] md:pb-0 md:pt-[27.7vw]">
                <div className="flex md:flex-col gap-[1.87vw] content items-center">
                    <div className="location w-[45.5625vw] relative z-10 md:static md:w-full">
                        <span className="text-[2vw] font-[800] leading-[1.41] text-[#3A5469] capitalize lg:text-[3.5vw] md:text-[6.4vw]">
                            {projectItem?.projectDetail?.location}
                        </span>
                        <h2 className="text-[3vw] font-[400] leading-[1.31] text-[#394854] mt-[0.625vw] capitalize md:text-[8vw]">
                            {projectItem?.projectDetail?.titleLocation}
                        </h2>
                        <ul className="grid grid-cols-2 mt-[4.375vw] gap-x-[1.75vw]">
                            {projectItem?.projectDetail?.repeatLocation?.map(
                                (item, index) => (
                                    <li
                                        key={index}
                                        className="pt-[0.94vw] pb-[1.94vw] border-t border-[#BDBDBD] border-opacity-50 md:pt-[4.27vw] md:pb-[7.4vw]"
                                    >
                                        <span className="text-[1.25vw] text-[#3A5469] font-[700] leading-[2.25] lg:text-[1.85vw] md:text-[3.733vw] md:leading-[1.67]">
                                            {item?.title}
                                        </span>
                                        <p className="text-[1.5vw] text-[#394854] font-[400] leading-[1.38] lg:text-[2vw] md:text-[4.266vw] md:leading-[1.64]">
                                            {item?.content}
                                        </p>
                                    </li>
                                )
                            )}
                        </ul>
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-[77vw] hidden md:block object-cover absolute bottom-[-10%] left-[-30%] md:top-0 md:w-[126vw] md:h-[109vw]"
                        />
                    </div>
                    <div className="w-[44.6875vw] h-[37.75vw] md:w-full md:h-[83.46vw]">
                        <SlideImage
                            dataSlide={projectItem?.projectDetail?.imgs}
                        />
                    </div>
                    <Image
                        src={bg}
                        width={1000}
                        height={1000}
                        alt="bg"
                        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full md:hidden"
                    />
                </div>
            </div>
            <AlbumProject imgsAlbum={imgsAlbum} />
            <div className="w-[67.5%] md:w-[94.66%] ml-auto mr-auto pb-[8.5vw] mt-[5.6vw] md:mt-[16vw]">
                <div
                    className="content-projectDetail"
                    dangerouslySetInnerHTML={{ __html: projectItem?.content }}
                ></div>
            </div>
            <Contact />
            <OtherProject projectAll={result} />
        </div>
    );
}
