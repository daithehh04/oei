import Link from 'next/link';
import SlideBanner from './SlideBanner';
import Image from 'next/image';

export default function Header({ header }) {
    const { logoImage, phoneNumber, slideHeader, navbar, contentActive } =
        header;
    return (
        <header className="w-full h-[calc(100vh-6*100vw/100)] relative">
            <div className="absolute top-0 left-0 w-full h-full">
                <SlideBanner
                    slideHeader={slideHeader}
                    contentActive={contentActive}
                />
            </div>
            <div className="relative z-10 px-[calc(4.375*100vw/100)] pb-[200px]">
                <div className="flex justify-between py-[calc(0.75*100vw/100)]">
                    <Link
                        href="/"
                        className="w-[calc(7.625*100vw/100)] h-[calc(4.625*100vw/100)]"
                    >
                        <Image
                            className="object-cover w-full h-full"
                            src={logoImage.sourceUrl}
                            alt={logoImage.altText}
                            width={122}
                            height={74}
                        />
                    </Link>
                    <div className="flex gap-x-[calc(1.625*100vw/100)] items-center">
                        <div className="flex justify-center items-center border w-[calc(9.5*100vw/100)] h-[calc(2.5*100vw/100)] rounded-[calc(1.25*100vw/100)] border-solid border-white025">
                            <span className="capitalize font-semibold text-[calc(0.875*100vw/100)] leading-[179%]">
                                {phoneNumber}
                            </span>
                        </div>
                    </div>
                </div>
                <nav className="relative z-10 flex justify-between">
                    {navbar.map((item, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="w-[calc(11.6875*100vw/100)] h-[calc(2.125*100vw/100)] flex items-end cursor-pointer border-t-[1px] hover:border-white border-black015"
                        >
                            <span className="text-[calc(1.125*100vw/100)] leading-[111%] font-bold">
                                {item.titleNav}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
