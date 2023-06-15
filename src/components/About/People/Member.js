import React from "react";
import ListMember from "./ListMember";
import Message from "@/components/Common/Message";
import List from "./ListMember";

function Member() {
    return (
        <div className="member content">
            <h2 className="text-[1.125vw] font-[700] text-[#376A66] mt-[6.25vw]">
                PEOPLE
            </h2>
            <h3 className="text-[3.75vw] font-[800] leading-[1.33] title-mem">
                We have 20 members
            </h3>
            <p className="text-[1.125vw] font-[400] leading-[1.5] mt-[1.5vw]">
                Lorem ipsum dolor sit amet consectetur. Habitasse quam bibendum
                nisl curabitur. Eget mauris tellus pellentesque amet iaculis
                maecenas. Etiam massa tempus dolor nulla erat cursus semper ut
                tincidunt. Scelerisque ornare dictum ut lacus amet nunc dui
                platea maecenas. Auctor ut condimentum dui urna orci id. .
            </p>
            <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="w-[100%] h-[39.5625vw] object-cover mt-[2vw]"
            />
            <h3 className="mt-[7.5vw] text-[3.75vw] font-[800] title-mem text-center">
                Our Members
            </h3>
            <Message />
            <div className="list-member" style={{ paddingBottom: "100px" }}>
                <ListMember />
            </div>
        </div>
    );
}

export default Member;
