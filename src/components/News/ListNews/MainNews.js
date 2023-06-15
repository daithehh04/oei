import React from "react";

export default function MainNews({ news }) {
    const urlImg = news?.featuredImage?.node?.sourceUrl;

    const dateString = news?.date;
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return (
        <div className="main-news flex">
            <div className="left w-[50%]">
                <img
                    src={urlImg}
                    alt="img"
                    className="w-[100%] h-[38.5vw] object-cover"
                />
            </div>
            <div className="right w-[50%] pt-[2.5vw] px-[3.75vw] pb-[3.75vw] flex flex-col justify-between">
                <div className="top">
                    <p className="uppercase text-[1.25vw]">
                        <span>{formattedDate}</span> / <span>event</span>
                    </p>
                    <h3 className="title text-[3.75vw]">
                        Vestas Pre-Qualification
                    </h3>
                </div>
                <div className="bottom">
                    <p className="text w-[28.125vw] text-[1.125vw]">
                        To become a highly professional, competitive company and
                        first choice to customers in Vietnam, as a reputable,
                        strategic and reliable partner in the Offshore Wind
                        Power and Oil & Gas services sectors.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
