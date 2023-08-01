"use client";
import React, { useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import OutstandingProject from "./OutStandingProject";
import { QUERY_ALL_PROJECTS } from "@/GraphQL/project/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import img from "../../../assets/img/dowload.png";
import Image from "next/image";
import AOS from "aos";
import Loading from "@/components/Common/Loading";

export default function ListProject({
    outstanding,
    listProject,
    download,
    prjOutStanding,
    yearFilter,
    filterLocation,
    filterPrj,
    arrFilterPrj,
    arrFilterLocation,
}) {
    const initLocation = arrFilterLocation;
    const initTypeProject = arrFilterPrj;
    const [activeButton, setActiveButton] = useState(0);

    const [year, setYear] = useState(null);
    const [location, setLocation] = useState(initLocation);
    const [typeProject, setTypeProject] = useState(initTypeProject);

    const parentRef = useRef(null);

    const { data, refetch } = useQuery(QUERY_ALL_PROJECTS, {
        variables: {
            categorySlug: location,
            typeProjectSlug: typeProject,
            year: +year,
            offset: 0,
            size: 9,
        },
    });

    const eleRef = useRef();

    useEffect(() => {
        eleRef?.current?.scrollIntoView();
    }, [activeButton]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    const nodes = data?.allProject?.nodes;

    const pageInfo = data?.allProject?.pageInfo.offsetPagination.total;
    const totalPages = Math.ceil(pageInfo / 9);

    const handleSelect = (e) => {
        const value = e.target.value;
        if (value !== "") {
            setLocation(value);
            setActiveButton(0);
        } else {
            setLocation(initLocation);
        }
    };

    const handleSelectType = (e) => {
        const value = e.target.value;
        if (value !== "") {
            setTypeProject(value);
            setActiveButton(0);
        } else {
            setTypeProject(initLocation);
        }
    };

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        refetch({
            offset: buttonIndex * 9,
            size: 9,
        });
    };

    function fileDownloader(href) {
        const link = document.createElement("a");
        link.href = href;
        link.download = "file";
        link.click();
    }

    if (
        !data &&
        !year &&
        location === initLocation &&
        typeProject === initTypeProject
    )
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-50">
                <Loading />
            </div>
        );

    return (
        <div className="list-project">
            <div className="flex mt-[6.25vw] md:flex-col md:mt-[16vw] content">
                <h2
                    className=" text-[3.75vw] text-primary leading-[1.33] font-[800] lg:text-[4.67vw] md:text-[8vw]"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {outstanding?.title}
                </h2>
                <p
                    className="w-[46.5625vw] ml-auto text-[1.5vw] font-[400] leading-[1.38] mb-[2.31vw] text-[#394854] lg:text-[2vw] md:w-full md:text-[4.267vw] md:mb-[6.4vw] md:mt-[4.27vw] "
                    data-aos-once="true"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    {outstanding?.desc}
                </p>
            </div>
            <OutstandingProject project={prjOutStanding} />
            <div
                className="row projects flex justify-between mt-[6.4375vw] md:flex-col content"
                ref={eleRef}
            >
                <h2
                    className="title text-[3.75vw] font-[800] capitalize lg:text-[4.67vw] mt-[-1vw] md:hidden"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {listProject?.title}
                </h2>
                <p
                    className="text-[#394854] text-[1.125vw] w-[44.6875vw] lg:text-[2vw] md:w-full md:text-[4.267vw] md:mt-[4.27vw]"
                    data-aos-once="true"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    {listProject?.desc}
                </p>
            </div>

            <div
                className="filter flex items-center md:justify-between gap-[1.5vw] mt-[-1.75vw] pb-[2.5vw] md:pt-[6.4vw] md:gap-[2.13vw] content"
                ref={parentRef}
            >
                <div className="project ">
                    <select
                        name="project"
                        id="project"
                        className="w-[12.375vw] border border-[#394854] rounded-[3.125vw] py-[0.75vw] px-[1vw] select md:w-[28vw] md:px-[4.27vw] md:py-[2.13vw] md:rounded-[13.33vw]"
                        onChange={(e) => handleSelectType(e)}
                    >
                        <option value="" hidden>
                            Project
                        </option>
                        {filterPrj?.map((item, index) => (
                            <option value={item?.[0]?.slug} key={index}>
                                {item?.[0]?.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="year ">
                    <select
                        name="year"
                        id="year"
                        className="w-[12.375vw] border border-[#394854] rounded-[3.125vw] py-[0.75vw] px-[1vw] select md:w-[28vw] md:px-[4.27vw] md:py-[2.13vw] md:rounded-[13.33vw]"
                        onChange={(e) => {
                            setYear(e.target.value);
                            setActiveButton(0);
                        }}
                    >
                        <option value="" hidden>
                            Year
                        </option>
                        {yearFilter?.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="location">
                    <select
                        name="location"
                        id="location"
                        className="w-[12.375vw] border border-[#394854] rounded-[3.125vw] py-[0.75vw] px-[1vw] select md:w-[28vw] md:px-[4.27vw] md:py-[2.13vw] md:rounded-[13.33vw]"
                        onChange={(e) => handleSelect(e)}
                    >
                        <option value="" hidden>
                            Location
                        </option>
                        {filterLocation?.map((item, index) => (
                            <option value={item?.[0].slug} key={index}>
                                {item?.[0].name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-[1.87vw] lg:grid-cols-2 md:grid-cols-1 content">
                {nodes?.map((item, index) => (
                    <ProjectItem projectItem={item} key={index} />
                ))}
            </div>
            <div className="pagination mt-[3vw] pb-[5vw] text-center md:mt-[6.4vw] md:pb-[16vw] lg:mt-[5vw] lg:pb-[8vw] content">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="btn cursor-pointer w-[3vw] h-[3vw] rounded-full bg-[#fff] outline-none text-[1.1vw] font-[600] text-[#2b2b2b] mr-[1.5vw] border-none md:w-[10.66vw] md:h-[10.66vw] md:text-16mb md:mr-[4.26vw] lg:w-[6vw] lg:h-[6vw] lg:text-[2vw]"
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            backgroundColor:
                                activeButton === index ? "#4ca757" : "#fff",
                            color: activeButton === index ? "#fff" : "#4ca757",
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <div className="flex items-center pb-[8.09vw] content lg:hidden">
                <p
                    className="dload text-[2.875vw] font-[800] w-[58vw] leading-[1.22] text-[#333333] lg:text-[4.5vw]"
                    dangerouslySetInnerHTML={{
                        __html: download?.text,
                    }}
                ></p>
                <span
                    onClick={() => fileDownloader(download?.url)}
                    className="download cursor-pointer flex items-center justify-center bg-member w-[9.4375vw] h-[9.4375vw] rounded-full flex-col ml-auto mr-[4vw]"
                >
                    <Image
                        src={img}
                        width={100}
                        height={100}
                        alt="img"
                        className="img-dl w-[4vw] object-cover"
                    />
                    <span className="text text-[0.6875vw] font-[400] leading-[2.18] uppercase text-[#fff] text-center lg:w-[80%] lg:text-[1.5vw] lg:leading-[1.5]">
                        download profile
                    </span>
                </span>
            </div>
        </div>
    );
}
