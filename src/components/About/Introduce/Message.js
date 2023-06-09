import Image from "next/image";
import React from "react";
import img1 from "../../../assets/img/CEO.png";
import img2 from "../../../assets/img/comman.png";

function Message() {
    return (
        <div className="message">
            <div className="content">
                <div className="wrapper">
                    <p className="ceo-message">CEO Message</p>
                    <div className="left">
                        <Image
                            src={img1}
                            width={500}
                            height={500}
                            alt="CEO OEI"
                        />
                    </div>
                    <div className="right">
                        <Image src={img2} width={100} height={100} alt="img" />
                        <h3 className="title">
                            OEI towards Credibility and Trust{" "}
                        </h3>
                        <p className="desc">
                            We are proud of our staff with a solid background
                            and diverse experience through the world-class
                            projects that OEI has built. OEI people are
                            steadfast, brave, and always ready to overcome all
                            challenges to move forward, creating the future of
                            the construction industry, the future of Vietnam.
                        </p>
                        <div className="name">
                            <p>Mr. DIEP NGUYEN</p>
                            <p>CEO of OEI Group</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
