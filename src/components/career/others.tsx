import Link from 'next/link';
import React from 'react';

export function SecondSection() {
  const benefits = [
    { num: "01", title: "Growth-Focused Work Environment", desc: "Work in a fast-growing education industry where learning, innovation, and professional growth are encouraged at every stage." },
    { num: "02", title: "Meaningful Student Impact", desc: "Help students and parents make important career decisions through proper counseling and trusted support." },
    { num: "03", title: "Supportive Team Culture", desc: "Be part of a collaborative work environment where teamwork, communication, and respect are valued." },
    { num: "04", title: "Opportunities To Learn & Grow", desc: "Gain industry exposure, improve professional skills, and grow your career with practical experience and training." },
    { num: "05", title: "Dynamic & Positive Workplace", desc: "Work with energetic teams in an environment focused on creativity, performance, and continuous improvement." }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Work With Vincit Edupath
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="block text-4xl font-black text-blue-600/20 mb-4 tracking-tight">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export function ThirdSection() {
  const eligibility = [
    "Passionate about education and student guidance",
    "Good communication and interpersonal skills",
    "Interested in counseling, admissions, or student support",
    "Comfortable working in a professional team environment",
    "Eager to learn and grow professionally"
  ];

  const skills = [
    "Strong communication skills",
    "Professional work approach",
    "Team collaboration abilities",
    "Student-focused mindset",
    "Problem-solving attitude",
    "Time management skills",
    "Willingness to learn and adapt"
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Who Can Apply */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Apply</h3>
            <ul className="space-y-4 pl-0 list-none">
              {eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold shrink-0 text-sm mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills We Value */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills We Value</h3>
            <ul className="space-y-4 pl-0 list-none">
              {skills.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold shrink-0 text-sm mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}


export function FourthSection() {
  const roles = [
    { num: "01", title: "Student Counselor", desc: "Guide students about MBBS abroad opportunities, university options, admissions, and career pathways." },
    { num: "02", title: "Admission Executive", desc: "Handle student applications, documentation, follow-ups, and admission-related processes." },
    { num: "03", title: "Visa Assistance Executive", desc: "Support students with visa documentation, application procedures, and travel-related guidance." },
    { num: "04", title: "Digital Marketing Executive", desc: "Manage online campaigns, content planning, social media activities, and brand communication." },
    { num: "05", title: "Business Development Associate", desc: "Connect with students, partners, and institutions to help expand educational opportunities and services." }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Career Opportunities At Vincit Edupath
          </h2>
        </div>

        <div className="space-y-4">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-500 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors pt-1">
                  {role.num}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                    {role.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FifthSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Life At Vincit */}
          <div className="flex flex-col justify-between p-8 sm:p-10 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Life At Vincit Edupath
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We believe a positive workplace creates better results. Our work culture encourages teamwork, learning, creativity, and career growth while maintaining a healthy and professional environment for every team member.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-400">
              Vincit Edupath Team Culture
            </div>
          </div>

          {/* Internship Opportunities */}
          <div className="flex flex-col justify-between p-8 sm:p-10 bg-blue-50/60 border border-blue-100 rounded-2xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Internship Opportunities
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  Students and fresh graduates looking for industry exposure can also apply for internships in counseling, marketing, operations, and student support roles.
                </p>
                <p>
                  Internships provide practical experience, professional mentorship, and opportunities to build real-world skills.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-blue-100 pt-4 text-xs text-blue-600 font-semibold uppercase tracking-wider">
              Fresh Graduates Welcome
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function SixthSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-color5 to-color4 rounded-3xl p-8 sm:p-12 shadow-xl text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Join Our Team
          </h3>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-blue-100 mb-8 leading-relaxed">
            If you are passionate about helping students and building a meaningful career in the education industry, Vincit Edupath would love to hear from you. Send your updated resume and career details through our Contact Page or official communication channels.
          </p>
          <div>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-color5 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-sm duration-150 hover:scale-[1.02]"
            >
              Contact Us / Send Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}