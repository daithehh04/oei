"use client";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import OutstandingProject from "./OutStandingProject";
import { QUERY_ALL_PROJECTS } from "@/GraphQL/project/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function ListProject() {
    const initLocation = ["an_thuan", "da_nang", "ha_noi"];
    const [activeButton, setActiveButton] = useState(0);

    const [year, setYear] = useState(null);
    const [location, setLocation] = useState(initLocation);

    const { data, refetch } = useQuery(QUERY_ALL_PROJECTS, {
        variables: {
            categorySlug: location,
            year: +year,
            offset: 0,
            size: 6,
        },
    });

    const nodes = data?.allProject?.nodes;

    const pageInfo = data?.allProject?.pageInfo.offsetPagination.total;
    const totalPages = Math.ceil(pageInfo / 6);

    const handleSelect = (e) => {
        const value = e.target.value;
        if (value !== "") {
            setLocation(value);
            setActiveButton(0);
        } else {
            setLocation(initLocation);
        }
    };

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        refetch({
            offset: buttonIndex * 6,
            size: 6,
        });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeButton]);
    return (
        <div className="list-project content">
            <OutstandingProject project={nodes} total={pageInfo} />
            <div className="row flex justify-between items-center mt-[6.4375vw] mb-[7.125vw]">
                <h2 className="title text-[3.75vw] font-[800] capitalize">
                    Project list
                </h2>
                <div className="filter flex items-center gap-[1.5vw]">
                    <div className="year ">
                        <select
                            name="year"
                            id="year"
                            className="w-[8.25vw] border border-[#394854] rounded-[3.125vw] py-[0.75vw] px-[1vw] select"
                            onChange={(e) => {
                                setYear(e.target.value);
                                setActiveButton(0);
                            }}
                        >
                            <option value="">YEAR</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                        </select>
                    </div>
                    <div className="Location">
                        <select
                            name="location"
                            id="location"
                            className="w-[8.25vw] border border-[#394854] rounded-[3.125vw] py-[0.75vw] px-[1vw] select"
                            onChange={(e) => handleSelect(e)}
                        >
                            <option value="">Location</option>
                            <option value="ha_noi">HÀ NỘI</option>
                            <option value="da_nang">ĐÀ NẴNG</option>
                            <option value="an_thuan">AN THUẬN</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[4.875vw]">
                {nodes?.map((item) => (
                    <ProjectItem projectItem={item} />
                ))}
            </div>
            <div className="pagination mt-[2.5vw] pb-[6.9375vw] text-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="btn w-[3vw] h-[3vw] rounded-full text-[1vw] mr-[1.5vw]"
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
        </div>
    );
}
