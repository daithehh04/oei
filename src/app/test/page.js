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
export default async function page() {
    const data = await getData();
    console.log(data?.data?.page?.homePage);
    const { header, footer, news, partners, service, about } =
        data?.data?.page?.homePage;
    const db = JSON.stringify(about);
    return <div>{db}</div>;
}
