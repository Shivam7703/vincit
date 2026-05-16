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
      text: "Globally trusted universities with affordable tuition and strong clinical exposure.",
      link: "/canada-pnp",
    },
    {
      id: 2,
      img: geor,
      flag: georflg,
      heading: "Georgia",
      text: "European-standard education with modern campuses and English-medium programs.",
      link: "/canada-pnp",
    },
    {
      id: 3,
      img: kazak,
      flag: kazakflg,
      heading: "Kazakhstan",
      text: "High-quality medical education with budget-friendly fee structures.",
      link: "/canada-pnp",
    },
    {
      id: 4,
      img: uzbe,
      flag: uzbeflg,
      heading: "Uzbekistan",
      text: "Rapidly growing MBBS destination with globally recognized universities.",
      link: "/canada-pnp",
    },
    {
      id: 5,
      img: phil,
      flag: philflg,
      heading: "Philippines",
      text: "US-based medical curriculum with a strong English-speaking environment.",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: kyrg,
      flag: kyrgflg,
      heading: "Kyrgyzstan",
      text: "Affordable medical programs ideal for students seeking quality education within budget.",
      link: "/canada-pnp",
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
            <h4 className="text-sm font-bold tracking-[0.22em] text-color3 mb-5">
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