import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { cl1, cl2, cl3, cl4 } from "@/assets";

const team = [
  { name: "Shekhar",    role: "Founder & CEO", img: cl1  },
  { name: "Tushar",  role: "Administrator", img: cl2 },
  { name: "Zaid", role: "Admission Counsellor", img: cl3 },
  { name: "Pranav", role: "Performance Marketer", img: cl4 },
];

const socials = [
  { icon: <FaFacebookF />,  href: "#" },
  { icon: <FaInstagram />,  href: "#" },
  { icon: <FaYoutube />,    href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f3f4f6] py-14 px-6 md:px-16 font1 text-center">

      {/* Header */}
      <h4 className="text-color3  text-sm tracking-[0.22em]  font-bold mb-2">Professional People</h4>
      <h2 className="font-black uppercase text-black text-2xl md:text-4xl sm:mb-14 mb-6
                    max-w-2xl mx-auto">
        Meet Our Expert Team
      </h2>

      {/* Cards grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-sm
                       hover:-translate-y-1 transition-transform duration-300 group"
          >
            {/* Photo */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover object-top
                           group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="py-4 px-3 text-center">
              <p className="font-bold text-gray-900 mb-0.5">{member.name}</p>
              <p className="text-sm text-gray-400 mb-3">{member.role}</p>

              {/* Social icons */}
              <div className="flex justify-center gap-4">
                {socials.map((s, j) => (
                  <a
                    key={j}
                    href={s.href}
                    className="w-7 h-7 border border-gray-200 rounded
                               flex items-center justify-center text-gray-500 text-base
                               hover:bg-color3 hover:border-color3 hover:text-white
                               transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}