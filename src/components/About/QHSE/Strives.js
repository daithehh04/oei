import Image from "next/image";
import React from "react";
import img from "../../../assets/img/strive.png";

export default function Strives() {
    return (
        <div className="strives relative overflow-hidden pb-[4.5vw] lg:pb-[10vw] md:pb-[12vw]">
            <div className="content">
                <h2 className="title text-46pc text-[#394854] font-[800] leading-[1.22] tracking-tighter w-[44.6875vw] ml-[30%] z-10 absolute top-[8.625vw] lg:text-[4vw] lg:w-[60%] lg:ml-[16%] md:text-[6.66vw] md:w-[80.8%] md:ml-[10%] md:top-[17.6vw]">
                    OEI has a <strong>proactivesocial position</strong> and{" "}
                    <strong>strives forachievement</strong> of synergy of
                    successfulbusiness with universalhuman values.
                </h2>
                <div className="imgs flex gap-[3.125vw] pt-[18.1875vw] items-end md:pt-[43.73vw]">
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="img"
                        className="w-[50%] h-[34.8125vw] object-cover md:w-full md:h-[70.93vw]"
                    />
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="img"
                        className="w-[40%] h-[26.375vw] object-cover  md:hidden"
                    />
                </div>
                <p className="text-[#394854] text-[1.5vw] font-[400] w-[39.4375vw] leading-[1.58] ml-[3.75vw] mt-[3.75vw] lg:text-[2.4vw] lg:w-[70%] md:text-[3.73vw] md:mt-[4.26vw] md:w-full md:ml-0">
                    We are completely aware of our responsibility to our
                    employees, the state, and community, and we are eager to
                    contribute to the prosperity of the country and the
                    well-being of its citizens. A warm-hearted participation in
                    the lives of people in need, as well as our contribution to
                    educational and sports projects, including the support for
                    humanitarian.
                </p>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt="img"
                    className="w-[40%] h-[26.375vw] object-cover hidden md:block md:w-full md:h-[70.93vw] md:mt-[4.26vw]"
                />
                <span className="heading text-[12.5vw] font-[900] uppercase absolute right-0 md:hidden">
                    OEi GROUP
                </span>
            </div>
        </div>
    );
}
