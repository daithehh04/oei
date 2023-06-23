import Image from "next/image";
import React from "react";
import img1 from "../../assets/img/CEO.png";
import img2 from "../../assets/img/comman.png";

function Message() {
    return (
        <div className="message md:mt-[0] overflow-hidden">
            <div className="wrapper flex relative w-full md:flex-col">
                <p className="ceo-message text-[1.125vw] uppercase absolute top-0 w-[63%] border-b border-[#fff] text-[#fff] font-[400] mt-[2.5vw] leading-normal ml-[35%] md:ml-[3vw] md:w-[93%] md:text-[3.73vw] md:top-[50%] lg:text-[1.75vw]">
                    CEO Message
                </p>
                <div className="left w-[50%] md:w-full">
                    <Image
                        src={img1}
                        width={500}
                        height={500}
                        alt="CEO OEI"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="right w-[50%] md:w-full bg-member px-[4.375vw] text-[#fff]">
                    <Image
                        src={img2}
                        width={100}
                        height={100}
                        alt="img"
                        className="w-[7.9375vw] object-contain mt-[8.6875vw] ml-[-1.5vw] md:hidden"
                    />
                    <h3 className="title text-[2.875vw] font-[800] leading-[1.22] text-[#fff] tracking-tighter mt-[-3vw] md:text-[6.66vw] md:mt-[25.06vw] lg:text-[4vw]">
                        OEI towards Credibility and Trust{" "}
                    </h3>
                    <p className="desc text-[#fff] text-[1.5vw] font-[400] leading-[1.38] w-[32.4375vw] mt-[1.5vw] md:w-[100%] md:text-[4.26vw] md:mt-[2.13vw] lg:text-[2vw]">
                        We are proud of our staff with a solid background and
                        diverse experience through the world-class projects that
                        OEI has built. OEI people are steadfast, brave, and
                        always ready to overcome all challenges to move forward,
                        creating the future of the construction industry, the
                        future of Vietnam.
                    </p>
                    <div className="name mt-[4.5625vw] pb-[5.75vw] w-max ml-auto">
                        <p className="text-[1.25vw] font-[700] leading-[1.3] text-[#fff] tracking-[-0.03em] md:text-[4.26vw] lg:text-[2vw]">
                            Mr. DIEP NGUYEN
                        </p>
                        <p className="text-[0.875vw] font-[700] leading-[1.43] text-[#fff] mt-[0.375vw] md:text-[3.2vw] lg:text-[1.45vw]">
                            CEO of OEI Group
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
