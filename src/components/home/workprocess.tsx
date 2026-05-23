"use client";

import React from "react";
import Image from "next/image";
import { BsPeopleFill } from "react-icons/bs";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { LiaFileAltSolid } from "react-icons/lia";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { banner, banner3 } from "@/assets";
import Buttonmain from "../global/button";

const data = [
  {
    icon: <BsPeopleFill />,
    step: "01",
    heading: "Career Counseling",
    text: "Get expert guidance to choose the right country, university, and medical career pathway based on your goals and budget.",
  },
  {
    icon: <FaUniversity />,
    step: "02",
    heading: "University Selection",
    text: "Select from globally recognized medical universities offering quality education and affordable tuition fees.",
  },
  {
    icon: <LiaFileAltSolid />,
    step: "03",
    heading: "Admission & Visa Support",
    text: "Complete admission, documentation, and visa procedures with professional support and guidance.",
  },
  {
    icon: <FaGraduationCap />,
    step: "04",
    heading: "Begin Your MBBS Journey",
    text: "Start your international medical education journey with complete student assistance and support.",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative overflow-hidden xl:px-20 p-6 md:p-16">

      <div className="absolute top-10 -left-10 bg-color4/10 rotate-45 h-[500px] w-56" />
      {/* <div className="absolute top-10 -left-10 bg-color4/10 rotate-45 h-[500px] w-56"/> */}
      <div className="absolute -bottom-20 -right-10 bg-color4 -rotate-45 h-[500px] w-56" />

      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="flex flex-wrap justify-between gap-y-6 items-start">

          {/* Left Content */}
          <div className="lg:w-[37%] w-full relative z-10 space-y-6">

            {/* Subtitle */}
            <div>
              <p className="uppercase tracking-[0.25em] text-xs font-semibold text-color5 mb-3">
                Work Process
              </p>

              <h2 className="text-3xl md:text-4xl font-black leading-tight text-zinc-800">
                Your MBBS Journey Made Simple
              </h2>
            </div>

            {/* Description */}
            <p className="text-zinc-600 leading-relaxed max-w-md">
              From counseling to university admission and visa assistance,
              we guide students at every step to build a successful medical career abroad.
            </p>

            <Buttonmain href="/about" text1="Get Started" />


            {/* Image Card */}
            <div className="relative overflow-hidden  shadow-xl h-[280px] rounded-2xl  max-w-md">
              <Image
                src={banner3}
                alt="students"
                fill
                className="object-cover rounded-2xl  w-full sm:mt-7  h-full"
              />
            </div>
          </div>

          {/* Process Cards */}
          <div className="lg:w-[60%] w-full z-10 grid grid-cols-2 gap-5">
            {data.map((card, index) => (
              <div
                key={index}
                className={`sm:rounded-3xl rounded-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-black/35 shadow-xl ${index === 1 || index === 2
                    ? "bg-gradient-to-r from-color4 to-color5 text-white"
                    : "bg-white/60 backdrop-blur-xl text-color5"
                  }`}
              >

                {/* Step */}
                <div className="flex items-center justify-between sm:mb-5 mb-3">

                  {/* Icon */}
                  <div
                    className={`flex sm:h-16 sm:w-16 h-12 w-12 items-center justify-center rounded-2xl text-xl sm:text-3xl ${index === 1 || index === 2
                        ? "bg-white/15 text-white"
                        : "bg-color2/15 text-color2"
                      }`}
                  >
                    {card.icon}
                  </div>

                  {/* Step Number */}
                  <span
                    className={`text-base font-bold ${index === 1 || index === 2
                        ? "text-white/40"
                        : "text-zinc-500"
                      }`}
                  >
                    STEP {card.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="sm:text-2xl text-lg font-bold mb-3 sm:mb-4 leading-snug">
                  {card.heading}
                </h3>

                {/* Text */}
                <p
                  className={`leading-relaxed text-xs  sm:text-base ${index === 1 || index === 2
                      ? "text-white/70"
                      : "text-zinc-600"
                    }`}
                >
                  {card.text}
                </p>

                {/* Learn More */}
                <button
                  className={`group sm:mt-6 mt-4  inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] ${index === 1 || index === 2
                      ? "text-white"
                      : "text-color5"
                    }`}
                >
                  Learn More

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${index === 1 || index === 2
                        ? "bg-white/10"
                        : "bg-color5 text-white"
                      }`}
                  >
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}