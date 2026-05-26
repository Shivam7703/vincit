"use client";
import React from "react";
import Image from "next/image";
import Countryslider from "./countrySlider";
import { banner2, georflg, geor, kazakflg, kazak, kyrgflg, kyrg, philflg, phil, rusflg, rus, uzbeflg, uzbe, } from "@/assets";

export const data = {
  bgImg: banner2,
  title1: "Countries We Offer",
  title2: "Top Countries For MBBS Abroad",
  cards: [
    {
      id: 1,
      img: rus,
      flag: rusflg,
      heading: "Russia",
      link: "MBBS in Russia",
    },
    {
      id: 2,
      img: geor,
      flag: georflg,
      heading: "Georgia",
      text: "European-standard education with modern campuses and English-medium programs.",
      link: "MBBS in Georgia",
    },
    {
      id: 3,
      img: kazak,
      flag: kazakflg,
      heading: "Kazakhstan",
      text: "High-quality medical education with budget-friendly fee structures.",
      link: "MBBS in Kazakhstan",
    },
    {
      id: 4,
      img: uzbe,
      flag: uzbeflg,
      heading: "Uzbekistan",
      text: "Rapidly growing MBBS destination with globally recognized universities.",
      link: "MBBS in Uzbekistan",
    },
    
    {
      id: 6,
      img: kyrg,
      flag: kyrgflg,
      heading: "Kyrgyzstan",
      text: "Affordable medical programs ideal for students seeking quality education within budget.",
      link: "MBBS in Kyrgyzstan",
    },
  ],
};

export default function OfferCountry() {
  return (
    <section id="abroad" className="relative w-full overflow-hidden">

      {/* ══════════════════════════════
          TOP — Dark bg with city image
      ══════════════════════════════ */}
      <div className="relative bg-zinc-900 w-full">

        {/* Background image — darkened */}
        <Image
          src={data?.bgImg}
          alt="background"
          fill
          className="object-cover object-center opacity-10"
        />

        {/* Header text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-9 pb-28 md:pt-12 md:pb-32">
          {data?.title1 && (
            <h4 className="text-xs font-bold tracking-[0.22em] text-white/70 mb-5">
              {data.title1}
            </h4>
          )}
          <h2 className="text-white font-black text-2xl md:text-4xl uppercase  mb-6 max-w-3xl mx-auto">
            {data?.title2}
          </h2>
        </div>
      </div>

  
      <div
        className="  sm:p-12 md:p-16 lg:px-20 sticky -mt-28 md:-mt-44"
      >
      
      <Countryslider data={data} uniqueId = {"canadaSlider"}/>
      </div>

    </section>
  );
}