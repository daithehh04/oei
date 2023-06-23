import { GET_HEADER_BLOGS_NEWS } from "@/GraphQL/news/queries";
import HeaderSecond from "@/components/Common/HeaderSecond";
import ListBlog from "@/components/News/Blogs/ListBlog";
import MainBlog from "@/components/News/Blogs/MainBlog";
import getData from "@/utils/getData";
import React from "react";

export default async function Blogs() {
    const data = await getData(GET_HEADER_BLOGS_NEWS);

    const { header } = data?.data?.page?.blogs;
    return (
        <>
            <HeaderSecond header={header} />
            <div className="bg-[#FAFAFA] ">
                <ListBlog />
            </div>
        </>
    );
}
