import Image from "next/image";
import HeaderSecond from "@/components/Common/HeaderSecond";
import TableContent from "./TableContent";
import Loading from "@/components/Common/Loading";
import TwitterShare from "./TwitterShare";
import FacebookShare from "./FacebookShare";
import LinkedInShare from "./LinkedInShare";

export default async function NewsDetail({ NewsItem }) {
    const background = NewsItem?.featuredImage?.node;
    const title = NewsItem?.title;
    const header = { background, title };

    const dateString = NewsItem?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;

    let category = NewsItem?.categories?.nodes[0]?.name;
    if (category.toString().toUpperCase() === "EVENT NEWS") {
        category = "EVENT";
    }
    if (category.toString().toUpperCase() === "BLOGS") {
        category = "BLOG";
    }
    if (!NewsItem)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-50">
                <Loading />
            </div>
        );
    return (
        <>
            <HeaderSecond header={header} />
            <div className="content-newsDetail">
                <h2 className="text-[2.875vw] text-primary font-[800] tracking-tighter leading-[1.22] mt-[6.25vw] mb-[1vw] md:text-[6.67vw] md:mt-[16vw] lg:text-[4.67vw]">
                    {NewsItem?.title}
                </h2>
                <span className="text-[1.269vw] font-[400] leading-[1.69] text-[#376A66] md:text-[4.8vw] md:mt-[2.67vw]">
                    {formattedDate}{" "}
                    <span className="uppercase"> / {category} </span>
                </span>
                <span className="text-[#376A66] capitalize text-[1.269vw] md:text-[4.8vw]">
                    - {NewsItem?.newsDetail?.author}
                </span>
                <div className="w-[100%] h-[1px] bg-neutral-200 mt-[1vw] mb-[2vw]"></div>
                <Image
                    src={NewsItem?.newsDetail?.image?.sourceUrl}
                    width={500}
                    height={500}
                    alt="img"
                    className="h-[35.4375vw] w-full object-cover mt-[2vw] md:h-[50vw] md:mt-[4.63vw]"
                />
                {/* Table content */}
                <TableContent />

                {/* Content news */}
                <div
                    className="content-news"
                    dangerouslySetInnerHTML={{ __html: NewsItem?.content }}
                ></div>
                <div className="w-[100%] h-[1px] bg-neutral-200 mt-[2vw] mb-[1.5vw] md:mt-[4.27vw] md:mb-[4.8vw]"></div>
                <div className="social flex gap-[0.8125vw] items-center justify-end md:gap-[3.47vw]">
                    <span className="uppercase text-[0.875vw] text-[#394854] font-[700] leading-[1.43] md:text-[3.46vw] lg:text-[2vw]">
                        share on it:
                    </span>
                    <div className="flex items-center gap-[0.5vw] md:gap-[2.13vw]">
                        <TwitterShare
                            url={NewsItem?.link}
                            quote={NewsItem?.title}
                        />
                        <FacebookShare
                            url={NewsItem?.link}
                            quote={NewsItem?.title}
                        />
                        <LinkedInShare
                            url={NewsItem?.link}
                            quote={NewsItem?.title}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
