import React from 'react'
import { FaGlobeAmericas, FaUserGraduate } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const boxesData = [
  {
    icon: <FaGlobeAmericas />,
    bg: 'bg-color2',   // orange
    para: 'Study at internationally accredited medical universities offering advanced infrastructure, experienced faculty, practical clinical exposure, and globally accepted medical degrees designed to support long-term career opportunities in healthcare across multiple countries and medical systems.',
  },
  {
    icon: <FaUserGraduate />,
    bg: 'bg-color1',   // sky blue
    para: 'Pursue MBBS abroad at significantly lower tuition fees compared to many private colleges while gaining access to quality education, modern campuses, hostel facilities, and student-friendly living environments without compromising academic standards.',
  },
  {
    icon: <IoMdCheckmarkCircleOutline />,
    bg: 'bg-[#E6C020]',   // golden yellow
    para: 'From career counseling and university selection to visa processing and travel guidance, Vincit Edupath provides end-to-end support throughout your MBBS abroad journey, ensuring a smooth, transparent, and stress-free admission experience for students and parents.',
  },
]

export default function Homeboxes() {
  return (
    <section className="w-full font1">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {boxesData.map((box, index) => (
          <div
            key={index}
            className={`${box.bg} flex flex-row items-start gap-4 p-7`}
          >
            {/* Avatar circle */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl">
              {box.icon}
            </div>

            {/* Text */}
            <p className="text-white font-semibold text-xs sm:text-sm leading-relaxed">
              {box.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}