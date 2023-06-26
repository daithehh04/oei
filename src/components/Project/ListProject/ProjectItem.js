import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectItem({ projectItem }) {
    const urlImg = projectItem?.featuredImage.node.sourceUrl;
    return (
        <div className="relative project-item">
            <Link
                href={`project/${encodeURIComponent(projectItem?.slug)}`}
                className="block h-[32.5vw] md:h-[54.4vw] img-prj"
            >
                <Image
                    src={urlImg}
                    className="w-[100%] h-[100%] object-cover "
                    alt="img"
                    width={500}
                    height={500}
                />
            </Link>
            <div className="info p-[1.5vw] bg-[#fff] md:pb-[6.4vw] md:pt-[4vw]">
                <p className="text-[1.125vw] font-[400] leading-[1.44] text-[#394854] uppercase lg:text-[1.75vw] md:text-[3.2vw]">
                    {projectItem?.projectDetail?.project?.name}
                </p>
                <Link href={`project/${encodeURIComponent(projectItem?.slug)}`}>
                    <h3 className="pt-[0.625vw] text-[2vw] font-[700] leading-[1.25] tracking-tighter title-prj capitalize lg:text-[2.75vw] md:text-[5.33vw]">
                        {projectItem?.title}
                    </h3>
                    <p className="hidden md:block md:!line-clamp-3 md:text-[3.73vw] text-[#394854] md:mt-[1.6vw] md:mb-[4.27vw]">
                        {projectItem?.projectDetail?.project?.desc}
                    </p>
                </Link>
                <div className="flex items-center mt-[1vw] gap-[3.06vw] lg:flex-wrap lg:gap-x-0 md:flex-wrap md:gap-y-[2.67vw] md:gap-x-0">
                    {projectItem?.projectDetail?.project?.repeatInfo?.map(
                        (item, index) => (
                            <div
                                className="owner flex flex-col text-[#394854] lg:w-[50%] md:w-[50%] "
                                key={index}
                            >
                                <span className="text-[0.875vw] font-[400] lg:text-[1.75vw] md:text-[3.2vw] md:leading-[1.75]">
                                    {item?.title}
                                </span>
                                <span className="text-[1.25vw] font-[600] leading-[1.3] lg:text-[2vw] md:text-[3.73vw]">
                                    {item?.content}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="absolute top-0 left-0 desc md:hidden">
                <p className="text-18pc leading-normal text-[#fff] pt-[2.5vw] pl-[1.5vw] w-[37vw] lg:text-[2vw] lg:w-full lg:pr-[1vw] lg:line-clamp-4">
                    {projectItem?.projectDetail?.project?.desc}
                </p>
                <a
                    href={`project/${encodeURIComponent(projectItem?.slug)}`}
                    className="!text-[#fff] uppercase block text-18pc font-[700] pl-[1.5vw] leading-[1.8] mt-[0.75vw] lg:text-[2vw]"
                >
                    see more +
                </a>
            </div>
        </div>
    );
}
