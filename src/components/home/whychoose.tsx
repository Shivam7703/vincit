"use client";
import React from "react";
import Image from "next/image";
import { choose, choose2, choose3, cl1, cl2, cl3 } from "@/assets";
import { 
  BsPeopleFill, 
  BsGlobe2,
  BsHeadset,
  BsGraphUp 
} from "react-icons/bs";
import { 
  MdOutlineFactCheck, 
  MdOutlineSchool,
  MdOutlineVerified 
} from "react-icons/md";
import { 
  LiaPassportSolid,
  LiaUniversitySolid 
} from "react-icons/lia";

import { motion } from "framer-motion";

const features = [
  {
    icon: <BsPeopleFill />,
    title: "Guidance You Can Trust",
    text: "Students and parents rely on our transparent approach, genuine counseling, and clear admission process designed to build confidence throughout the journey abroad.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MdOutlineFactCheck />,
    title: "Focused On Student Success",
    text: "Every step is planned to help students choose better opportunities, quality education, and the right medical career pathway for long-term success.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <LiaPassportSolid />,
    title: "Support Beyond Admissions",
    text: "Our assistance continues beyond applications with dedicated support for documentation, visa procedures, travel preparation, and student onboarding guidance.",
    color: "from-purple-500 to-pink-500",
  },
];

const stats = [
  { value: "50+", label: "Partner Universities", icon: <MdOutlineSchool /> },
  { value: "20+", label: "Countries", icon: <BsGlobe2 /> },
  { value: "100%", label: "Visa Success Rate", icon: <MdOutlineVerified /> },
  { value: "24/7", label: "Student Support", icon: <BsHeadset /> },
];

export default function WhyChoose() {
  return (
    <section className=" md:px-20 p-6 md:p-16 lg:px-24 bg-zinc-100 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
    

      <div className="flex flex-wrap justify-between gap-y-8 max-w-7xl mx-auto items-stretch relative z-10">

        {/* ── Left: text + features ── */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex md:w-[48%] md:pr-9 w-full flex-col gap-6"
        >
          {/* Header with decorative line */}
          <div className="relative">
            <h4 className="text-color2 mb-4 text-xs uppercase tracking-[0.25em] font-semibold">
                Why Choose Us
            </h4>
            
            <h2 className="font-black text-gray-900 text-2xl md:text-3xl lg:text-4xl leading-tight">
              Your Trusted Partner in Medical
                 Education
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Vincit Edupath helps students achieve their medical career goals through trusted guidance, 
            globally recognized universities, transparent processes, and complete admission support. 
            We focus on simplifying the MBBS abroad journey for students and parents with professional 
            counseling, personalized assistance, and reliable support at every stage.
          </p>

          {/* Features with enhanced hover effects */}
          <div className="flex flex-col gap-5 mt-3">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex gap-4 items-start cursor-pointer"
              >
                
                {/* Icon circle with gradient and animation */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {f.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-color4 transition-colors duration-300 flex items-center gap-2">
                    {f.title}
                   
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Center: tall image + premium badge ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden min-h-[300px] md:w-[24%] max-h-[560px] w-[48%] md:min-h-0 group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src={choose3}
            alt="Student"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Premium trust badge */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-color4 to-color5 px-6 py-5"
          >
              <p className="font-black mb-3 text-white texl-sm sm:text-2xl leading-tight">
                10K+ Trusted Students
              </p>
            
            {/* Avatar circles with animation */}
            <div className="flex items-center gap-1">
              {[cl1, cl2, cl3].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0 relative cursor-pointer"
                  style={{ zIndex: 3 - i }}
                >
                  <Image src={src} alt="avatar" fill className="object-cover" />
                </motion.div>
              ))}
              <div className="ml-2 text-white/80 text-sm font-semibold flex items-center gap-1">
                <BsGraphUp /> +5000 more
              </div>
            </div>
          </div>
        </motion.div>
        {/* ── Right: 2 stacked images with hover effects ── */}
        <div className="flex flex-col gap-4 md:w-[24%] w-[48%]">
          {[
            { img: choose, title: "Our Campus Life", icon: <LiaUniversitySolid /> },
            { img: choose2, title: "Student Community", icon: <BsPeopleFill /> }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex-1 rounded-2xl overflow-hidden min-h-[200px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              
              {/* Overlay with text on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}