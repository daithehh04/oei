"use client";
import { useQuery } from "@apollo/client";
import { GET_SECTION_SITEMAP } from "@/GraphQL/home/queries";

export default function SiteMap() {
    const { loading, error, data } = useQuery(GET_SECTION_SITEMAP);

    if (loading) return <div>Loading ...</div>;
    if (error) return <div>{error.message}</div>;
    const dt = data?.pages?.edges[0]?.node?.homePage?.sectionSitemap;
    return (
        <>
            <section className="relative px-[calc(4.375*100vw/100)] pb-[calc(6.25*100vw/100)] h-[100vh] w-full">
                <img
                    className="absolute top-0 left-0 bottom-0 right-0 object-cover h-full w-[100vw] z-[-1]"
                    src={dt.backgroundImage?.sourceUrl}
                    alt=""
                />
                <div className="z-10  flex pt-[calc(5.75*100vw/100)] pb-[calc(1*100vw/100)] gap-x-[calc(0.75*100vw/100)]">
                    <div className="flex justify-between py-[calc(0.71875*100vw/100)] text-[calc(0.875*100vw/100)] leading-[143%] font-normal min-w-[132px] px-[calc(1*100vw/100)] border border-solid border-white rounded-[calc(3.125*100vw/100)]">
                        Năm 2022{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-[calc(1.5*100vw/100)] h-[calc(1.5*100vw/100)]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                    <div className="flex justify-between py-[calc(0.71875*100vw/100)] text-[calc(0.875*100vw/100)] leading-[143%] font-normal min-w-[calc(8.25*100vw/100)] px-[calc(1*100vw/100)] border border-solid border-white rounded-[calc(3.125*100vw/100)]">
                        China{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-[calc(1.5*100vw/100)] h-[calc(1.5*100vw/100)]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>
                <hr />
                <div className="pt-[calc(1.125*100vw/100)] flex justify-between">
                    <div className="flex gap-x-[calc(0.75*100vw/100)]">
                        <h2 className=" text-[calc(7.5*100vw/100)] font-bold leading-[125%]">
                            {dt.impressiveNumbers}
                        </h2>
                        <div className="text-[calc(5*100vw/100)] leading-[188%] font-bold flex items-start -translate-y-1/4">
                            +
                        </div>
                    </div>
                    <p className="font-normal w-[calc(30.625*100vw/100)] leading-[146%] text-[calc(1.625*100vw/100)] ">
                        {dt.description}
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="relative w-[calc(44.5*100vw/100)] h-[calc(25.8*100vw/100)]">
                        <img
                            className="absolute top-0 bottom-0 left-0 right-0 object-cover"
                            src={dt.mapImage?.sourceUrl}
                            alt=""
                        />
                        <div className="absolute w-[calc(18.75*100vw/100)] h-[calc(18.75*100vw/100)] top-[calc(3.125*100vw/100)] left-[calc(12.75*100vw/100)]">
                            <img src={dt.circleLarge?.sourceUrl} alt="" />
                            <div className="absolute w-[calc(0.75*100vw/100)] h-[calc(0.75*100vw/100)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2">
                                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[calc(35*100vw/100)] border border-[#ffffff26] border-dashed">
                                    <div className="absolute -top-[calc(2*100vw/100)] -translate-y-full left-1/2 -translate-x-1/2">
                                        {dt.contentCircleLarge.title}
                                    </div>
                                    <div className="absolute w-[calc(38.82*100vw/100)] top-[calc(2*100vw/100)] left-[18%] h-[calc(24.25*100vw/100)]">
                                        <div className="relative w-[calc(38.82*100vw/100)] h-[calc(24.25*100vw/100)]">
                                            <img
                                                className="absolute top-0 left-0 z-[-1] object-cover w-full h-full"
                                                src={
                                                    dt.contentCircleLarge.image
                                                        ?.sourceUrl
                                                }
                                                alt=""
                                            />
                                            <div className="z-10 pl-[calc(2.5*100vw/100)] flex flex-col justify-center w-full h-full">
                                                <h4 className="font-extrabold uppercase text-[calc(1.625*100vw/100)] leading-[146%] mb-[calc(1.5*100vw/100)]">
                                                    {
                                                        dt.contentCircleLarge
                                                            .title
                                                    }
                                                </h4>
                                                <div className="flex flex-col gap-y-[calc(1*100vw/100)]">
                                                    {dt.contentCircleLarge.description?.map(
                                                        (item, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex gap-x-[calc(0.625*100vw/100)] items-center"
                                                            >
                                                                <div className="w-[calc(1.5*100vw/100)] flex justify-center items-center h-[calc(1.5*100vw/100)] bg-white rounded-full">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="6"
                                                                        stroke="#008277"
                                                                        className="w-[calc(0.75*100vw/100)] h-[calc(0.75*100vw/100)]"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M4.5 12.75l6 6 9-13.5"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <span className="w-[calc(21.875*100vw/100)]  text-[calc(1.125*100vw/100)] leading-[144%] font-normal">
                                                                    {
                                                                        item.content
                                                                    }
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[calc(3.75*100vw/100)] h-[calc(3.75*100vw/100)] top-[calc(15.625*100vw/100)] left-[calc(2.71*100vw/100)]">
                            <img src={dt.circleSmall?.sourceUrl} alt="" />
                            <div className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2">
                                <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-[calc(16*100vw/100)] border border-[#ffffff26] border-dashed">
                                    <div className="absolute min-w-max font-extrabold leading-[180%] text-[calc(1.25*100vw/100)] -tracking-[0.32px] -translate-x-1/2 -translate-y-full -top-[calc(1.18*100vw/100)] left-1/2">
                                        {dt.contentCircleSmall.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-[calc(1*100vw/100)] left-[calc(6.25*100vw/100)] items-center absolute bottom-[calc(6.25*100vw/100)]">
                    <div className="flex justify-center items-center w-[calc(1.875*100vw/100)] h-[calc(1.875*100vw/100)] rounded-full bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="#008277"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                    <span className="text-[calc(1.125*100vw/100)] font-normal  leading-[200%]">
                        See All
                    </span>
                </div>
            </section>
        </>
    );
}
