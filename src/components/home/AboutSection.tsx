"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { about, about2, banner, banner2, banner3 } from "@/assets";
import { motion, AnimatePresence } from "framer-motion";
import Buttonmain from "../global/button";

function AboutSection() {
  const [value, setValue] = useState(0); // default: Integrity (index 0)

  const data = {
    img1: about,
    img2: about2,
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
    <section id="about" className="lg:px-28 md:px-20 sm:px-16 px-6 py-20 bg-gradient-to-br from-white via-gray-50 to-white mx-auto relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="flex flex-wrap justify-between max-w-7xl mx-auto gap-y-10 items-stretch relative z-10">

        {/* ── Left: Overlapping Images with Premium Effects ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-[47%] w-full h-80 md:h-[550px] relative group"
        >
          {/* Back image — tilted with hover effect */}
          <div
            className="absolute group-hover:-rotate-12 top-0 left-0  transition-all duration-500 w-[56%] rounded-2xl overflow-hidden h-[80%] shadow-xl"
          >
            <Image fill src={data.img1} alt="Students" className="object-cover hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Front image — larger, overlapping with hover effect */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 right-0 w-[62%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-[2] h-[90%]"
          >
            <Image fill src={data.img2} alt="Students campus" className="object-cover hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Premium Starburst badge with pulse animation */}
          <motion.div
            initial={{ scale: 1.2, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="absolute z-10 bottom-6 left-16"
          >
            <div className="relative md:w-44 md:h-44 h-28 w-28 flex items-center justify-center group/badge">
              {/* Animated Starburst SVG background */}
              <motion.svg
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.9 }}
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 4 L56 18 L71 12 L68 27 L83 28 L75 40 L88 48 L76 56 L82 70 L67 70 L63 85 L50 78 L37 85 L33 70 L18 70 L24 56 L12 48 L25 40 L17 28 L32 27 L29 12 L44 18 Z"
                  fill="url(#gradient)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#F5A623' }} />
                    <stop offset="100%" style={{ stopColor: '#e09510' }} />
                  </linearGradient>
                </defs>
              </motion.svg>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 text-center"
              >
                <p className="text-white font-black text-2xl md:text-3xl leading-none font-['Barlow_Condensed']">
                  {data.years}+
                </p>
                <p className="text-white text-[9px] md:text-[10px] font-semibold leading-tight">
                  Years Of<br />Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Content with Animations ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-[48%] w-full space-y-3"
        >
          {/* Label with decorative line */}
          <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-color2">
            {" "}{data.label}
          </h4>

          {/* Title with gradient */}
          <h2 className="text-zinc-900 font-black uppercase text-2xl md:text-4xl leading-tight ">
            {data.title}
          </h2>

          {/* Para with better readability */}
          <p className="text-gray-700 sm:text-lg leading-relaxed font-light">
            {data.para}
          </p>

          {/* Premium Tabs with hover effects */}
          <div className="flex border-b-2 border-gray-200 gap-2">
            {data.vision.map((item, index) => (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`relative px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden group
                  ${value === index
                    ? "text-color4"
                    : "text-gray-500 hover:text-zinc-800"
                  }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.heading}
                </span>
                {value === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-color4"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active tab content with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex gap-6 items-start bg-color4/5 p-5 rounded-2xl backdrop-blur-sm"
            >
              {/* Thumbnail with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-shrink-0 w-40 h-32 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={data.vision[value].img}
                  alt={data.vision[value].heading}
                  width={144}
                  height={112}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </motion.div>

              {/* Checkpoints with staggered animation */}
              <ul className="space-y-2 flex-1">
                {data.vision[value].pointers.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 font-medium text-base group/point"
                  >
                    <span
                      className="text-color4 font-bold text-lg"
                    >
                      ✓
                    </span>
                    <span className="group-hover/point:text-gray-900 transition-colors duration-200">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <Buttonmain href="/about" text1="Discover More" />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;