import Drilled from "@/components/About/Introduce/Drilled";
import Dynamic from "@/components/About/Introduce/Dynamic";
import Message from "@/components/About/Introduce/Message";
import Solution from "@/components/About/Introduce/Solution";
import React from "react";

function Introduce() {
    return (
        <div style={{ height: "10000px" }}>
            <Solution />
            <Drilled />
            <Message />
            <Dynamic />
        </div>
    );
}

export default Introduce;
