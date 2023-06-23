import Image from "next/image";
import twitter from "../../../assets/img/twitter.png";
import fb from "../../../assets/img/fb.png";
import linkedin from "../../../assets/img/linkedin.png";

import dropdown from "../../../assets/img/arrow-down.png";
import HeaderSecond from "@/components/Common/HeaderSecond";
import LastNews from "./LastNews";
import Link from "next/link";

export default async function NewsDetail({ slug, data }) {
    // const [titles, setTitles] = useState([]);

    const nodes = data?.data?.posts?.nodes;
    const NewsItem = nodes?.find((e) => e?.slug === slug);

    const background = NewsItem?.featuredImage?.node;
    const title = NewsItem?.title;
    const header = { background, title };

    const dateString = NewsItem?.date;
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };

    const formattedDate = date.toLocaleDateString("en-US", options);

    // useEffect(() => {
    //     setTimeout(() => {
    //         const newsDetail = document.querySelector(".content-news");
    //         if (newsDetail) {
    //             const titles = [...newsDetail.querySelectorAll("h3")];
    //             const nodeList = newsDetail.querySelectorAll("h3");
    //             nodeList.forEach((element, index) => {
    //                 element.id = `element-${index + 1}`;
    //                 console.log(element.id);
    //             });
    //             setTitles(titles);
    //         }
    //     }, 2000);
    // }, []);
    return (
        <div className="bg-[#FAFAFA] pb-[7.5vw]">
            <HeaderSecond header={header} />
            {/* {JSON.stringify(NewsItem)} */}
            <div className="content-newsDetail">
                <h2 className="text-[2.875vw] text-primary font-[800] tracking-tighter leading-[1.22] mt-[6.25vw] mb-[1vw]">
                    {NewsItem?.title}
                </h2>
                <span className="text-[1.25w] font-[400] leading-[1.69] text-[#376A66]">
                    {formattedDate} / EVENT
                </span>
                <div className="w-[100%] h-[1px] bg-neutral-200 mt-[1vw] mb-[2vw]"></div>
                {/* Table content */}
                <div className="table-content p-[2vw] bg-[#fff] w-[60%] mb-[2vw]">
                    <div className="flex items-center justify-between">
                        <span className="text-[2vw] text-[#394854] font-[800] leading-[1.25] tracking-tighter mb-[1.5vw]">
                            Table of Contents
                        </span>
                        <Image
                            src={dropdown}
                            alt="drop-down"
                            width={50}
                            height={50}
                            className="w-[0.75vw] h-[1vw] object-contain"
                        />
                    </div>
                    {/* {titles.map((item, index) => (
                        <a href={`#element-${index + 1}`}>
                            <h3
                                className="text-[1.125vw] font-[600] leading-[1.83] text-[#394854] mt-[1vw]"
                                key={index}
                            >
                                {item.textContent}
                            </h3>
                        </a>
                    ))} */}
                </div>

                {/* Content news */}
                <div
                    className="content-news"
                    dangerouslySetInnerHTML={{ __html: NewsItem?.content }}
                ></div>
                <div className="w-[100%] h-[1px] bg-neutral-200 mt-[2vw] mb-[1.5vw]"></div>
                <div className="social flex gap-[0.8125vw] items-center justify-end">
                    <span className="uppercase text-[0.875vw] text-[#394854] font-[700] leading-[1.43]">
                        share on it:
                    </span>
                    <ul className="flex items-center gap-[0.5vw]">
                        <li>
                            <Link href="#">
                                <Image
                                    src={twitter}
                                    alt="twitter"
                                    width={50}
                                    height={50}
                                    className="w-[1vw] h-[1.5vw] object-contain"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    src={fb}
                                    alt="fb"
                                    width={50}
                                    height={50}
                                    className="w-[1.5vw] h-[1.5vw] object-contain"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    src={linkedin}
                                    alt="linkedin"
                                    width={50}
                                    height={50}
                                    className="w-[1.5vw] h-[1.5vw] object-contain"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <LastNews news={nodes} />
        </div>
    );
}
