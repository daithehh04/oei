import Image from "next/image";
import React from "react";
import img from "../../../assets/img/strive.png";

export default function Strives({ data }) {
    return (
        <div className="strives relative overflow-hidden pb-[8.5vw] lg:pb-[10vw] md:pb-[12vw]">
            <div className="content">
                <h2
                    className="title text-46pc text-[#394854] font-[800] leading-[1.22] tracking-tighter w-[44.6875vw] ml-[30%] z-10 absolute top-[8.625vw] lg:text-[4vw] lg:w-[60%] lg:ml-[16%] md:text-[6.66vw] md:w-[80.8%] md:ml-[10%] md:top-[17.6vw]"
                    dangerouslySetInnerHTML={{
                        __html: data?.title,
                    }}
                ></h2>
                <div className="imgs flex gap-[3.125vw] pt-[18.1875vw] md:pt-[43.73vw] items-baseline lg:flex-col">
                    <div>
                        <Image
                            src={data?.listItem?.[0]?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[34.8125vw] object-cover lg:h-[54vw] md:h-[70.93vw]"
                        />
                        <p
                            className="text-[#394854] text-[1.5vw] font-[400] w-[39.4375vw] leading-[1.58] mt-[3.75vw] lg:text-[2.4vw] md:text-[3.73vw] md:mt-[4.26vw] md:w-full lg:w-full"
                            dangerouslySetInnerHTML={{
                                __html: data?.listItem?.[0]?.desc,
                            }}
                        ></p>
                    </div>
                    <div>
                        <Image
                            src={data?.listItem?.[1]?.img?.sourceUrl}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[26.375vw] object-cover lg:h-[46vw] md:h-[60vw]"
                        />
                        <p
                            className="text-[#394854] text-[1.5vw] font-[400] w-[39.4375vw] leading-[1.58] mt-[3.75vw] lg:text-[2.4vw] lg:w-full md:text-[3.73vw] md:mt-[4.26vw] md:w-full"
                            dangerouslySetInnerHTML={{
                                __html: data?.listItem?.[1]?.desc,
                            }}
                        ></p>
                    </div>
                </div>

                <span className="heading text-[12.5vw] font-[900] uppercase absolute right-0 md:hidden">
                    OEi GROUP
                </span>
            </div>
        </div>
    );
}
