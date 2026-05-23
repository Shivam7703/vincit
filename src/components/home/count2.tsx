"use client";
import CountUp from "react-countup";

const stats = [
  { value: 5, suffix: "+ yrs", separator: ",", label: "experience" },
  { value: 1200, suffix: "+", separator: ",", label: "Students Counselled" },
  { value: 50,  suffix: "+", separator: ",", label: "Tie Ups" },
  { value: 500,    suffix: "+", separator: "",  label: "Students Admission" },
];

export default function Count2() {
  return (
    <section className="bg-white py-12 px-6 text-center font1">

      {/* Title */}
      <h2 className="font-black uppercase text-zinc-900 text-lg sm:text-2xl 
                     max-w-4xl mx-auto leading-snug mb-5 sm:mb-14
                     ">
        Connecting Students With Global Medical Education Opportunities Through Trusted Expert Guidance 
      </h2>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto divide-x divide-zinc-400">
        {stats.map((s, i) => (
          <div key={i} className="px-6 py-4">
            <p className="text-color4 font-black text-xl md:text-3xl leading-none mb-2
                          font-['Barlow_Condensed',sans-serif]">
              <CountUp
                start={0}
                end={s.value}
                duration={2.5}
                separator={s.separator}
              />
              {s.suffix}
            </p>
            <p className="text-gray-800 text-base md:text-lg">{s.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}