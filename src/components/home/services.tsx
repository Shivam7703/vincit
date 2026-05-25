"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Suppress TS error when type declarations for the side-effect CSS import are missing
// @ts-ignore: CSS module without type declarations
import "swiper/css";
// @ts-ignore: CSS module without type declarations
import "swiper/css/navigation";
import { Servicedata as data } from "@/data/homeData";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

export default function ServiceSlider() {
  const uniqueId = "service123";
  return (
    <section id="services" className="relative bg-white font1 p-6 md:p-14 ">

      {/* ── Header Row ── */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:items-start gap-4  md:gap-12 mb-10">
        
        {/* Left: label + title */}
        <div className="md:w-[52%]">
          <h4 className="text-color2 text-xs font-bold tracking-[0.22em] mb-3">
            {data.title1}
          </h4>
          <h2 className="text-black font-black text-2xl md:text-4xl  uppercase leading-tight
                          pb-1">
            {data.title2}
          </h2>
        </div>

        {/* Right: subtitle para */}
        <p className="md:w-[44%] text-gray-800 md:text-lg leading-relaxed md:pt-8">
{data?.para}        </p>


      </div>

      {/* ── Slider ── */}
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
 navigation={{
              nextEl: `.${uniqueId}-next`,
              prevEl: `.${uniqueId}-prev`,
            }}          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            0:    { slidesPerView: 1 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3, spaceBetween: 20},
          }}
        >
          {data?.service?.map((service, index) => (
            <SwiperSlide key={index} >
           <div className="group block h-full ">
  <Link href={service?.title || "#"} className="block h-full">
    <div className="bg-white rounded-2xl m-4 shadow-lg hover:-translate-y-2 hover:shadow-xl shadow-black/40  transition-all duration-500 overflow-hidden  h-full flex flex-col relative">
      
      {/* Image Container with Overlay */}
      <div className="h-44 sm:h-56 rounded-t-2xl relative overflow-hidden">
        <Image
          src={service?.img}
          alt={service?.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Body */}
      <div className="px-5 pt-7 pb-6 relative flex-1 flex flex-col">
        
        {/* Floating Icon with Animation */}
        <div className="absolute -top-5 sm:-top-7 right-5 w-10 h-10 sm:h-14 sm:w-14 bg-gradient-to-br from-color4 to-color5 rounded-2xl flex items-center justify-center border-2 border-white z-10 text-white text-lg sm:text-2xl shadow-xl  transition-transform duration-300">
          {service?.icon}
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl text-color4 mb-3 group-hover:text-color5 transition-colors duration-300 pr-12">
          {service?.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm line-clamp-3">
          {service?.text}
        </p>

        {/* Full Width Premium Button */}
        <div className="w-full mt-auto pt-2">
          <div className="group/btn relative w-full inline-flex items-center justify-between gap-3 text-sm  font-bold tracking-[0.12em] text-white transition-all bg-gradient-to-r from-color4 to-color5 duration-300  rounded-xl px-5 py-2 overflow-hidden">
            {/* Hover Background */}
            <span className="absolute inset-0 bg-zinc-900 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
            
            <span className="relative z-10">Learn More</span>
            
            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full  transition-all duration-300 group-hover/btn:translate-x-1 bg-white text-color4">
              <FiArrowRight className="text-sm group-hover/btn:translate-x-0.5 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
</div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

        {/* ── Nav arrows ── */}
              <button
                      className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[62%] -translate-y-1/2
                        w-12 h-12 rounded-full bg-white/70 hover:bg-color4
                        flex items-center justify-center text-black hover:text-white shadow-sm border 
                        transition-all duration-300 hover:scale-110`}
                    >
                      <FaArrowRightLong className="text-sm" />
                    </button>
                    <button
                      className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[62%] -translate-y-1/2
                        w-12 h-12 rounded-full bg-white/70 hover:bg-color4
                        flex items-center justify-center text-black hover:text-white shadow-sm border
                        transition-all duration-300 hover:scale-110`}
                    >
                      <FaArrowLeftLong className="text-sm" />
                    </button>
    </section>
  );
}