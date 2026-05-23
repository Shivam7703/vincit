"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 } from "@/assets";

const partners = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12
];

export default function Partners() {
  return (
    <section className="relative p-6 overflow-hidden">
      {/* Heading */}
      <div className=" relative text-center mb-12 sm:mb-16">
        <h2 className="uppercase font-black text-zinc-900 text-3xl md:text-4xl tracking-tight">
          50+{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-color4 to-color5">
            Tie Ups
          </span>{" "}
          Across The World
        </h2>
        
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Partnering with world-class institutions to provide the best education opportunities
        </p>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-6">
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={true}
          gradientColor="rgba(255,255,255,0)"
          gradientWidth={100}
          direction="left"
        >
          {partners.map((partner, index) => (
            <div
              key={`marquee1-${index}`}
              className="flex items-center justify-center mx-4 md:mx-8 py-3 bg-white  transition-all duration-300 cursor-pointer group"
            >
              <div className="relative w-32 h-16 sm:w-40 py-3 sm:h-20">
                <Image
                  src={partner}
                  alt={`partner-${index}`}
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 - Right to Left (Duplicate for continuous effect) */}

      <div className="relative">
        <Marquee
          speed={45}
          pauseOnHover={true}
          gradient={true}
          gradientColor="rgba(255,255,255,0)"
          gradientWidth={100}
          direction="right"
        >
          {[...partners].reverse().map((partner, index) => (
            <div
              key={`marquee2-${index}`}
              className="flex items-center justify-center mx-4 md:mx-8 py-3 bg-white  transition-all duration-300 cursor-pointer group"
            >
              <div className="relative w-32 h-16 sm:w-40 py-3 sm:h-20">
                <Image
                  src={partner}
                  alt={`partner-${index}`}
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}