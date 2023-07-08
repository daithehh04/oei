// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { useRef, useState } from "react";
// import { Pagination } from "swiper";
// import Link from "next/link";

// import img from "../../../assets/img/certified.png";
// import Image from "next/image";

// const arrTeams = new Array(10).fill(0);

// export default function SlideCertified() {
//     const [indexSlider, setIndexSlider] = useState(0);
//     const swiperRef = useRef();
//     const handleNextSlide = () => {
//         swiperRef.current?.slideNext();
//     };

//     const handlePrevSlide = () => {
//         swiperRef.current?.slidePrev();
//     };

//     const handleSlideChange = (swiper) => {
//         setIndexSlider(swiper.activeIndex);
//     };

//     return (
//         <div className="relative slide-certified">
//             <div className="flex flex-col gap-y-[24px] gap-x-[calc(1.5*100vw/100)] btn-action">
//                 <button
//                     className={`${
//                         indexSlider === 0
//                             ? "bg-active border border-solid border-greenPrimary cursor-not-allowed"
//                             : "bg-active cursor-pointer"
//                     } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
//                     onClick={handlePrevSlide}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="white"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15.75 19.5L8.25 12l7.5-7.5"
//                         />
//                     </svg>
//                 </button>
//                 <button
//                     onClick={handleNextSlide}
//                     className={`${
//                         arrTeams.length - indexSlider === 0
//                             ? "bg-active border border-solid border-greenPrimary cursor-not-allowed"
//                             : "bg-active cursor-pointer"
//                     } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="white"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                         />
//                     </svg>
//                 </button>
//             </div>
//             <Swiper
//                 slidesPerView={4}
//                 spaceBetween={60}
//                 onSlideChange={handleSlideChange}
//                 modules={[Pagination]}
//                 onBeforeInit={(swiper) => {
//                     swiperRef.current = swiper;
//                 }}
//                 className="relative flex flex-col items-end w-full h-fit swiper-certified"
//             >
//                 {arrTeams.map((news, index) => (
//                     <SwiperSlide
//                         key={index}
//                         className="!h-fit relative slide-item-certified"
//                     >
//                         {({ isActive }) => (
//                             <Link href="/">
//                                 <div className="w-full h-[calc(26.625*100vw/100)] img-certified">
//                                     <Image
//                                         width={344}
//                                         height={426}
//                                         className="object-cover w-full h-full"
//                                         src={img}
//                                         alt="img"
//                                     />
//                                 </div>
//                             </Link>
//                         )}
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }
