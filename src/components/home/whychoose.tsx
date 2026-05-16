import React from "react";
import Image from "next/image";
import { banner, banner2, banner3, choose, choose2, choose3, cl1, cl2, cl3 } from "@/assets";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineFactCheck } from "react-icons/md";
import { LiaPassportSolid } from "react-icons/lia";

const features = [
  {
    icon: <BsPeopleFill />,
    title: "Guidance You Can Trust",
    text: "Students and parents rely on our transparent approach, genuine counseling, and clear admission process designed to build confidence throughout the journey abroad.",
  },
  {
    icon: <MdOutlineFactCheck />,
    title: "Focused On Student Success",
    text: "Every step is planned to help students choose better opportunities, quality education, and the right medical career pathway for long-term success.",
  },
  {
    icon: <LiaPassportSolid />,
    title: "Support Beyond Admissions",
    text: "Our assistance continues beyond applications with dedicated support for documentation, visa procedures, travel preparation, and student onboarding guidance.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-14 px-6 md:px-16 lg:px-24 static-bg">
      <div className="flex flex-wrap justify-between gap-y-6 max-w-7xl mx-auto items-stretch">

        {/* ── Left: text + features ── */}
        <div className="flex md:w-[48%] md:pr-9 w-full  flex-col gap-5 pr-2">
         
          <h2 className="font-black uppercase text-zinc-900 text-2xl md:text-4xl">
          Why Choose Us

          </h2>

          <p className="text-zinc-900 leading-relaxed">
           Vincit Edupath helps students achieve their medical career goals through trusted guidance, globally recognized universities, transparent processes, and complete admission support. We focus on simplifying the MBBS abroad journey for students and parents with professional counseling, personalized assistance, and reliable support at every stage.

          </p>

          <div className="flex flex-col gap-5 mt-2">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start group">
                {/* Icon circle */}
                <div className="flex-shrink-0 w-12 h-12 
                                bg-color3/10 flex items-center justify-center
                                text-color3 text-xl sm:text-2xl 
                                group-hover:bg-color3 group-hover:text-white
                                transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">{f.title}</h3>
                  <p className="text-gray-900 leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Center: tall image + green badge ── */}
        <div className="relative rounded-xl overflow-hidden min-h-[420px] md:w-[24%] w-[48%] md:min-h-0">
          <Image
            src={choose3}
            alt="Student"
            fill
            className="object-cover"
            priority
          />
          {/* Green trust badge */}
          <div className="absolute bottom-0 left-0 right-0 bg-color3 px-5 py-4">
            <p className="font-black text-white text-xl leading-tight
                          font-['Barlow_Condensed',sans-serif] mb-2">
              10M+ Trusted<br />Customers
            </p>
            {/* Avatar circles */}
            <div className="flex">
              {[cl1, cl2, cl3].map((src, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0 relative"
                >
                  <Image src={src} alt="avatar" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: 2 stacked images ── */}
        <div className="flex flex-col gap-3 md:w-[24%] w-[48%]">
          <div className="flex-1 relative rounded-xl overflow-hidden min-h-[190px]">
            <Image src={choose} alt="Students" fill className="object-cover" />
          </div>
          <div className="flex-1 relative rounded-xl overflow-hidden min-h-[190px]">
            <Image src={choose2} alt="Students campus" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}