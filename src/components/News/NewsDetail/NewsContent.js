import React from "react";
import LastNews from "./LastNews";

export default function NewsContent() {
    return (
        <div className="pb-[100px]">
            <div className="news-content w-[67.375vw] mx-[auto]">
                <h2 className="title text-[2.875vw] font-[800] tracking-tighter">
                    Project management, technical and engineering service
                </h2>
                <p className="text-[#376A66] text-[1.25vw] font-[400] leading-[1.69]">
                    <span>26.04.2022</span> / <span>Event</span> -{" "}
                    <span>Hoang Linh</span>
                </p>
                <div className="line w-[100%] h-[1px] bg-[#ccc] mt-[1vw] mb-[2vw]"></div>
                <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    className="w-[100%] h-[35.4375vw] object-cover"
                />
                <div className="table-content w-[40.5vw] p-[2vw] bg-[#ccc] mt-[2vw]">
                    <div>
                        <h3>Table of Content</h3>
                        <i />
                    </div>
                </div>
            </div>
            <LastNews />
        </div>
    );
}
