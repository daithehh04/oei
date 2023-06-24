import React from "react";
import NewsDetail from "../NewsDetail/NewsDetail";
import LastNewsBlog from "./LastNewsBlog";

export default function Detail({ slug, data }) {
    const nodes = data?.data?.posts?.nodes;
    const NewsItem = nodes?.find((e) => e?.slug === slug);

    const lastNews = nodes?.filter(
        (item) => item?.categories?.nodes[0]?.name === "Blogs"
    );
    return (
        <div className="pb-[7.5vw]">
            <NewsDetail NewsItem={NewsItem} />
            <LastNewsBlog data={lastNews} />
        </div>
    );
}
