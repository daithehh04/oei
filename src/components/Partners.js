import Image from "next/image";
import React from "react";

const Partners = ({ data }) => {
    const sectionStyle = {
        width: "100%",
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${data?.background.sourceUrl}})`,
    };
    return (
        <div className="partners" style={sectionStyle}>
            <h2 className="title">{data?.title}</h2>
            <h3 className="text">{data?.desc}</h3>
            <div className="row">
                <div className="row-1">
                    {data?.partnersRow1.map((item, index) => (
                        <Image
                            src={item?.img?.sourceUrl}
                            width={200}
                            height={200}
                            alt="img"
                            key={index}
                        />
                    ))}
                </div>
                <div className="row-2">
                    {data?.partnersRow2.map((item, index) => (
                        <Image
                            src={item?.img?.sourceUrl}
                            width={200}
                            height={200}
                            alt="img"
                            key={index}
                        />
                    ))}
                </div>
                <div className="row-3">
                    {data?.partnersRow3.map((item, index) => (
                        <Image
                            src={item?.img?.sourceUrl}
                            width={200}
                            height={200}
                            alt="img"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
