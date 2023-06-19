import About from "./About";
import Header from "./Header";
import News from "./News";
import Partners from "./Partners";
import Service from "./Service";
import { GET_DATA_HOME_PAGE } from "@/GraphQL/home/queries";

export async function getData() {
    try {
        const response = await fetch(process.env.API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: GET_DATA_HOME_PAGE,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export default async function IndexHome() {
    const data = await getData();
    const { header, news, partners, service, about } =
        data?.data?.page?.homePage;
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
                    />
                    <Partners data={partners} />
                    <News news={news} />
                </div>
            </main>
        </>
    );
}
