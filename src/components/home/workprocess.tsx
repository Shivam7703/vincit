"use client";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { LiaFileAltSolid } from "react-icons/lia";

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
    text: "Select from globally recognized medical universities offering quality education, affordable tuition fees, and excellent learning opportunities for students.",
  },
  {
    icon: <LiaFileAltSolid />,
    step: "03",
    heading: "Admission & Visa Support",
    text: "Complete application, documentation, admission processing, and visa procedures with professional assistance for a smooth and stress-free experience.",
  },
  {
    icon: <FaGraduationCap />,
    step: "04",
    heading: "Begin Your MBBS Journey",
    text: "Fly to your university with confidence and start your international medical education journey with complete student support and guidance.",
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-white py-14 px-6 md:px-16 font1 text-center">

      {/* Header */}
      <h4 className="text-color3  text-sm font-bold  tracking-[0.22em] mb-2">Our Benefit</h4>
      <h2 className="font-black uppercase text-zinc-900 text-2xl md:text-4xl mb-12 ">
        Our Work Process
      </h2>

      {/* Steps grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {data.map((card, index) => (
          <div key={index} className="flex flex-col items-center gap-4 group">

            {/* Circle + step badge */}
            <div className="relative w-40 h-40 flex-shrink-0">
              {/* Outer light circle */}
              <div className="w-40 h-40 rounded-full bg-orange-50 shadow-lg shadow-black/30 flex items-center justify-center
                              text-color3 text-5xl transition-all duration-300
                              group-hover:bg-color3 group-hover:text-white">
                {card.icon}
              </div>

              {/* Step number badge — bottom-left */}
              <div className="absolute bottom-2 left-1 w-10 h-10 rounded-full bg-color3
                              flex items-center justify-center text-white text-sm font-bold
                              group-hover:bg-white group-hover:text-color3
                              transition-all duration-300 shadow-md">
                {card.step}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-color3 transition-colors">
              {card.heading}
            </h3>

            {/* Para */}
            <p className="text-gray-700 leading-relaxed max-w-56">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}