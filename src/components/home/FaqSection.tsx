import React from "react";
import Faq from "../global/faq";

const data = {
  label: "HIGH VISA SUCCESS RATE",
  title: "Reliable Support For Your MBBS Abroad Plans",
  para: "Get clear answers about admissions, eligibility, universities, fees, visa process, and student support to make your MBBS abroad journey easier and more understandable.",
  points: [
    "Strong Visa Approval Support",
    "Guidance From Experienced Counselors",
    "Recognized Medical Universities",
    "Simple & Transparent Admission Process",
    "Complete Student Assistance At Every Step",
  ],
  faqs: [
    {
      id: 1,
      que: "How do students choose the right country for MBBS abroad?",
      ans: "Students usually compare tuition fees, university recognition, clinical exposure, living costs, safety, and future career opportunities before selecting the most suitable country for their medical education abroad.",
    },
    {
      id: 2,
      que: "What kind of support does Vincit Edupath provide to students?",
      ans: "Vincit Edupath helps students with career counseling, university shortlisting, admission applications, documentation, visa assistance, travel preparation, and continuous support throughout their MBBS abroad journey.",
    },
    {
      id: 3,
      que: "Are hostel and food facilities available for international students?",
      ans: "Most medical universities provide hostel accommodation, security, internet facilities, and food options for international students. Indian food and grocery stores are also available in many popular student destinations.",
    },
    {
      id: 4,
      que: "What makes MBBS abroad popular among medical aspirants today?",
      ans: "Students prefer MBBS abroad because of affordable education, global exposure, modern universities, practical learning opportunities, and easier access to recognized medical programs compared to highly competitive admissions in India.",
    },
  ],
};

export default function FaqSection() {

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
                <span className="text-color4 font-bold text-lg">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Accordion ── */}
        <div className="">
          <Faq data={data.faqs} />
        </div>
      </div>
    </section>
  );
}