import React from "react";
import img from "../../../assets/img/about-people.png";
import Image from "next/image";

export default function Proactive() {
    return (
        <div className="proactive">
            <div className="content">
                <h2 className="title text-46pc font-[800] leading-[1.22] w-[44.15vw] text-[#394854] mt-[9.75vw] tracking-tighter md:w-full md:text-[6.67vw] md:mt-[16vw] lg:text-[4vw]">
                    OEI has a <strong>proactivesocial position</strong> and{" "}
                    <strong>strives forachievement</strong>{" "}
                </h2>
                <div className="flex md:flex-col">
                    <div className="left w-[44.75vw] md:w-[100%]">
                        <p className="text-[#394854] font-[400] text-[1.125vw] leading-normal w-[36.9375vw] mt-[3.125vw] md:w-full md:text-[3.73vw] md:mt-[4.26vw] lg:text-[1.75vw]">
                            To become a highly professional, competitive company
                            and first choice to customers in Vietnam, as a
                            reputable, strategic and reliable partner in the
                            Offshore Wind Power and Oil & Gas services sectors.
                        </p>
                        <p className="text-[#394854] font-[400] text-[1.125vw] leading-normal  w-[36.9375vw] mt-[1.5vw] md:w-full md:text-[3.73vw] md:mt-[4.26vw] lg:text-[1.75vw]">
                            To become a highly professional, competitive company
                            and first choice to customers in Vietnam, as a
                            reputable, strategic and reliable partner in the
                            Offshore Wind Power and Oil & Gas services sectors.
                        </p>
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[34.0625vw] object-cover mt-[7.5vw] md:h-[71.73vw]"
                        />
                    </div>
                    <div className="right w-[36.9375vw] ml-auto md:w-[100%] md:flex md:flex-col-reverse">
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-[34.0625vw] object-cover md:h-[71.73vw] md:mt-[6.4vw]"
                        />
                        <ul className="mt-[7.0625vw] text-[#394854] text-[1.125vw] font-[600] flex flex-col gap-[1vw] list-disc md:text-[4.26vw] md:gap-[4.26vw] lg:text-[2vw]">
                            <li>Modern, corporate governance model.</li>
                            <li>Lean and efficient management systems.</li>
                            <li>Passionate and enthusiastic staff.</li>
                            <li>
                                A dynamic, creative and disciplined working
                                environ
                            </li>
                            <li>
                                Transparent fair and worthy remuneration policy.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
