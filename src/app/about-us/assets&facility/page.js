import { GET_HEADER_ABOUT_ASSETS } from "@/GraphQL/about/queries";
import IndexAssets from "@/components/About/Assets&Facility";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import React from "react";

const GET_META = `{
    page(id: "cG9zdDoxMDQ2") {
            aboutAssets {
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
    const { featuredImage, aboutAssets } = data?.data?.page;
    return {
        title: aboutAssets?.meta?.metaTitle,
        description: aboutAssets?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: aboutAssets?.meta?.metaTitle,
            description: aboutAssets?.meta?.metaDescription,
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
            title: aboutAssets?.meta?.metaTitle,
            description: aboutAssets?.meta?.metaDescription,
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

export default async function Assets() {
    const data = await getData(GET_HEADER_ABOUT_ASSETS);

    const { header } = data?.data?.page?.aboutAssets;
    return (
        <>
            <HeaderSecond header={header} />
            <main>
                <IndexAssets />
            </main>
        </>
    );
}
