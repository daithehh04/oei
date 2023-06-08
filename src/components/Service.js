import React, { useState } from "react";
import Image from "next/image";

import imgPlusNum from "../assets/img/+.png";
import imgPlus from "../assets/img/plus.png";

import SlideTextService from "./SlideTextService";

const Service = ({ data }) => {
    const [overlay, setOverlay] = useState(false);
    const over_lay = overlay && "over-lay";

    const handleEnterOverlay = () => {
        setTimeout(() => {
            setOverlay(true);
        }, 100);
    };

    const handleLeaveOverlay = () => {
        setTimeout(() => {
            setOverlay(false);
        }, 100);
    };

    const altText = data?.altImg || "img";
    var sectionStyle = {
        width: "100%",
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${data?.background.sourceUrl})`,
    };
    return (
        <div className="service" style={sectionStyle}>
            <div className="content">
                <div className="list-service">
                    <div className="title">
                        <h2>{data?.title}</h2>
                        <h3>{data?.subTitle}</h3>
                    </div>

                    {data?.listService.map((item, index) => (
                        <div
                            className={`service-item item-${index + 1}`}
                            onMouseEnter={handleEnterOverlay}
                            onMouseLeave={handleLeaveOverlay}
                            key={index}
                        >
                            <Image
                                src={item?.img?.sourceUrl}
                                alt={altText}
                                width={500}
                                height={500}
                            />
                            <div className="detail">
                                <p>{item?.desc}</p>
                                <a href="#">{item?.btnSee}</a>
                            </div>
                            <div className="plus">
                                <Image src={imgPlus} alt="img" />
                            </div>
                            <p className="text">{item?.text}</p>
                        </div>
                    ))}

                    {data?.item1.map((item, index) => (
                        <div className="service-item item-9" key={index}>
                            <Image
                                src={item?.img?.sourceUrl}
                                alt="img"
                                width={500}
                                height={500}
                            />
                            <p className="text">{item?.text}</p>
                        </div>
                    ))}

                    {data?.item2.map((item, index) => (
                        <div className="service-item item-8" key={index}>
                            <div className="num">
                                <span>{item?.number}</span>
                                <Image
                                    src={imgPlusNum}
                                    alt="img"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text">{item?.text}</p>
                        </div>
                    ))}

                    {data?.item3.map((item, index) => (
                        <div className="service-item item-10" key={index}>
                            <span>{item?.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <SlideTextService text={data?.textBottom} />
            <div className={`${over_lay}`}></div>
        </div>
    );
};

export default Service;
