import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectItem({ projectItem }) {
    const urlImg = projectItem?.featuredImage.node.sourceUrl;
    return (
        <div className="relative project-item">
            <Link
                href={`/project/${encodeURIComponent(projectItem?.slug)}`}
                className="block h-[21.5625vw] lg:h-[32vw] md:h-[54.4vw] img-prj relative"
            >
                <Image
                    src={urlImg}
                    className="w-[100%] h-[100%] object-cover "
                    alt={
                        projectItem?.featuredImage.node?.altText ||
                        projectItem?.featuredImage.node?.title
                    }
                    width={500}
                    height={500}
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 overlay-img"></div>
            </Link>
            <div className="info p-[1.5vw] bg-[#fff] md:pb-[6.4vw] md:pt-[4vw]">
                <p className="text-[1vw] font-[400] leading-[1.44] text-[#394854] uppercase lg:text-[1.75vw] md:text-[3.2vw]">
                    {projectItem?.projectDetail?.project?.name}
                </p>
                <Link
                    href={`/project/${encodeURIComponent(projectItem?.slug)}`}
                >
                    <h3 className="pt-[0.625vw] text-[1.6875vw] font-[700] leading-[1.25] tracking-tighter title-prj capitalize lg:text-[2.75vw] md:text-[5.33vw]">
                        {projectItem?.title}
                    </h3>
                    <p className="hidden md:block md:!line-clamp-3 md:text-[3.73vw] text-[#394854] md:mt-[1.6vw] md:mb-[4.27vw]">
                        {projectItem?.projectDetail?.project?.desc}
                    </p>
                </Link>
                <Link
                    href={`/project/${encodeURIComponent(projectItem?.slug)}`}
                    className="md:hidden block mt-[0.38vw] uppercase text-primary text-[1vw] lg:text-[1.75vw] leading-[2.25] font-[700]"
                >
                    View Project +
                </Link>
                <div className="hidden md:flex items-center mt-[1vw] gap-[3.06vw] lg:flex-wrap lg:gap-x-0 md:flex-wrap md:gap-y-[2.67vw] md:gap-x-0">
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
        </div>
    );
}
