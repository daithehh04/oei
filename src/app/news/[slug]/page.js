import { GET_NEWS } from "@/GraphQL/news/queries";
import NewsDetail from "@/components/News/NewsDetail/NewsDetail";
import getData from "@/utils/getData";

export default async function NewDetail(context) {
    const data = await getData(GET_NEWS);
    const slug = context.params.slug;
    return (
        <div className="bg-[#FAFAFA]">
            <NewsDetail data={data} slug={slug} />
        </div>
    );
}
