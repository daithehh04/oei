"use client";
import { useQuery } from "@apollo/client";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Member from "./Member";
import News from "./News";
import Partners from "./Partners";
import Service from "./Service";
import { GET_DATA_HOME } from "@/GraphQL/home/queries";

export default function IndexHome() {
    const { data, loading, error } = useQuery(GET_DATA_HOME);
    if (loading) return <div className="text-black">loading ...</div>;
    if (error) return <div className="text-black">{error.message}</div>;
    const { header, footer, news, partners, service, about } =
        data?.page?.homePage;
    return (
        <>
            <Header header={header} />
            <main>
                {/* <SiteMap /> */}
                <About data={about} />
                {/* <Member /> */}
                <Service data={service} />
                <div className="w-full h-auto relative container-second-section overflow-hidden">
                    <img
                        className="absolute background-second-section top-0 left-0 object-cover w-full h-full z-[-1]"
                        src="https://demo1.okhub.tech/wp-content/uploads/2023/06/bg-partners-1.png"
                        // alt={src}
                        // width={1600}
                        // height={1612}
                    />
                    <Partners data={partners} />
                    <News news={news} />
                </div>
            </main>
            <Footer footer={footer} />
        </>
    );
}
