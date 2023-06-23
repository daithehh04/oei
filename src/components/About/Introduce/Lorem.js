import React from "react";
import img from "../../../assets/img/lamp.png";
import Image from "next/image";

export default function Lorem() {
    return (
        <div className="lorem-introduce pt-[6.25vw] pb-[4.5625vw] overflow-hidden">
            <div className="content">
                <h2 className="w-[50.1875vw] text-46pc font-[800] leading-[1.22] text-primary tracking-tighter lg:text-[4.5vw] lg:w-[80%] md:text-[6.66vw] md:w-[100%]">
                    Lorem ipsum dolor sit amet consectetur. Mattis in faucibus
                    tristique massa. A lacus quis ut rutrum turpis. Neque nisi
                    neque{" "}
                </h2>
                <div className="flex justify-between w-[95%] ml-auto md:flex-col-reverse md:w-[100%]">
                    <div className="left w-[39.375vw] mt-[7.25vw] md:w-[80.53vw] md:mr-auto md:mt-[8.53vw]">
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full object-cover"
                        />
                        <p className="text mt-[3.75vw]">
                            According to our lean operating model, we have built
                            functional departments and job titles with optimum
                            use of applying information technology to manage and
                            operate daily activities transparently and
                            effectively.
                        </p>
                        <p className="text">
                            We successfully promote the{" "}
                            <strong>“Vietnamese”</strong> brand in international
                            competition, professionalism, and effective business
                            with a long-term development strategy to capitalize
                            on target markets.
                        </p>
                        <p className="text mt-[2vw] md:mt-[4.75vw]">
                            <strong> “Building for Green Energy”</strong> is the
                            slogan that leads us to our goal, and commits us to
                            deliver quality and sustainability in every project.
                        </p>
                    </div>
                    <div className="right w-[36.9375vw] mt-[3.75vw] md:flex md:flex-col-reverse md:w-[80.53vw] md:mt-[6.4vw] md:ml-auto">
                        <p className="text mb-[5.875vw] md:mt-[4.26vw]">
                            The Company comprises dynamic{" "}
                            <strong>qualified personnel</strong>, experienced in
                            the field of offshore transportation and
                            installation in
                            <strong>
                                various international working environments
                            </strong>{" "}
                            and with the inclusive ability to fluently
                            communicate in English.
                        </p>
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
