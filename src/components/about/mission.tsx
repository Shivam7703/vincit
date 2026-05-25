"use client";

import React, { useState } from "react";
import { FiTarget } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";
import { MdOutlineDiamond } from "react-icons/md";

const cards = [
  {
    num: "01",
    icon: <FiTarget />,
    label: "Our Mission",
    desc: "To help students achieve their dream of studying MBBS abroad through honest guidance, trusted university connections, and complete support throughout their academic journey.",
    id: "mission",
  },
  {
    num: "02",
    icon: <HiOutlineEye />,
    label: "Our Vision",
    desc: "To become a trusted name for MBBS abroad guidance by helping students build successful medical careers through quality counseling and transparent admission support.",
    id: "vision",
  },
  {
    num: "03",
    icon: <MdOutlineDiamond />,
    label: "Our Values",
    desc: "We believe in transparency, student-focused guidance, professional ethics, and continuous support to help students and parents make confident decisions for their future.",
    id: "values",
  },
];

export default function MVVCards() {
  const [active, setActive] = useState("vision");

  return (
    <section className="p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((card) => {
          const isActive = active === card.id;
          return (
            <div
              key={card.id}
              onClick={() => setActive(card.id)}
              className={`
                group cursor-pointer rounded-2xl p-8 flex overflow-hidden shadow-lg shadow-zinc-700/30 flex-col gap-1 border
                transition-all duration-300 relative hover:-translate-y-1
                ${isActive
                  ? "bg-color4"
                  : "bg-white border-zinc-400"
                }
              `}
            >
                <div className={`
                absolute -top-9 -right-9 w-24 h-24 sm:h-40 sm:w-40 group-hover:scale-125 duration-300 rounded-full shadow-lg
                ${isActive
                  ? "bg-white/30"
                  : "bg-color4/30"
                }
              `} />
              {/* Icon + Number Row */}
              <div className="flex items-start justify-between mb-2">
                <div
                  className={`sm:text-8xl text-3xl transition-colors duration-300
                    ${isActive
                      ? "text-white"
                      : "text-color4 group-hover:scale-110 transition-transform"
                    }`}
                >
                  {card.icon}
                </div>
               
              </div>

              {/* Label */}
              <p
                className={`text-base sm:text-xl font-bold transition-colors duration-300
                  ${isActive ? "text-white" : "text-color2"}`}
              >
                {card.label}
              </p>

              {/* Divider */}
              <div
                className={`h-[3px] w-9 rounded-full mt-2 mb-1 transition-all duration-300
                  ${isActive ? "bg-white/40 w-14" : "bg-color4 group-hover:w-14"}`}
              />

              {/* Description */}
              <p
                className={` leading-relaxed transition-colors duration-300
                  ${isActive ? "text-white" : "text-zinc-800 group-hover:text-zinc-600"}`}
              >
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}