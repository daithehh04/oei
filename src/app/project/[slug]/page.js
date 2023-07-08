import { GET_ALL_PROJECTS } from "@/GraphQL/project/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import AlbumProject from "@/components/Project/ProjectDetail/AlbumProject";
import OtherProject from "@/components/Project/ProjectDetail/OtherProject";
import getData from "@/utils/getData";
import React from "react";

import img from "../../../assets/img/about-circle.png";
import Image from "next/image";
import Contact from "@/components/Common/Contact";

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

    const imgsAlbum = projectItem?.projectDetail?.imgs;

    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div className="content md:relative pt-[10.625vw] md:pt-[27.7vw]">
                <div className="flex md:flex-col">
                    <div className="location w-[45.5625vw] relative md:static md:w-full md:pb-[13.33vw]">
                        <span className="text-[2vw] font-[800] leading-[1.41] text-[#3A5469] capitalize lg:text-[3.5vw] md:text-[6.4vw]">
                            {projectItem?.projectDetail?.location}
                        </span>
                        <h2 className="text-[3vw] font-[400] leading-[1.31] text-[#394854] mt-[0.625vw] capitalize md:text-[8vw]">
                            {projectItem?.projectDetail?.titleLocation}
                        </h2>
                        <ul className="grid grid-cols-2 mt-[4.375vw] gap-x-[2.6875vw]">
                            {projectItem?.projectDetail?.repeatLocation?.map(
                                (item) => (
                                    <li className="pt-[1vw] pb-[2vw] border-t border-[#BDBDBD] border-opacity-50 md:pt-[4.27vw] md:pb-[7.4vw]">
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
                            className="w-[77vw] object-cover absolute bottom-[-10%] left-[-30%] md:top-0 md:w-[126vw] md:h-[109vw]"
                        />
                    </div>
                    <div className="tech w-[37.5vw] bg-member ml-auto px-[3.75vw] py-[2.5vw] text-[#fff] md:w-full md:py-[10.67vw]">
                        <span className="text-[2vw] capitalize font-[800] leading-[1.75] tracking-tighter flex justify-center lg:text-[3.5vw] md:text-[6.67vw]">
                            {projectItem?.projectDetail?.tech}
                        </span>
                        <ul className="mt-[2vw]">
                            {projectItem?.projectDetail?.repeatTech?.map(
                                (item) => (
                                    <li className="pt-[1vw] pb-[1.5vw] border-t border-[#fff] border-opacity-50 md:py-[4.27vw]">
                                        <span className="text-[1.25vw] tracking-tighter capitalize font-[700] lg:text-[1.85vw] md:text-[4.26vw]">
                                            {item?.title}
                                        </span>
                                        <p className="text-[1.5vw] font-[400] leading-[1.38] mt-[0.625vw] lg:text-[2vw] md:text-[4.8vw] md:mt-0">
                                            {item?.content}
                                        </p>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <Image
                src={projectItem?.projectDetail?.backgroundDetail?.sourceUrl}
                width={500}
                height={500}
                alt="img"
                className="object-cover content mt-[8.69vw] h-[41vw] md:h-[83.44vw] md:mt-[10.67vw]"
            />
            <div className="w-[67.5%] md:w-[94.66%] ml-auto mr-auto">
                <div
                    className="content-projectDetail"
                    dangerouslySetInnerHTML={{ __html: projectItem?.content }}
                ></div>
            </div>
            <AlbumProject imgsAlbum={imgsAlbum} />
            <Contact />
            <OtherProject projectAll={result} />
        </div>
    );
}
