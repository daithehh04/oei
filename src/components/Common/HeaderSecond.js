import Image from "next/image";
import Navbar from "./Navbar";

const src =
    "https://demo1.okhub.tech/wp-content/uploads/2023/06/Rectangle-4752.jpg";

export default function HeaderSecond({ header }) {
    const { background, breadcrumb, title } = header;
    return (
        <header className="w-[100vw] h-[100vh] relative">
            <Image
                className="object-cover"
                src={background?.sourceUrl}
                alt={background?.altText || background?.title}
                fill
            />
            <Navbar />
            <div className="absolute bottom-[8.875vw] left-[4.375vw]">
                <div className="flex gap-x-[0.5vw] text-[white]">
                    <span className="uppercase text-[1.125vw] leading-[150%] tracking-[0.12em] opacity-50">
                        Home /
                    </span>
                    <span className="uppercase text-[1.125vw] leading-[150%] tracking-[0.12em]">
                        ABOUT US
                    </span>
                </div>
                <h1 className="capitalize tracking-[-0.05em] font-extrabold text-[3.75vw] leading-[133%] text-[white]">
                    Introduction
                </h1>
            </div>
        </header>
    );
}
