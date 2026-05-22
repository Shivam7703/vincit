"use client";
import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import Faq from "../global/faq";

const data = {
  label: "High Visa Success Rate",
  title: "Got Questions About MBBS Abroad?",
  para: "Find answers to common questions about MBBS abroad admissions, universities, eligibility, visa guidance, tuition fees, and student support services.",
  points: [
    "High Visa Success Rate",
    "Trusted Student Guidance",
    "Globally Recognized Universities",
    "Transparent Admission Process",
    "FAQs",
  ],
  faqs: [
    {
      id: 1,
      que: "Is MBBS abroad a good option for Indian students?",
      ans: "Yes, MBBS abroad offers affordable education, global exposure, modern infrastructure, and internationally recognized medical degrees for aspiring doctors seeking quality opportunities.",
    },
    {
      id: 2,
      que: "How does Vincit Edupath help students during admissions?",
      ans: "We assist students with counseling, university selection, documentation, admission processing, visa support, and complete guidance until they successfully join the university.",
    },
    {
      id: 3,
      que: "Can students study MBBS abroad in an English medium?",
      ans: "Yes, many international medical universities offer complete English-medium MBBS programs specifically designed for international students from different countries, including India.",
    },
    {
      id: 4,
      que: "Why do students prefer studying MBBS abroad today?",
      ans: "Students prefer MBBS abroad for affordable tuition fees, global medical exposure, advanced learning environments, and better access to international career opportunities.",
    },
  ],
};

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 px-6 md:px-16 lg:px-24 font1">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-7 max-w-7xl mx-auto items-start">

        {/* ── Left ── */}
        <div className="flex flex-col gap-4">
          <h4 className="text-color2 text-xs font-bold tracking-[0.22em]">{data.label}</h4>

          <h2 className="font-black uppercase text-zinc-900 text-2xl md:text-4xl leading-tight
                         ">
            {data.title}
          </h2>

          <p className="text-gray-800 leading-relaxed">{data.para}
          </p>

          <ul className="flex flex-col gap-2 mt-1">
            {data.points.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-800">
                <span className="text-color1 font-bold text-lg">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Accordion ── */}
        <div className="">
        <Faq data={data.faqs}/>
        </div>
      </div>
    </section>
  );
}