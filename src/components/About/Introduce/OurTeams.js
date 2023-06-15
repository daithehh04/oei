import React from "react";
import SlideTeams from "./SlideTeams";

export default function OurTeams() {
    return (
        <div className="our-teams">
            <div className="content">
                <div className="row">
                    <h3 className="title">Our Team</h3>
                    <a href="/" className="btn-see">
                        See More
                    </a>
                </div>
                <SlideTeams />
            </div>
        </div>
    );
}
