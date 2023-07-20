import React from "react";
// import NewsDetail from "../NewsDetail/NewsDetail";
const NewsDetail = dynamic(() => import("../NewsDetail/NewsDetail"), {
    ssr: false,
});
import LastNewsBlog from "./LastNewsBlog";
import Loading from "@/components/Common/Loading";
import dynamic from "next/dynamic";

export default function Detail({ slug, data }) {
    const nodes = data?.data?.posts?.nodes;
    const NewsItem = nodes?.find((e) => e?.slug === slug);

    const lastNews = nodes?.filter(
        (item) => item?.categories?.nodes[0]?.name === "Blogs"
    );
    const type = "blogs";
    const result = lastNews?.filter((item) => item?.slug !== NewsItem?.slug);

    if (!data)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-50">
                <Loading />
            </div>
        );
    return (
        <div className="pb-[7.5vw] bg-[#FAFAFA] md:pb-[20vw]">
            <NewsDetail NewsItem={NewsItem} />
            <LastNewsBlog data={result} slug={type} />
        </div>
    );
}
