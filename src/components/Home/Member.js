// "use client";

// import { useState } from "react";
// import SlideMember from "./SlideMember";
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

// const arrMember = new Array(4).fill(0);

// export default function Member() {
//     const [counterOn, setCounterOn] = useState(0);
//     return (
//         <section className="bg-member opacity-95 relative h-auto pb-[calc(6*100vw/100)] w-full pt-[calc(7.5*100vw/100)] px-[calc(4.375*100vw/100)]">
//             <img
//                 className="absolute top-0 left-0 z-[-1] object-cover w-full h-full"
//                 src="https://demo1.okhub.tech/wp-content/uploads/2023/05/Frame.png"
//                 alt=""
//             />
//             <SlideMember />
//             <ScrollTrigger
//                 onEnter={() => setCounterOn(counterOn + 1)}
//                 onExit={() => setCounterOn(counterOn + 1)}
//             >
//                 <p className="relative z-[10] font-extrabold w-[calc(69.8125*100vw/100)] text-[calc(2.875*100vw/100)] leading-[122%] mt-[calc(6.25*100vw/100)] mb-[calc(2.5*100vw/100)]">
//                     Company value reflects its ability to generate future
//                     profits, management, and market position.
//                     <svg
//                         className="absolute w-[calc(6.125*100vw/100)] h-[calc(5*100vw/100)] right-[15%] top-1/2"
//                         viewBox="0 0 100 81"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="M90.8652 7.9141C96.2943 14.4475 99.4998 21.5303 99.3076 33.244C98.9712 53.7431 84.8364 71.6724 65.3109 80.7256L60.4545 73.0299C78.8923 62.7872 82.9876 49.3799 84.2388 40.6128C81.4425 42.3244 77.5586 42.8465 73.6939 42.1973C63.7505 40.8624 56.1363 32.5356 56.3189 21.4076C56.4054 16.1364 58.7058 10.9015 62.094 6.85617C66.0356 2.81992 70.4922 1.13551 76.027 1.22633C82.1153 1.32623 87.602 4.34548 90.8652 7.9141ZM35.5174 7.00591C40.9465 13.5393 44.152 20.6221 43.9598 32.3358C43.6235 52.835 29.4886 70.7643 9.96313 79.8174L5.10676 72.1217C23.5445 61.879 27.6399 48.4718 28.891 39.7046C26.0948 41.4162 22.2108 41.9384 18.3461 41.2891C8.40273 39.9542 0.788592 31.6275 0.971191 20.4994C1.05768 15.2282 3.35809 9.99331 6.74623 5.94798C10.1344 1.90265 15.1445 0.227323 20.6793 0.318142C26.7675 0.418043 32.2542 3.43729 35.5174 7.00591Z"
//                             fill="white"
//                             fillOpacity="0.1"
//                         />
//                     </svg>
//                 </p>
//                 <div className="flex justify-between">
//                     {arrMember.map((item, index) => (
//                         <div key={index}>
//                             <div className="flex gap-x-[calc(0.25*100vw/100)]">
//                                 <div className="w-[calc(9.0625*100vw/100)] h-[calc(5.9375*100vw/100)] ">
//                                     {counterOn > 0 && (
//                                         <CountUp
//                                             className="numberMember inline-block text-[calc(7.8125*100vw/100)] uppercase font-bold leading-[76%] bg-numberMember"
//                                             start={0}
//                                             end={20}
//                                             duration={3.5}
//                                             delay={0}
//                                         />
//                                     )}
//                                 </div>
//                                 <span className="plusMember -mt-[calc(1.625*100vw/100)] uppercase text-[calc(4.6875*100vw/100)] leading-[127%] font-bold bg-plusMember">
//                                     +
//                                 </span>
//                             </div>
//                             <span className="relative uppercase z-[10] mt-[calc(1.25*100vw/100)] block leading-[169%]">
//                                 Founded year
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </ScrollTrigger>
//         </section>
//     );
// }
