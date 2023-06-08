"use client";

import { useQuery } from "@apollo/client";
import About from "../components/About";
import Partners from "../components/Partners";
import Service from "@/components/Service";
import GET_POSTS from "@/GraphQL/query";

export default function Home() {
    const { data } = useQuery(GET_POSTS);

    const homePage = data?.page?.homePage;

    const about = homePage?.about;

    const partners = homePage?.partners;

    const service = homePage?.service;
    return (
        <main>
            <Partners data={partners} />
            <About data={about} />
            <Service data={service} />
        </main>
    );
}
