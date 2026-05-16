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
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function ServiceSlider() {
  const uniqueId = "country123";
  return (
    <section id="services" className="relative bg-white font1 p-6 md:p-14 ">

      {/* ── Header Row ── */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:items-start gap-4  md:gap-12 mb-10">
        
        {/* Left: label + title */}
        <div className="md:w-[52%]">
          <h4 className="text-color3  text-sm font-bold tracking-[0.22em] mb-3">
            {data.title1}
          </h4>
          <h2 className="text-black font-black text-2xl md:text-4xl uppercase leading-tight
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
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {data?.service?.map((service, index) => (
            <SwiperSlide key={index} >
              <Link
                href={`/services/${service?.title
                  ?.trim().toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "")}`}
                className="group block h-full"
              >
                <div className="bg-white rounded-xl m-2 shadow-md hover:-translate-y-1 transition-all duration-300 overflow-visible">

                  {/* Image + cyan badge */}
                  <div className=" h-44 sm:h-56 rounded-t-xl relative overflow-hidden">
                    <Image
                      src={service?.img}
                      alt={service?.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                   
                  </div>

                  {/* Body */}
                  <div className="px-4 pt-7 pb-4 relative">
                     {/* Cyan graduation badge — bottom-right, overlapping */}
                    <div className="absolute -top-4 sm:-top-7 right-4 w-9 h-9 sm:h-14 sm:w-14 bg-[#00BFFF]
                                    rounded-full flex items-center justify-center
                                    border-[3px] border-white z-10 text-white text-lg sm:text-2xl">
                      <MdSchool />
                    </div>
                    <h3 className="font-bold  text-lg text-gray-900 mb-4 group-hover:text-[#00BFFF] transition-colors">
                      {service?.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-5">
                      {service?.text}
                    </p>

                    {/* Read More pill button */}
                    <div className="flex items-center justify-between bg-zinc-100 hover:bg-zinc-300
                                    rounded-lg sm:p-3 px-6 p-2 shadow-sm transition-colors duration-200">
                      <span className="text-base font-medium text-gray-900">Read More</span>
                      <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <IoIosArrowRoundForward className="text-gray-700 text-lg" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

        {/* ── Nav arrows ── */}
              <button
                      className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[62%] -translate-y-1/2
                        w-12 h-12 rounded-full bg-white/70  hover:bg-color1
                        flex items-center justify-center text-black hover:text-white shadow-sm border 
                        transition-all duration-300 hover:scale-110`}
                    >
                      <FaArrowRightLong className="text-sm" />
                    </button>
                    <button
                      className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[62%] -translate-y-1/2
                        w-12 h-12 rounded-full bg-white/70 hover:bg-color1
                        flex items-center justify-center text-black hover:text-white shadow-sm border
                        transition-all duration-300 hover:scale-110`}
                    >
                      <FaArrowLeftLong className="text-sm" />
                    </button>
    </section>
  );
}