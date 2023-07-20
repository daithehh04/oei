import HeaderSecond from "@/components/Common/HeaderSecond";
import Loading from "@/components/Common/Loading";
import ContentNews from "./ContentNews";

export default async function NewsDetail({ NewsItem }) {
    const background = NewsItem?.featuredImage?.node;
    const title = NewsItem?.title;
    const header = { background, title };

    if (!NewsItem)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-50">
                <Loading />
            </div>
        );
    return (
        <>
            <HeaderSecond header={header} />
            <ContentNews NewsItem={NewsItem} />
        </>
    );
}
