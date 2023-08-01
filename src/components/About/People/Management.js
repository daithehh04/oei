import Message from "@/components/Common/Message";
import React from "react";

export default function Management({ data }) {
    return (
        <div className="content">
            <h3 className="mt-[7.5vw] text-[3.75vw] font-[800] mb-[3.125vw] title-mem text-center text-primary md:text-[8vw] md:mt-[16vw] md:mb-[4.53vw] lg:text-[6vw]">
                {data?.heading}
            </h3>
            <Message data={data} />
        </div>
    );
}
