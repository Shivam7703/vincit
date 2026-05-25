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
import { sliderText } from "@/utils/motion";
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
    modules: [Autoplay, EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section className="w-full mx-auto bg-color4 relative">
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
    <div className="relative w-full overflow-hidden font1 max-h-[700px] text-white md:h-[98vh] min-h-[520px]">
      {/* Full-size image */}
      <Image
        src={img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full  object-cover object-center"
        alt="banner image"
        layout="fill"
      />


      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-black/40 to-black/80">
        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 px-5 sm:px-10 md:px-20 py-10 w-full max-w-6xl"
        >
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm  font-normal tracking-[0.28em] uppercase text-white/90 font-">
            {welcome}
          </p>

          {/* Main headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase leading-[0.93] tracking-tight text-white">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base md:text-lg text-white/90 font-normal max-w-4xl leading-relaxed mt-1 mb-2">
            {para}
          </p>

          {/* CTAs - Premium Version */}

          <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            <Link
              href={link}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-color2 to-red-700 hover:to-orange-700 text-white font-medium tracking-wide text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(245,166,35,0.4)] hover:-translate-y-0.5"
            >
              {btntext}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center"
              >
                →
              </motion.span>
            </Link>

            <a
              href="tel:+918595078896"
              className="group inline-flex items-center gap-2 bg-transparent border-2 border-white/50 hover:border-white text-white font-medium tracking-wide text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-white/5"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Details
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