"use client";
import CountUp from "react-countup";
import { LiaAwardSolid } from "react-icons/lia";
import { PiHandCoins, PiChartLineUp, PiIdentificationCard } from "react-icons/pi";

const statsData = [
  {
    id: 1,
    icon: <LiaAwardSolid />,
    value: 20,
    suffix: " K+",
    label: "Successful Admits",
    prefix: "",
  },
  {
    id: 2,
    icon: <PiHandCoins />,
    value: 2,
    suffix: " M+",
    label: "Achieved Scholarships",
    prefix: "$",
  },
  {
    id: 3,
    icon: <PiChartLineUp />,
    value: 3500,
    suffix: " CR+",
    label: "Representing Over 800 INS.",
    prefix: "",
  },
  {
    id: 4,
    icon: <PiIdentificationCard />,
    value: 98,
    suffix: "%",
    label: "Visa Success Rate",
    prefix: "",
  },
];

export default function StatsBanner() {
  return (
    <section className="relative p-5 sm:p-10">
      <div className="bg-zinc-800 -z-10 absolute h-1/2 w-full bottom-0 left-0"/>
      <div className="bg-color3 rounded-2xl px-4 sm:px-6 py-7
                      grid grid-cols-2 lg:grid-cols-4 gap-y-8 max-w-7xl mx-auto">
        {statsData.map((stat, i) => (
          <div
            key={stat.id}
            className={`flex flex-col gap-3 sm:px-8 px-4
              ${i < statsData.length - 1 ? "lg:border-r border-white/50" : ""}`}
          >
            <div className="text-white text-4xl sm:text-6xl">{stat.icon}</div>

            <p className="text-white font-black text-2xl md:text-3xl leading-none font-['Barlow_Condensed',sans-serif]">
              {stat.prefix}
              <CountUp start={0} end={stat.value} duration={2.5} separator="," />
              {stat.suffix}
            </p>

            <p className="text-white/80 text-sm sm:text-base font-normal leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}