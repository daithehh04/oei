"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
    ssr: false,
});

const ScrollContainer = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = containerRef.current;
        const locomotiveScroll = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
        });

        return () => {
            locomotiveScroll.destroy();
        };
    }, []);

    return (
        <div ref={containerRef} data-scroll-container>
            {children}
        </div>
    );
};

export default ScrollContainer;
