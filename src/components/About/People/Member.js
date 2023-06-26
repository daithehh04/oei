import React from "react";
import ListMember from "./ListMember";
import Message from "@/components/Common/Message";
import img from "../../../assets/img/member-img.png";
import Image from "next/image";
import Proactive from "./Proactive";

function Member({ data }) {
    return (
        <div className="member content">
            <h2 className="text-[1.125vw] font-[700] text-[#376A66] mt-[6.25vw] uppercase lg:text-[1.5vw] md:hidden">
                {data?.title}
            </h2>
            <h2 className="text-[1.125vw] font-[700] text-[#376A66] mt-[6.25vw] uppercase hidden md:block md:text-[3.73vw] md:mt-[16vw]">
                {data?.titleMobile}
            </h2>
            <h3 className="text-[3.75vw] font-[800] leading-[1.33] title-mem capitalize lg:text-[4vw] md:text-[8vw] md:mt-[2.13vw]">
                {data?.subTitle}
            </h3>
            <p className="text-[1.125vw] w-[44.3125vw] font-[400] leading-[1.5] mt-[1.5vw] ml-auto md:ml-0 md:w-[100%] md:text-[4.26vw] lg:text-[1.75vw]">
                {data?.desc}
            </p>
            <Image
                src={data?.img?.sourceUrl}
                width={500}
                height={500}
                alt="img"
                className="w-[100%] h-[39.5625vw] object-cover mt-[2vw] md:mt-[5.86vw] md:h-[66.66vw]"
            />
        </div>
    );
}

export default Member;
