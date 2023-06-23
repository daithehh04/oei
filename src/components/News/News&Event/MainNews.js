import React from "react";

export default function MainNews({ news }) {
    const urlImg = news?.featuredImage?.node?.sourceUrl;

    const dateString = news?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
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
                    <h3 className="title text-[3.75vw]">{news?.title}</h3>
                </div>
                <div className="bottom">
                    <p
                        className="text w-[28.125vw] text-[1.125vw]"
                        dangerouslySetInnerHTML={{
                            __html: news?.excerpt,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
