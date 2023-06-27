import { GET_HEADER_ABOUT_QHSE } from "@/GraphQL/about/queries";
import IndexQHSE from "@/components/About/QHSE";
import HeaderSecond from "@/components/Common/HeaderSecond";
import getData from "@/utils/getData";
import React from "react";

const GET_META = `{
    page(id: "cG9zdDoxMDM3") {
            aboutQhse {
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
    const { featuredImage, aboutQhse } = data?.data?.page;
    return {
        title: aboutQhse?.meta?.metaTitle,
        description: aboutQhse?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: aboutQhse?.meta?.metaTitle,
            description: aboutQhse?.meta?.metaDescription,
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
            title: aboutQhse?.meta?.metaTitle,
            description: aboutQhse?.meta?.metaDescription,
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

export default async function QHSE() {
    const data = await getData(GET_HEADER_ABOUT_QHSE);

    const { header } = data?.data?.page?.aboutQhse;
    return (
        <>
            <HeaderSecond header={header} />
            <main>
                <IndexQHSE />
            </main>
        </>
    );
}
