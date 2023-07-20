import Image from "next/image";
import React from "react";
import imgIcon from "../../assets/img/arrow-right.svg";
import Link from "next/link";

export default function CategoryNews({ imgNews, typeNews }) {
    return (
        <div className="relative category-news h-[34.5vw] mb-[6.25vw] overflow-hidden md:h-[78vw]">
            <div className="h-full images">
                {imgNews?.map((item, index) => (
                    <Image
                        key={index}
                        src={item}
                        width={1000}
                        height={1000}
                        alt="img"
                        className={`object-cover w-full h-full img-${
                            index + 1
                        }`}
                    />
                ))}
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between links bg-overlayNews">
                {typeNews?.map((item, index) => (
                    <Link
                        key={index}
                        href={`/news/${item.slug}`}
                        className="flex items-center justify-between px-[3.12vw] py-[3.25vw] h-[11.5vw] md:h-[26vw]"
                    >
                        <div className="relative z-10 flex items-baseline">
                            <span className="text-[#fff] font-[800] text-[3vw] leading-[1.66] min-w-[22vw] capitalize md:text-[5.33vw] md:min-w-[40vw]">
                                {item.title}
                            </span>
                            <Image
                                src={imgIcon}
                                width={50}
                                height={50}
                                alt="icon"
                                className="w-[0.7214vw] object-contain ml-[2vw] arrow-right md:w-[2.13vw]"
                            />
                        </div>
                        <span className="text-[#fff] font-[800] leading-[1.5] text-[1.5vw] uppercase relative z-10 btn-see md:text-[3.73vw]">
                            See More +
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
