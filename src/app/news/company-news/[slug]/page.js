import { GET_NEWS } from "@/GraphQL/news/queries";
import Detail from "@/components/News/NewsCompany/Detail";
import getData from "@/utils/getData";

export default async function NewDetail(context) {
    const data = await getData(GET_NEWS);
    const slug = context.params.slug;
    return (
        <div>
            <Detail slug={slug} data={data} />
        </div>
    );
}
