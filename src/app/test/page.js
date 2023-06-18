import { GET_DATA_HOME_PAGE } from "@/GraphQL/home/queries";

async function getDataHomePage() {
    const res = await fetch(process.env.API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: GET_DATA_HOME_PAGE,
        }),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
export default async function page() {
    const data = await getDataHomePage();
    const db = JSON.stringify(data);
    return <div>{db}</div>;
}
