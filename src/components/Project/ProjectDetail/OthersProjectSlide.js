"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SwiperCore, { Autoplay, FreeMode } from "swiper";

export default function OthersProjectSlide({ projectAll }) {
    SwiperCore.use([Autoplay]);
    const swiperRef = useRef();

    return (
        <div className="relative project-item w-[91.25%] ml-auto mr-auto md:w-full">
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView="auto"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                className="relative flex flex-col items-end w-full swiper-otherProject "
            >
                {projectAll?.map((otherProject, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative slide-item-otherProject md:!w-[80%] md:ml-[2.66vw] md:last:mr-[2.66vw]"
                    >
                        {({ isActive }) => {
                            const urlImg =
                                otherProject?.featuredImage?.node?.sourceUrl;
                            return (
                                <div className="slide-item__otherProject">
                                    <Link
                                        href={`/project/${encodeURIComponent(
                                            otherProject?.slug
                                        )}`}
                                        className="relative w-full"
                                    >
                                        <Image
                                            className="object-cover w-full h-[21.5625vw] lg:h-[30vw] md:h-[57.86vw]"
                                            src={urlImg}
                                            alt={
                                                otherProject?.featuredImage
                                                    ?.node?.altText ||
                                                otherProject?.featuredImage
                                                    ?.node?.title
                                            }
                                            width={500}
                                            height={500}
                                        />
                                        <div className="absolute top-0 bottom-0 left-0 right-0 overlay-img"></div>
                                    </Link>
                                    <div className="pt-[1.25vw] bg-[#fff] pb-[1.5vw] pl-[1vw] pr-[3vw] md:p-[4.27vw] md:min-h-[61vw]">
                                        <p className="text-[1vw] font-[400] leading-[1.44] text-[#394854] uppercase md:text-[2.66vw] lg:text-[1.65vw] md:font-[600]">
                                            {
                                                otherProject?.projectDetail
                                                    ?.project?.name
                                            }
                                        </p>
                                        <Link
                                            href={`/project/${encodeURIComponent(
                                                otherProject?.slug
                                            )}`}
                                        >
                                            <h3 className="pt-[0.625vw] text-[1.6875vw] font-[700] text-primary leading-[1.25] tracking-tighter title-other_prj line-clamp-1 md:line-clamp-2 lg:text-[3vw] md:text-[4.46vw]">
                                                {otherProject?.title}
                                            </h3>
                                        </Link>
                                        <p className="hidden md:block md:!line-clamp-3 md:text-[3.13vw] text-[#394854] md:mt-[1vw] md:min-h-[14vw]">
                                            {
                                                otherProject?.projectDetail
                                                    ?.project?.desc
                                            }
                                        </p>
                                        <div className="hidden md:flex items-center mt-[3.3vw] gap-[3.06vw] lg:flex-wrap lg:gap-x-0 md:flex-wrap md:gap-y-[2.67vw] md:gap-x-0">
                                            {otherProject?.projectDetail?.project?.repeatInfo?.map(
                                                (item, index) => (
                                                    <div
                                                        className="owner flex flex-col text-[#394854] lg:w-[50%] md:w-[50%] "
                                                        key={index}
                                                    >
                                                        <span className="text-[0.875vw] font-[400] lg:text-[1.75vw] md:text-[2.22vw] md:leading-[1.75]">
                                                            {item?.title}
                                                        </span>
                                                        <span className="text-[1.25vw] font-[600] leading-[1.3] lg:text-[2vw] md:text-[3.11vw]">
                                                            {item?.content}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <Link
                                            href={`/project/${encodeURIComponent(
                                                otherProject?.slug
                                            )}`}
                                            className="uppercase text-primary text-[1vw] font-[700] leading-[2.25vw] block mt-[0.38vw] md:hidden lg:text-[1.75vw] lg:mt-[1.5vw]"
                                        >
                                            View Project +
                                        </Link>
                                    </div>
                                </div>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
