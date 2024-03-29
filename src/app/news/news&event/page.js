import {
    GET_HEADER_NEWS_EVENT,
    GET_HEADER_NEWS_PAGE,
} from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNews from "@/components/News/News&Event/ListNews";
import getData from "@/utils/getData";
import React from "react";

const GET_META = `{
    page(id: "cG9zdDo4NTk=") {
            newsEvent {
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
    const { featuredImage, newsEvent } = data?.data?.page;
    return {
        title: newsEvent?.meta?.metaTitle,
        description: newsEvent?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: newsEvent?.meta?.metaTitle,
            description: newsEvent?.meta?.metaDescription,
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
            title: newsEvent?.meta?.metaTitle,
            description: newsEvent?.meta?.metaDescription,
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

export default async function Event() {
    const data = await getData(GET_HEADER_NEWS_EVENT);
    const { header, groupTitle, outstandingNews, othersNews } =
        data?.data?.page?.newsEvent;
    return (
        <div>
            <HeaderSecond header={header} />
            <div className="bg-[#FAFAFA]">
                <ListNews
                    titles={groupTitle}
                    outstandingNews={outstandingNews}
                    othersNews={othersNews}
                />
            </div>
        </div>
    );
}
