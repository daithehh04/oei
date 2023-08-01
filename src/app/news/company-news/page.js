import { GET_HEADER_COMPANY_NEWS } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListNewsCompany from "@/components/News/NewsCompany/ListNewsCompany";
import getData from "@/utils/getData";
import React from "react";

const GET_META = `{
    page(id: "cG9zdDoxMTEz") {
            companyNews {
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
    const { featuredImage, companyNews } = data?.data?.page;
    return {
        title: companyNews?.meta?.metaTitle,
        description: companyNews?.meta?.metaDescription,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: companyNews?.meta?.metaTitle,
            description: companyNews?.meta?.metaDescription,
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
            title: companyNews?.meta?.metaTitle,
            description: companyNews?.meta?.metaDescription,
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

export default async function Company() {
    const data = await getData(GET_HEADER_COMPANY_NEWS);

    const { header, groupTitle, outstandingnews, othersNews } =
        data?.data?.page?.companyNews;
    return (
        <>
            <HeaderSecond header={header} />
            <div className="bg-[#FAFAFA]">
                <ListNewsCompany
                    titles={groupTitle}
                    mainNews={outstandingnews}
                    othersNews={othersNews}
                />
            </div>
        </>
    );
}
