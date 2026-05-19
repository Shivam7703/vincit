"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { about, about2, banner, banner2, banner3 } from "@/assets";

function AboutSection() {
  const [value, setValue] = useState(1); // default: Objective's tab

  const data = {
    img1: about,   // back image (tilted)
    img2: about2,  // front image (larger, overlapping)
    label: "About Us",
    title: "Smarter Path To Becoming A Doctor",
    para: "At Vincit Edupath, we believe every medical aspirant deserves access to world-class education without limitations created by high competition or unaffordable tuition structures.",
    years: 25,
   vision: [
  {
    heading: "Integrity",
    img: banner,
    pointers: [
      "Ethical admission practices",
      "Clear documentation support",
      "Genuine student guidance",
      "Commitment to transparency",
    ],
  },
  {
    heading: "Objective's",
    img: banner2,
    pointers: [
      "Expanding global career pathways",
      "Simplifying the MBBS abroad process",
      "Helping students make informed decisions",
      "Creating future-ready medical professionals",
    ],
  },
  {
    heading: "Excellence",
    img: banner3,
    pointers: [
      "Personalized counseling experience",
      "Strong international university connections",
      "Dedicated visa assistance",
      "High-quality student mentorship",
    ],
  },
],
  };

  return (
    <section id="about" className="lg:px-28 md:px-20 sm:px-16 px-6 py-12 bg-white mx-auto">
      <div className="flex  flex-wrap justify-between max-w-7xl mx-auto gap-y-7 items-stretch">

        {/* ── Left: Overlapping Images + Badge ── */}
        <div className="md:w-[47%] w-full h-72 md:h-[550px]  relative" >

          {/* Back image — tilted */}
          <div
            className="absolute top-0 left-0 -rotate-6 w-[56%] rounded-2xl overflow-hidden h-[80%] shadow-lg"
            
          >
            <Image fill src={data.img1} alt="Students" className="object-cover" />
          </div>

          {/* Front image — larger, overlapping */}
          <div
            className="absolute bottom-0 right-0 w-[62%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-[2] h-[90%]"
            
          >
            <Image fill src={data.img2} alt="Students campus"  className="object-cover" />
          </div>

          {/* Starburst badge */}
          <div className="absolute z-10 bottom-6 left-16">
            <div className="relative md:w-44 md:h-44 h-28 w-28 flex items-center justify-center">
              {/* Starburst SVG background */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 4 L56 18 L71 12 L68 27 L83 28 L75 40 L88 48 L76 56 L82 70 L67 70 L63 85 L50 78 L37 85 L33 70 L18 70 L24 56 L12 48 L25 40 L17 28 L32 27 L29 12 L44 18 Z"
                  fill="#22c55e"
                />
              </svg>
              <div className="relative z-10 text-center">
                <p className="text-white font-black text-2xl leading-none font-['Barlow_Condensed']">
                  {data.years}+
                </p>
                <p className="text-white text-[9px] font-semibold leading-tight">
                  Years Of<br />Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="md:w-[48%] w-full space-y-5">

          {/* Label */}
          <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-color3">
            {data.label}
          </h4>

          {/* Title */}
          <h2 className="text-black font-black text-2xl md:text-5xl uppercase leading-[1.05] font-['Barlow_Condensed',sans-serif] ">
            {data.title}
          </h2>

          {/* Para */}
          <p className="text-gray-700 sm:text-lg leading-relaxed">
            {data.para}
          </p>

          {/* Tabs — underline style, NOT pills */}
          <div className="flex border-b-2 border-gray-200">
            {data.vision.map((item, index) => (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-200 border-b-[3px] -mb-[2px]
                  ${value === index
                    ? "border-color1 text-black"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
              >
                {item.heading}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="flex gap-6 items-start">

            {/* Thumbnail */}
            <div className="flex-shrink-0 w-40 h-32 rounded-xl overflow-hidden shadow-md">
              <Image
                src={data.vision[value].img}
                alt={data.vision[value].heading}
                width={144}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Checkpoints */}
            <ul className="space-y-2.5 flex-1">
              {data.vision[value].pointers.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium text-base">
                  <span className="text-color1 font-bold text-base">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Link
            href="#about"
            className="inline-flex items-center gap-2 bg-color1 hover:bg-[#00a8e0] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-200"
          >
            About Us <span>›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;