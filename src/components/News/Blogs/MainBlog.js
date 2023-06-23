import React from "react";
import BlogSuggets from "./BlogSuggets";
import Image from "next/image";
import img from "../../../assets/img/contact.png";

export default function MainBlog({ mainBlogs }) {
    const firstBlog = mainBlogs?.[0];
    const arrBlogs = mainBlogs?.slice(1, 5);
    const urlImg = firstBlog?.featuredImage.node.sourceUrl;

    const dateString = firstBlog?.date;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()); //

    const formattedDate = `${day}.${month}.${year}`;
    return (
        <div>
            <div className="flex gap-[1.875vw]">
                <div className="w-[50%]">
                    <Image
                        src={urlImg}
                        width={500}
                        height={500}
                        alt="img"
                        className="w-full h-[30.4375vw] object-cover"
                    />
                    <div>
                        <span className="text-[#376A66] text-[1.125vw] uppercase mt-[1.5vw]">
                            {formattedDate} / company news
                        </span>
                        <h3 className="text-[#394854] font-[800] text-[2vw] leading-[1.25] tracking-tighter mt-[0.5vw]">
                            {firstBlog?.title}
                        </h3>
                        <p
                            className="text-[#394854] leading-[1.44] mt-[1.5vw] text-[1.125vw]"
                            dangerouslySetInnerHTML={{
                                __html: firstBlog?.excerpt,
                            }}
                        />
                        <a
                            href="#"
                            className="text-[#394854] font-[700] text-[1.11vw] block uppercase leading-[2.57] mt-[1vw]"
                        >
                            See More +
                        </a>
                    </div>
                </div>
                <div className="w-[50%] grid grid-cols-2 gap-x-[1.875vw] gap-y-[1.5vw]">
                    {arrBlogs?.map((item) => (
                        <BlogSuggets blog={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
