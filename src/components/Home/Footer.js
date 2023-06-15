import Image from "next/image";
import Link from "next/link";

export default function Footer({ footer }) {
    const {
        background,
        title,
        menu,
        copyright,
        form,
        socialMedia,
        address,
        contact,
    } = footer;
    return (
        <footer className="relative w-full h-auto pt-[calc(6.5625*100vw/100)] ">
            <Image
                className="absolute top-0 left-0 object-cover w-full h-full z-[-1]"
                src={background?.sourceUrl}
                alt={background?.altText || background?.title}
                width={1600}
                height={561}
            />
            <div className="flex pl-[calc(4.375*100vw/100)] pr-[calc(4.25*100vw/100)]">
                <div className="flex flex-col w-[calc(31.25*100vw/100)]">
                    <div className="flex flex-col w-fit items-center">
                        <img
                            className="w-[calc(11.9375*100vw/100)] h-[calc(7.875*100vw/100)] object-cover"
                            src="https://demo1.okhub.tech/wp-content/uploads/2023/05/image-1703.png"
                            alt=""
                        />
                        <span className="font-bold text-[calc(1.25*100vw/100)] leading-[225%]">
                            {title}
                        </span>
                    </div>
                </div>
                <ul className="flex flex-col gap-y-[calc(0.8125*100vw/100)] w-[calc(23.25*100vw/100)]">
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
                        <div className="flex flex-col gap-y-[calc(0.5*100vw/100)]">
                            {menu.slice(6).map((e, index) => (
                                <Link
                                    key={index}
                                    href={e.item.link || "#"}
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
                    <div className="w-[calc(17.5*100vw/100)]">
                        <p className="uppercase font-bold leading-[150%]">
                            {form?.title}
                        </p>
                        <p className="mt-[calc(0.5*100vw/100)] mb-[calc(1.5*100vw/100)] text-[calc(0.875*100vw/100)] leading-[129%]">
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
                            <button className="px-[calc(1*100vw/100)]">
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
                        <div className="border border-solid border-black02 mt-[calc(0.5*100vw/100)] mb-[calc(2.625*100vw/100)]"></div>
                        <div className="flex gap-x-[calc(1.5*100vw/100)]">
                            {socialMedia.map((e, index) => (
                                <Link
                                    key={index}
                                    href={e.link || "#"}
                                    className="w-[calc(1.25*100VW/100)] h-[calc(1.25*100vw/100)] cursor-pointer"
                                >
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={e.item.icon?.sourceUrl}
                                        alt={
                                            e.item.icon.altText ||
                                            e.item.icon?.title
                                        }
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-solid border-black03 mt-[calc(4.6875*100vw/100)]"></div>
            <div className="flex pl-[calc(4.5625*100vw/100)] items-center">
                <span className="my-[calc(1.5*100vw/100)] inline-block w-[calc(31.25*100vw/100)] uppercase text-[calc(0.875*100vw/100)] font-semibold leading-[171%]">
                    {address?.title}
                </span>
                <p className="leading-[150%]">{address?.addressCurrent}</p>
            </div>
            <div className="border border-solid border-black03"></div>
            <div className="flex pl-[calc(4.5625*100vw/100)] pt-[calc(1.375*100vw/100)] pb-[calc(3.125*100vw/100)]">
                <span className="uppercase inline-block w-[calc(31.25*100vw/100)] text-[calc(0.875*100vw/100)] font-semibold leading-[171%]">
                    {contact?.title}
                </span>
                <ul className="flex">
                    <li className="w-[calc(23.25*100vw/100)] leading-[150%]">
                        {contact?.phoneNumber}
                    </li>
                    <li className="leading-[150%]">{contact?.email}</li>
                </ul>
            </div>
        </footer>
    );
}
