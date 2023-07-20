"use client";
import SlidePartners from "./SlidePartners";

const Partners = ({ data }) => {
    const sectionStyle = {
        width: "100%",
        height: "auto",
        backgroundImage: `url(${data?.background?.sourceUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
    };
    return (
        <section
            className="partners py-[8.75vw] md:py-[18.67vw] md:px-[2.66vw] overflow-hidden"
            style={sectionStyle}
        >
            <div className="wrapper w-[79.5vw] m-auto text-center md:w-full bg-bgPartners">
                <h2 className="title text-[1.125vw] leading-normal font-[700] pt-[5vw] md:pt-[8.53vw] tracking-[0.12em] uppercase text-subtileNew lg:text-[2.25vw] md:text-[3.73vw]">
                    {data?.title}
                </h2>
                <h3 className="text w-[74.69%] md:px-[2.66vw] m-auto text-[2.875vw] font-[800] leading-[1.22] tracking-tighter mt-[1vw] md:mt-[2.13vw] text-primary max-lg:text-[4.5vw] md:text-[8vw] md:w-[100%]">
                    {data?.desc}
                </h3>
                <div className="mx-[3.125vw] slideP">
                    <SlidePartners dataSlide={data?.partnersRow} />
                </div>
            </div>
        </section>
    );
};

export default Partners;
