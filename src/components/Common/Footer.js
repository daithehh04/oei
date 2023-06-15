"use client";
import { GET_GLOBAL_FOOTER } from "@/GraphQL/global/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const { data, loading, error } = useQuery(GET_GLOBAL_FOOTER);
    if (loading) return;
    if (error) return <div className="text-black">{error.message}</div>;
    const {
        background,
        logo,
        title,
        menu,
        copyright,
        form,
        socialMedia,
        address,
        contact,
    } = data?.page?.homePage?.footer;
    return (
        <footer className="relative w-full h-auto pt-[6.5625vw] ">
            <Image
                className="absolute top-0 left-0 w-full h-full z-[-1] transition-opacity opacity-0 duration-[2s]"
                src={background?.sourceUrl}
                alt={background?.altText || background?.title}
                fill
                onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                }
            />
            <div className="flex pl-[4.375vw] pr-[4.25vw]">
                <div className="flex flex-col w-[31.25vw]">
                    <div className="flex flex-col items-center w-fit">
                        <div className="w-[11.9375vw] h-[7.875vw] relative">
                            <Image
                                className="object-cover"
                                src={logo?.sourceUrl}
                                alt={logo?.altText || logo?.title}
                                fill
                            />
                        </div>
                        <span className="font-bold text-[1.25vw] leading-[225%]">
                            {title}
                        </span>
                    </div>
                </div>
                <ul className="flex flex-col gap-y-[0.8125vw] w-[23.25vw]">
                    {menu.slice(0, 6).map((e, index) => (
                        <Link
                            key={index}
                            href={e.item.link?.url || "#"}
                            className="uppercase font-semibold leading-[150%]"
                        >
                            {e.item?.title}
                        </Link>
                    ))}
                </ul>
                <div className="flex justify-between flex-1">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-y-[0.5vw]">
                            {menu.slice(6).map((e, index) => (
                                <Link
                                    key={index}
                                    href={e.item.link?.url || "#"}
                                    className="uppercase font-semibold leading-[150%]"
                                >
                                    {e.item?.title}
                                </Link>
                            ))}
                        </div>
                        <span className="uppercase font-semibold leading-[150%] ">
                            {copyright}
                        </span>
                    </div>
                    <div className="w-[17.5vw]">
                        <p className="uppercase font-bold leading-[150%]">
                            {form?.title}
                        </p>
                        <p className="mt-[0.5vw] mb-[1.5vw] text-[0.875vw] leading-[129%]">
                            {form?.description}
                        </p>
                        <form action="" className="flex justify-between">
                            <input
                                className="bg-transparent outline-none placeholder:text-white05"
                                placeholder={form?.placeholder}
                                type="email"
                                name=""
                                id="emailUser"
                            />
                            <button className="px-[1vw]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="white"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </button>
                        </form>
                        <div className="border border-solid border-black02 mt-[0.5vw] mb-[2.625vw]"></div>
                        <div className="flex gap-x-[1.5vw]">
                            {socialMedia.map((e, index) => (
                                <Link
                                    key={index}
                                    href={e.link?.url || "#"}
                                    className="w-[1.25vw] aspect-square cursor-pointer relative"
                                >
                                    <Image
                                        className="object-contain transition-opacity opacity-0 duration-[2s]"
                                        src={e.item.icon?.sourceUrl}
                                        alt={
                                            e.item.link?.url ||
                                            e.item.link?.title
                                        }
                                        fill
                                        onLoadingComplete={(image) =>
                                            image.classList.remove("opacity-0")
                                        }
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-solid border-black03 mt-[4.6875vw]"></div>
            <div className="flex pl-[4.5625vw] items-center">
                <span className="my-[1.5vw] inline-block w-[31.25vw] uppercase text-[0.875vw] font-semibold leading-[171%]">
                    {address?.title}
                </span>
                <p className="leading-[150%]">{address?.addressCurrent}</p>
            </div>
            <div className="border border-solid border-black03"></div>
            <div className="flex pl-[4.5625vw] pt-[1.375vw] pb-[3.125vw]">
                <span className="uppercase inline-block w-[31.25vw] text-[0.875vw] font-semibold leading-[171%]">
                    {contact?.title}
                </span>
                <ul className="flex">
                    <li className="w-[23.25vw] leading-[150%]">
                        {contact?.phoneNumber}
                    </li>
                    <li className="leading-[150%]">{contact?.email}</li>
                </ul>
            </div>
        </footer>
    );
}
