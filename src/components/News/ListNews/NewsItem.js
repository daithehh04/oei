import React from "react";

export default function NewsItem({ newsItem }) {
    const news = newsItem;
    const urlImg = news?.featuredImage.node.sourceUrl;

    const dateString = news?.date;
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return (
        <div className="news-item">
            <img src={urlImg} className="object-cover h-[20.25vw] w-[100%]" />
            <div className="info p-[1.375vw]">
                <div className="date text-[1.25vw] font-[400]">
                    <span>{formattedDate} </span>/ <span>Event</span>
                </div>
                <p className="desc text-[1.5625vw] font-[700] mt-[1vw]">
                    Lorem ipsum dolor sit amet consectetur. Quisque curabitur
                    nunc diam laoreet.
                </p>
                <a
                    href="#"
                    className="uppercase text-[1.11vw] font-[700] text-end block mt-[0.7025vw]"
                >
                    See More +
                </a>
            </div>
        </div>
    );
}
