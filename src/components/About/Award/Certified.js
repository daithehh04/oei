import React from "react";
import SlideCertified from "./SlideCertified";

function Certified() {
    return (
        <div className="certified">
            <div className="content">
                <div className="row">
                    <h3 className="ISO Certified">ISO Certified</h3>
                    <p className="desc">
                        Our Company quality management and operation system have
                        been recognized and certified by DNV according to ISO
                        9001:2015 and ISO 45001:2018.
                    </p>
                </div>
                <SlideCertified />
            </div>
        </div>
    );
}

export default Certified;
