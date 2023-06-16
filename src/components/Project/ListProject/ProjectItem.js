import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectItem({ projectItem }) {
    const urlImg = projectItem?.featuredImage.node.sourceUrl;
    return (
        <div className="project-item ">
            <Link
                href={`project/${encodeURIComponent(projectItem?.slug)}`}
                className="block h-[32.5vw] img-prj"
            >
                <Image
                    src={urlImg}
                    className="w-[100%] h-[100%] object-cover "
                    alt="img"
                    width={500}
                    height={500}
                />
            </Link>
            <div className="info p-[1.5vw] bg-[#fff]">
                <p className="text-[1.125vw] font-[400] leading-[1.44] text-[#394854] uppercase">
                    {projectItem?.project?.name}
                </p>
                <Link href={`project/${encodeURIComponent(projectItem?.slug)}`}>
                    <h3 className="pt-[0.625vw] text-[2vw] font-[700] leading-[1.25] tracking-tighter title-prj capitalize">
                        {projectItem?.title}
                    </h3>
                </Link>
                <div className="flex items-center mt-[0.5vw]">
                    {projectItem?.project?.repeatInfo?.map((item, index) => (
                        <div
                            className="owner flex flex-col mr-[5.125vw]"
                            key={index}
                        >
                            <span className="text-[0.875vw] font-[400]">
                                {item?.title}
                            </span>
                            <span className="text-[1.25vw] font-[600] leading-[1.3]">
                                {item?.content}
                            </span>
                        </div>
                    ))}
                    <Link
                        href={`project/${encodeURIComponent(
                            projectItem?.slug
                        )}`}
                        className="ml-auto font-[700] text-[0.875vw] leading-[2.57] "
                    >
                        SEE MORE <span>+</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
