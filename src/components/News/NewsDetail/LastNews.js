import LastNewsSlide from "./LastNewsSlide";
import Link from "next/link";

export default function LastNews({ news }) {
    return (
        <div>
            <div className="content flex justify-between items-end mb-[3.75vw] mt-[6.875vw]">
                <div>
                    <span className=" block text-[1.125vw] text-[#376A66] font-[700] uppercase ">
                        News
                    </span>
                    <span className="text-[3.75vw] font-[800] text-primary leading-[1.33]">
                        Last News
                    </span>
                </div>
                <Link
                    href="/news"
                    className="py-[1.125vw] px-[2.875vw] rounded-[2vw] text-1.125vw uppercase text-[#fff] bg-member"
                >
                    See All
                </Link>
            </div>
            <LastNewsSlide news={news} />
        </div>
    );
}
