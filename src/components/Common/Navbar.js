import { GET_GLOBAL_NAVBAR } from "@/GraphQL/global/queries";
import getData from "@/utils/getData";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
    const data = await getData(GET_GLOBAL_NAVBAR);
    const { logoImage, phoneNumber, navbar } =
        data?.data?.page?.homePage?.header;
    return (
        <div className="relative z-10 px-[4.375vw]">
            <div className="flex justify-between py-[0.75vw]">
                <Link href="#" className="w-[7.625vw] h-[4.625vw]">
                    <Image
                        className="object-cover w-full h-full"
                        src={logoImage?.sourceUrl}
                        alt={logoImage?.altText || logoImage?.title}
                        width={122}
                        height={74}
                    />
                </Link>
                <div className="flex gap-x-[1.625vw] items-center">
                    <div className="flex justify-center items-center border w-[9.5vw] h-[2.5vw] rounded-[1.25vw] border-solid border-white025">
                        <span className="capitalize font-semibold text-[0.875vw] leading-[179%] text-[white]">
                            {phoneNumber}
                        </span>
                    </div>
                </div>
            </div>
            <nav className="relative z-10 flex justify-between">
                {navbar.map((item, index) => (
                    <Link
                        key={index}
                        href={item?.href || "#"}
                        className="w-[11.6875vw] h-[2.125vw] flex items-end cursor-pointer border-t-[1px] hover:border-white border-black015"
                    >
                        <span className="text-[1.125vw] leading-[111%] font-bold">
                            {item?.titleNav}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
