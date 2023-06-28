"use client";
import React, { useEffect } from "react";
import AOS from "aos";

function Dynamic({ data }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="dynamic mt-[8.625vw] ">
            <div className="content">
                <div className="flex w-full wrapper md:flex-col">
                    <div className="title w-[50%] md:w-full">
                        <h3
                            className="w-[68%] text-46pc font-[800] leading-[1.22] text-primary md:w-[86.4%] md:text-[8vw] lg:text-[4.5vw]"
                            data-aos-once="true"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            {data?.title}
                        </h3>
                    </div>
                    <div className="category w-[50%] mt-[9.5vw] md:w-[78.4vw] md:ml-auto">
                        <p
                            className="desc text-[1.5vw] font-[400] leading-normal w-[81%] text-blackBtnNews md:text-[4.26vw] md:w-full lg:text-[2vw]"
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            {data?.desc}
                        </p>
                        <ul className="mt-[3.75vw] md:mt-[6.4vw]">
                            {data?.listItem?.map((item, index) => (
                                <li
                                    data-aos-once="true"
                                    data-aos="fade-up"
                                    data-aos-duration={`1000+${
                                        (index + 1) * 500
                                    }`}
                                >
                                    {item?.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dynamic;
