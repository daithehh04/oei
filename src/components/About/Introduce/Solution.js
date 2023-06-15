import React from "react";
import Image from "next/image";
import img from "../../../assets/img/about-page.png";
import imgPerson from "../../../assets/img/person-about.png";

function Solution() {
    return (
        <div className="solution">
            <div className="content">
                <div className="wrapper">
                    <div className="left">
                        <h3 className="text">
                            Solutions toward customer satisfaction
                        </h3>
                        <Image
                            src={imgPerson}
                            width={1000}
                            height={1000}
                            alt="img"
                        />
                    </div>
                    <div className="num">
                        <div>3</div>
                        <span>YEars establish</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solution;
