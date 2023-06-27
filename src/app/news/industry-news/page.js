import { GET_HEADER_INDUSTRY_NEWS } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNewsIndustry from "@/components/News/NewsIndustry/ListNewsIndustry";
import getData from "@/utils/getData";
import React from "react";

const GET_META = `{
    page(id: "cG9zdDoxMTE1") {
            industryNews {
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
    const { featuredImage, industryNews } = data?.data?.page;
    return {
        title: industryNews?.meta?.metaTitle,
        description: industryNews?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: industryNews?.meta?.metaTitle,
            description: industryNews?.meta?.metaDescription,
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
            title: industryNews?.meta?.metaTitle,
            description: industryNews?.meta?.metaDescription,
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

export default async function Industry() {
    const data = await getData(GET_HEADER_INDUSTRY_NEWS);

    const { header } = data?.data?.page?.industryNews;
    return (
        <>
            <HeaderSecond header={header} />
            <div className="bg-[#FAFAFA] ">
                <ListNewsIndustry />
            </div>
        </>
    );
}
