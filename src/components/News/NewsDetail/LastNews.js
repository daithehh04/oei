import LastNewsSlide from "./LastNewsSlide";
import Link from "next/link";

export default function LastNews({ news, slug }) {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="content flex justify-between items-end pb-[3.75vw] pt-[6.875vw]">
                <div>
                    <span className=" block text-[1.125vw] text-[#376A66] font-[700] uppercase lg:text-[2vw] md:text-[3.73vw] ">
                        News
                    </span>
                    <span className="text-[3.75vw] font-[800] text-primary leading-[1.33] lg:text-[5vw] md:text-[8vw]">
                        Last News
                    </span>
                </div>
                <Link
                    href={`/news/${slug}`}
                    className="py-[1.125vw] px-[2.875vw] rounded-[2vw] text-[1.125vw] font-[600] uppercase text-[#fff] bg-member lg:rounded-[3vw] md:hidden hover:scale-105 transition"
                >
                    See All
                </Link>
                <Link
                    href={`/news/${slug}`}
                    className="text-[4.267vw] hidden md:block uppercase text-[#394854] leading-[1.25] font-[800]"
                >
                    See More +
                </Link>
            </div>
            <LastNewsSlide news={news} />
        </div>
    );
}
