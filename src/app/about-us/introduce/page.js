import React from "react";
import { GET_HEADER_ABOUT_INTRODUCE } from "@/GraphQL/about/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import IndexIntroduce from "@/components/About/Introduce";

const GET_META = `{
    page(id: "cG9zdDo5MDU=") {
            aboutIntroduce {
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
    const { featuredImage, aboutIntroduce } = data?.data?.page;
    return {
        title: aboutIntroduce?.meta?.metaTitle,
        description: aboutIntroduce?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: aboutIntroduce?.meta?.metaTitle,
            description: aboutIntroduce?.meta?.metaDescription,
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
            title: aboutIntroduce?.meta?.metaTitle,
            description: aboutIntroduce?.meta?.metaDescription,
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

export default async function Introduce() {
    const data = await getData(GET_HEADER_ABOUT_INTRODUCE);
    const { header } = data?.data?.page?.aboutIntroduce;
    return (
        <>
            <HeaderSecond header={header} />
            <main>
                <IndexIntroduce />
            </main>
        </>
    );
}
