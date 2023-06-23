import { GET_ALL_NEWS_EVENTS_PAGE, GET_NEWS } from "@/GraphQL/news/queries";
import LastNews from "@/components/News/NewsDetail/LastNews";
import NewsDetail from "@/components/News/NewsDetail/NewsDetail";
import getData from "@/utils/getData";

export default async function NewDetail(context) {
    const data = await getData(GET_ALL_NEWS_EVENTS_PAGE);
    const nodes = data?.data?.posts?.nodes;
    const slug = context.params.slug;
    return (
        <div>
            <NewsDetail slug={slug} data={data} />
        </div>
    );
}
