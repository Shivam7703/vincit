import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri"; // Fallback icon agar data.icon na ho
import Faq from "../global/faq";
import Aside from "../mbbs/side";
import ServiceSlider from "../home/services";
import Count2 from "../home/count2";




export default function ServiceDetail({data }: any) {
    
    
    return (
        <div className="px-4 py-10 sm:py-16 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 min-h-screen">
            {/* Custom 3-Column Grid Layout: 1 Part Sidebar, 2 Part Content */}
            <div className="  max-w-6xl mx-auto">

                


                {/* ── RIGHT MAIN CONTENT AREA ── */}
                <div className=" space-y-10">
                    
                    {/* Dynamic Premium Header Block */}
                    <div className="space-y-4">
                       
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-zinc-600 leading-relaxed text-base sm:text-lg font-normal max-w-3xl">
                            {data.text}
                        </p>
                    </div>

                    {/* Premium Image Block (Sirf tab dikhega jab image exist karegi) */}
                    {data.img && (
                        <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-100 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="relative aspect-[21/9] sm:aspect-[16/8] w-full bg-zinc-100">
                                <Image
                                    src={data.img}
                                    alt={data.title}
                                    fill
                                    priority
                                    className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>
                    )}

                    {/* Key Features Section - Grid representation */}
                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3 mb-5 md:mb-8">
                            <div className="h-px bg-zinc-200 flex-1" />
                            <h4 className=" font-bold text-zinc-800 uppercase tracking-widest whitespace-nowrap">
                                Key Assistance Features
                            </h4>
                            <div className="h-px bg-zinc-400 flex-1" />
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                            {data.features?.map((feature:string, idx:number) => (
                                <li
                                    key={idx}
                                    className="group flex items-start gap-4 text-zinc-800 text-sm sm:text-base bg-white hover:bg-zinc-950 hover:text-white transition-all duration-300 p-4 rounded-2xl border border-zinc-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-xl"
                                >
                                    <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-white/10 group-hover:text-white shrink-0 transition-colors mt-0.5">
                                        <FaCheckCircle className="text-base" />
                                    </div>
                                    <span className="font-semibold tracking-wide leading-snug">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Count2 />
                          <ServiceSlider />
                </div>

            </div>
        </div>
    );
}