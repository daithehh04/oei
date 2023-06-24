import Image from "next/image";
import Navbar from "./Navbar";

const src =
    "https://demo1.okhub.tech/wp-content/uploads/2023/06/Rectangle-4752.jpg";

export default function HeaderSecond({ header }) {
    return (
        <header className="w-[100vw] h-[100vh] relative">
            <Image
                className="object-cover"
                src={header?.background?.sourceUrl}
                alt={header?.background?.altText || header?.background?.title}
                fill
            />
            <Navbar />
            <div className="absolute bottom-[8.875vw] left-[4.375vw] w-[53.8125vw] md:bottom-[13.33vw] md:w-[90%]">
                <h1 className="capitalize tracking-[-0.05em] font-extrabold text-[3.75vw] leading-[133%] text-[white] md:w-full md:text-35mb md:leading-111 lg:text-42tl">
                    {header?.title}
                </h1>
            </div>
            <p className="text-[#fff] absolute right-[4.375vw] bottom-[8.25vw] w-[36.9375vw] text-[1.5vw] font-[400] leading-[1.58] md:text-16mb md:leading-150 md:mt-[2.13vw] md:max-w-full">
                {header?.desc}
            </p>
        </header>
    );
}
