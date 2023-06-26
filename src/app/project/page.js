import ListProject from "@/components/Project/ListProject/ListProject";
import React from "react";
import HeaderSecond from "@/components/Common/HeaderSecond";
import {
    GET_PROJECT_OUTSTANDING,
    GET_PROJECT_PAGE,
} from "@/GraphQL/project/queries";
import getData from "@/utils/getData";

export default async function Project() {
    const data = await getData(GET_PROJECT_PAGE);
    const data_prj = await getData(GET_PROJECT_OUTSTANDING);
    const { header, outstanding, listProject, download } =
        data?.data?.page?.project;
    const prjOutStanding = data_prj?.data?.allProject?.nodes;
    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div>
                <ListProject
                    prjOutStanding={prjOutStanding}
                    outstanding={outstanding}
                    listProject={listProject}
                    download={download}
                />
            </div>
        </div>
    );
}
