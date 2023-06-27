import ListProject from "@/components/Project/ListProject/ListProject";
import React from "react";
import HeaderSecond from "@/components/Common/HeaderSecond";
import {
    GET_PROJECT_OUTSTANDING,
    GET_PROJECT_PAGE,
} from "@/GraphQL/project/queries";
import getData from "@/utils/getData";

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
