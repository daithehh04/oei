import React from "react";

export default function Equipment() {
    return (
        <div>
            <h2>Core Equipment Inventory: Enabling Operational Excellence</h2>
            <div>
                <ul className="list-heading">
                    <li className="heading-item">Tensioner</li>
                    <li className="heading-item">Generators</li>
                    <li className="heading-item">Compressors</li>
                    <li className="heading-item">Winches</li>
                </ul>
                <div className="list-content">
                    <div className="content-1">
                        <div className="left">
                            <h3 className="name">Tensioner</h3>
                            <p className="desc">
                                We use our own balance sheet to invest and hence
                                can deploy quickly; Through our parent company
                                we have local investment expertise and are able
                                to transact in local currency - VND.
                            </p>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
