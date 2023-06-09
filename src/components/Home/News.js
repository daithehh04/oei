import Link from 'next/link';
import SlideNews from './SlideNews';

const arrNews = new Array(3).fill(0);

export default function News({ news }) {
    const { subTitle, title } = news;
    return (
        <section
            id="news"
            className="w-full px-[calc(4.375*100vw/100)] py-[calc(7.5*100vw/100)]"
        >
            <div className="flex items-center justify-between mb-[calc(3.125*100vw/100)]">
                <div className="w-[50%]">
                    <span className="uppercase inline-block tracking-[0.12em] text-subtileNew font-bold text-[calc(1.125*100vw/100)] leading-[150%]">
                        {subTitle}
                    </span>
                    <h2 className="title bg-member capitalize text-[calc(3.75*100vw/100)] -tracking-[0.05em] font-extrabold  leading-[133%]">
                        {title}
                    </h2>
                </div>

                <button className="uppercase bg-member shadow-btnNews w-[calc(11.125*100vw/100)] h-[calc(3.75*100vw/100)] -tracking-[0.4px] font-normal text-[calc(1*100vw/100)] leading-[156%] rounded-[calc(2*100vw/100)] px-[calc(2.75*100vw/100)] py-[calc(1.125*100vw/100)]">
                    See more
                </button>
            </div>
            <SlideNews />
        </section>
    );
}
