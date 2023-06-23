import NewsDetail from "@/components/News/NewsDetail/NewsDetail";

export default async function NewDetail(context) {
    const slug = context.params.slug;
    return (
        <div className="bg-[#FAFAFA]">
            <NewsDetail slug={slug} />
        </div>
    );
}
