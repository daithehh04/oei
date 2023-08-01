import ListProject from "@/components/Project/ListProject/ListProject";
import React from "react";
import HeaderSecond from "@/components/Common/HeaderSecond";
import {
    GET_FILTER_PROJECT,
    GET_PROJECT_PAGE,
} from "@/GraphQL/project/queries";
import getData from "@/utils/getData";
import ListProjectMb from "@/components/Project/ListProject/ListProjectMb";

const GET_META = `{
    page(id: "cG9zdDo4NjM=") {
            project {
                meta{
					metaTitle
					metaDescription
                }
            }
		featuredImage{
			node{
				sourceUrl
				altText
				title
			}
		}
    }
}`;

export async function generateMetadata() {
    const data = await getData(GET_META);
    if (!data) return;
    const { featuredImage, project } = data?.data?.page;
    return {
        title: project?.meta?.metaTitle,
        description: project?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: project?.meta?.metaTitle,
            description: project?.meta?.metaDescription,
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
            title: project?.meta?.metaTitle,
            description: project?.meta?.metaDescription,
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

export default async function Project() {
    const data = await getData(GET_PROJECT_PAGE);
    const { header, outstanding, listProject, download } =
        data?.data?.page?.project;
    const dataFilter = await getData(GET_FILTER_PROJECT);
    // Years
    const yearFilter = dataFilter?.data?.allProject?.nodes?.map((item) =>
        item.date.slice(0, 4)
    );
    const uniqueYears = [...new Set(yearFilter)];
    // Location
    const locationFilter = dataFilter?.data?.allProject?.nodes?.map(
        (item) => item.location.nodes
    );
    const uniqueLocation = new Set(
        locationFilter.map((item) => JSON.stringify(item))
    );
    const uniqueLocationArray = [...uniqueLocation].map((item) =>
        JSON.parse(item)
    );
    // Type project
    const prjFilter = dataFilter?.data?.allProject?.nodes?.map(
        (item) => item.typeProject.nodes
    );
    const uniquePrj = new Set(prjFilter.map((item) => JSON.stringify(item)));
    const uniquePrjArray = [...uniquePrj].map((item) => JSON.parse(item));
    uniquePrjArray.sort((a, b) => {
        const nameA = a[0].name.toUpperCase();
        const nameB = b[0].name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    let arrFilterPrj = [];
    let arrFilterLocation = [];

    uniquePrjArray?.map((item) => arrFilterPrj.push(item?.[0]?.slug));
    uniqueLocationArray?.map((item) => arrFilterLocation.push(item?.[0]?.slug));

    return (
        <div className="bg-[#FAFAFA]">
            <HeaderSecond header={header} />
            <div>
                <div className="md:hidden">
                    <ListProject
                        prjOutStanding={outstanding?.listProject}
                        outstanding={outstanding}
                        listProject={listProject}
                        download={download}
                        yearFilter={uniqueYears}
                        filterLocation={uniqueLocationArray}
                        filterPrj={uniquePrjArray}
                        arrFilterPrj={arrFilterPrj}
                        arrFilterLocation={arrFilterLocation}
                    />
                </div>

                <div className="hidden md:block">
                    <ListProjectMb
                        prjOutStanding={outstanding?.listProject}
                        outstanding={outstanding}
                        listProject={listProject}
                        download={download}
                        yearFilter={uniqueYears}
                        filterLocation={uniqueLocationArray}
                        filterPrj={uniquePrjArray}
                        arrFilterPrj={arrFilterPrj}
                        arrFilterLocation={arrFilterLocation}
                    />
                </div>
            </div>
        </div>
    );
}
