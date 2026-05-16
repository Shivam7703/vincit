"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {  sliderText } from "@/utils/motion";
import { sliderContent } from "@/data/homeData";


export default function HomeBanner() {
  const uniqueId = "banner123";
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay,  EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section  className="w-full mx-auto bg-color1 relative">
      <Swiper {...swiperOptions} className="">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden">
            <HomeBannerCard
              img={item?.img}
              title={item?.title}
              welcome={item?.welcome}
              btntext={item?.btntext}
              para={item?.para}
              link={item?.href}
              key={currentSlide} // Re-trigger animation when slide changes
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function HomeBannerCard({
  img, 
  title,
  para,
  welcome,
  btntext, link
}: any) {
  return (
    <div className="relative w-full overflow-hidden font1 text-white md:h-[98vh] min-h-[520px]">
      {/* Full-size image */}
      <Image
        src={img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full  object-cover object-center"
        alt="banner image"
        layout="fill"
      />
 

    <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-black/30 to-black/70">
      <motion.div
        variants={sliderText}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center text-center gap-4 px-5 sm:px-10 md:px-20 py-10 w-full max-w-7xl"
      >
        {/* Eyebrow */}
        <p className="text-sm sm:text-base  font-normal tracking-[0.28em] uppercase text-white/90 font-['Barlow_Condensed',sans-serif]">
          {welcome}
        </p>

        {/* Main headline */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.93] tracking-tight text-white font-['Barlow_Condensed',sans-serif]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-base md:text-lg text-white/90 font-normal max-w-4xl leading-relaxed mt-1 mb-2">
          {para}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          {/* Primary */}
          <Link
            href={link}
            className="inline-flex items-center gap-3 bg-[#F5A623] hover:bg-[#e09510] text-white font-bold uppercase tracking-[0.14em] text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-all duration-200 hover:-translate-y-px font-['Barlow_Condensed',sans-serif]"
          >
            {btntext}
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/25">
              <PlayArrow className="text-white" size={10} />
            </span>
          </Link>

          {/* Secondary */}
          <a
            href="tel:087654321"
            className="inline-flex items-center gap-3 bg-white/90 hover:bg-white text-black font-bold uppercase tracking-[0.14em] text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-all duration-200 hover:-translate-y-px font-['Barlow_Condensed',sans-serif]"
          >
            Get Details
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/10">
              <PlayArrow className="text-black" size={10} />
            </span>
          </a>
        </div>
      </motion.div>
    </div>
    </div>
  );
}

// Tiny inline arrow icon — replace with your icon lib if preferred
function PlayArrow({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="currentColor" className={className}>
      <polygon points="2,1 9,5 2,9" />
    </svg>
  );
}