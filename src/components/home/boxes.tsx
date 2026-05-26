import React from 'react'
import { FaGlobeAmericas, FaUserGraduate } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const boxesData = [
  {
    icon: <FaGlobeAmericas />,
    bg: 'bg-orange-500 ',   // orange — e.g. #E07A2F
    para: 'Study at globally recognized medical universities with modern infrastructure, experienced faculty, practical training, and internationally accepted degrees that open career opportunities across different healthcare systems worldwide.',
  },
  {
    icon: <FaUserGraduate />,
    bg: 'bg-color4',   // sky blue — e.g. #2196C9
    para: 'Get access to quality MBBS education abroad at affordable tuition fees while enjoying modern campuses, comfortable hostels, and student-friendly environments without compromising educational standards.',
  },
  {
    icon: <IoMdCheckmarkCircleOutline />,
    bg: 'bg-color3',   // green
    para: 'From career guidance and university selection to visa assistance and travel support, Vincit Edupath helps students through every stage of the MBBS abroad admission journey with complete transparency and support.',
  },
]

export default function Homeboxes() {
  return (
    <section className="w-full relative z-20 -mt-20 md:-mt-28 p-6">
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:rounded-2xl overflow-hidden  sm:grid-cols-3">
        {boxesData.map((box, index) => (
          <div
            key={index}
            className={`
              ${box.bg}
              relative overflow-hidden
              flex flex-col gap-5 p-5  sm:p-7 
              group
              transition-transform duration-300 ease-out
              hover:-translate-y-1
              hover:shadow-2xl
              !z-50
            `}
          >
            {/* Decorative shapes */}

            {/* Large circle — bottom right */}
            <span
              className="
                pointer-events-none absolute -bottom-14 -right-12
                w-44 h-44 rounded-full
                bg-white/[0.08]
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
            />

            {/* Medium circle — top right */}
            <span
              className="
                pointer-events-none absolute -top-6 -right-6 
                w-28 h-28 rotate-45
                bg-white/10
                transition-transform duration-500 ease-out
                group-hover:rotate-[360deg] group-hover:scale-125
              "
            />
 <span
              className="
                pointer-events-none absolute -top-0 -right-0 
                w-16 h-16 rotate-45
                bg-white/20
                transition-all duration-500 ease-out
                group-hover:rotate-[720deg] group-hover:scale-125
              "
            />
            {/* Small circle — left */}
            <span
              className="
                pointer-events-none absolute bottom-10 -left-3
                w-10 h-10 rounded-full
                bg-white/[0.10]
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
            />

            {/* Ring — bottom right */}
            <span
              className="
                pointer-events-none absolute -bottom-8 right-5
                w-24 h-24 rounded-full
                border-[18px] border-white/[0.10] bg-transparent
                transition-transform duration-500 ease-out
                group-hover:scale-125 group-hover:rotate-12
              "
            />

            {/* Icon circle */}
            <div
              className="
                relative z-10
                flex-shrink-0 w-14 h-14 rounded-full
                bg-white/20 border border-white/70
                flex items-center justify-center
                text-white text-2xl sm:text-3xl
                transition-all duration-300 ease-out
                group-hover:bg-white/35 group-hover:scale-110
              "
            >
              {box.icon}
            </div>

            {/* Animated divider */}
            <div
              className="
                relative z-10
                h-[3px] w-9 rounded-full bg-white/50
                transition-all duration-300 ease-out
                group-hover:w-14
              "
            />

            {/* Text */}
            <p
              className="
                relative z-10
                text-white font-normal text-sm  sm:text-base leading-relaxed
              "
            >
              {box.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}