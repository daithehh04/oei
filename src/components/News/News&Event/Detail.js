import NewsDetail from "../NewsDetail/NewsDetail";
import LastNewsEvent from "./LastNewsEvent";

export default function Detail({ slug, data }) {
    const nodes = data?.data?.posts?.nodes;
    const NewsItem = nodes?.find((e) => e?.slug === slug);
    const lastNews = nodes?.filter(
        (item) => item?.categories?.nodes[0]?.name === "Event News"
    );

    const result = lastNews?.filter((item) => item?.slug !== NewsItem?.slug);
    const type = "news&event";

    return (
        <div className="pb-[7.5vw] bg-[#FAFAFA] md:pb-[20vw]">
            <NewsDetail NewsItem={NewsItem} />
            <LastNewsEvent data={result} slug={type} />
        </div>
    );
}
