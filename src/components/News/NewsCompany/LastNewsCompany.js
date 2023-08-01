import React from "react";
import dynamic from "next/dynamic";
const LastNews = dynamic(() => import("../NewsDetail/LastNews"), {
    ssr: false,
});

export default function LastNewsCompany({ data, slug }) {
    return <LastNews news={data} slug={slug} />;
}
