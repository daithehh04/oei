import { GET_HEADER_ABOUT_PEOPLE } from "@/GraphQL/about/queries";
import IndexPeople from "@/components/About/People";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import React from "react";

const GET_META = `{
    page(id: "cG9zdDo5MDc=") {
            aboutPeople {
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
    const { featuredImage, aboutPeople } = data?.data?.page;
    return {
        title: aboutPeople?.meta?.metaTitle,
        description: aboutPeople?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: aboutPeople?.meta?.metaTitle,
            description: aboutPeople?.meta?.metaDescription,
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
            title: aboutPeople?.meta?.metaTitle,
            description: aboutPeople?.meta?.metaDescription,
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

export default async function People() {
    const data = await getData(GET_HEADER_ABOUT_PEOPLE);

    const { header } = data?.data?.page?.aboutPeople;
    return (
        <>
            <HeaderSecond header={header} />
            <main className="pb-[9.375vw] md:pb-[18.4vw]">
                <IndexPeople />
            </main>
        </>
    );
}
