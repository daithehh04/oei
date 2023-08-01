// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { useRef, useState } from "react";
// import { Pagination } from "swiper";
// import Link from "next/link";

// import img from "../../../assets/img/review.png";
// import img2 from "../../../assets/img/com-color.png";
// import img3 from "../../../assets/img/ceo-2.png";

// import Image from "next/image";

// const arrReviews = new Array(10).fill(0);

// export default function SlideReview() {
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
//         <div className="relative slide-review ">
//             <Swiper
//                 slidesPerView={2}
//                 spaceBetween={80}
//                 onSlideChange={handleSlideChange}
//                 pagination={{
//                     type: "progressbar",
//                 }}
//                 modules={[Pagination]}
//                 onBeforeInit={(swiper) => {
//                     swiperRef.current = swiper;
//                 }}
//                 className="relative flex flex-col items-end w-full swiper-lastnews "
//             >
//                 {arrReviews.map((review, index) => (
//                     <SwiperSlide
//                         key={index}
//                         className="relative slide-item-review h-[20vw]"
//                     >
//                         {({ isActive }) => {
//                             const active = isActive ? "active" : "";
//                             return (
//                                 <Link
//                                     href="/"
//                                     className={`flex ${active} gap-x-[calc(2*100vw/100)]`}
//                                 >
//                                     <div className="w-full h-[calc(26.625*100vw/100)] img-review">
//                                         <Image
//                                             width={344}
//                                             height={426}
//                                             className="object-cover w-full h-full"
//                                             src={img}
//                                             alt="img"
//                                         />
//                                     </div>
//                                     <div className="flex flex-col justify-center transition-all duration-500 bg-white item-review">
//                                         <Image
//                                             width={100}
//                                             height={100}
//                                             src={img2}
//                                             alt="img"
//                                         />
//                                         <p className="text mt-[calc(1.25*100vw/100)]">
//                                             Lorem ipsum dolor sit amet
//                                             consectetur. Nunc scelerisque
//                                             imperdiet ullamcorper potenti.
//                                             Phasellus arcu facilisis elit enim
//                                         </p>
//                                         <div className="flex ceo items-center gap-x-[calc(0.625*100vw/100)] mt-[calc(2*100vw/100)]">
//                                             <Image
//                                                 width={100}
//                                                 height={100}
//                                                 src={img3}
//                                                 alt="img"
//                                             />
//                                             <div className="flex flex-col desc">
//                                                 <span>Lorem</span>
//                                                 <span>CEO at Company</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             );
//                         }}
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//             <div className="flex gap-x-[calc(1.5*100vw/100)] mt-[calc(2.5*100vw/100)] absolute bottom-0 translate-y-1/2 z-[10]">
//                 <button
//                     className={`${
//                         indexSlider === 0
//                             ? "bg-transparent border border-solid border-greenPrimary cursor-not-allowed"
//                             : "bg-greenPrimary cursor-pointer"
//                     } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
//                     onClick={handlePrevSlide}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke={`${indexSlider === 0 ? "#4CA757" : "white"}`}
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
//                         arrReviews.length - indexSlider === 2
//                             ? "bg-transparent border border-solid border-greenPrimary cursor-not-allowed"
//                             : "bg-greenPrimary cursor-pointer"
//                     } w-[calc(3.75*100vw/100)] select-none btn-slide-member  h-[calc(3.75*100vw/100)] rounded-full flex justify-center items-center`}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke={`${
//                             arrReviews.length - indexSlider === 2
//                                 ? "#4CA757"
//                                 : "white"
//                         }`}
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
//         </div>
//     );
// }
