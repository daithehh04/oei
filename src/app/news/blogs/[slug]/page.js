import NewsDetail from "@/components/News/NewsDetail/NewsDetail";

export default function NewDetail(context) {
    const slug = context.params.slug;
    return (
        <div>
            <NewsDetail slug={slug} />
        </div>
    );
}
