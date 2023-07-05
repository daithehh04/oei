import { GET_NEWS } from "@/GraphQL/news/queries";
import Detail from "@/components/News/NewsCompany/Detail";
import getData from "@/utils/getData";

export async function generateMetadata({ params }) {
    const data = await getData(GET_NEWS);
    if (!data) return;
    const projectDetail = data?.data?.posts?.nodes.find(
        (e) => e?.slug === params?.slug
    );
    const { featuredImage, title, excerpt } = projectDetail;
    return {
        title: title,
        description: excerpt,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: title,
            description: excerpt,
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
            title: title,
            description: excerpt,
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

export default async function NewDetail(context) {
    const data = await getData(GET_NEWS);
    const slug = context.params.slug;
    return (
        <div>
            <Detail slug={slug} data={data} />
        </div>
    );
}
