import React from "react";

export default function CompanySuggets({ news }) {
    const dateString = news?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div className="pt-[2vw] pb-[1vw] border-t border-[#BDBDBD]">
            <span className="text-[#376A66] text-[0.9292vw] uppercase">
                {formattedDate} / Event
            </span>
            <h3>
                <a
                    href="#"
                    className=" block text-[#394854] font-[800] text-[1.25vw] leading-[1.35]"
                >
                    {news?.title}
                </a>
            </h3>
            <a
                href="#"
                className="text-[#394854] font-[700] text-[0.8125vw] flex justify-end items-end uppercase leading-[2.57]"
            >
                See More +
            </a>
        </div>
    );
}
