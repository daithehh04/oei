import Achievements from "@/components/About/Award/Achievements";
import Certified from "@/components/About/Award/Certified";
import Company from "@/components/About/Award/Company";
import React from "react";

function Award() {
    return (
        <div style={{ height: "10000px" }}>
            <Achievements />
            <Certified />
            {/* <Company /> */}
        </div>
    );
}

export default Award;
