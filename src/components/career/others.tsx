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
    <section className="py-20 md:py-28 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Vincit Culture</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Why Work With Vincit Edupath
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 sm:p-10 bg-white rounded-3xl border border-gray-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-500 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-tr-3xl -z-10 group-hover:from-blue-50/40 transition-colors duration-500" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center font-mono text-sm font-bold text-gray-400 group-hover:bg-gray-950 group-hover:text-white transition-all duration-500 mb-8 shadow-inner">
                  {item.num}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight group-hover:text-gray-950">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
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
    <section className="py-20 bg-white border-y border-gray-100/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Who Can Apply */}
          <div className="p-8 sm:p-10 bg-gray-50/50 rounded-3xl border border-gray-100/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 rounded-full bg-emerald-500" />
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Who Can Apply</h3>
            </div>
            <ul className="space-y-4 pl-0 list-none">
              {eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm sm:text-base text-gray-600 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 font-bold shrink-0 text-xs mt-0.5 border border-emerald-100">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills We Value */}
          <div className="p-8 sm:p-10 bg-gray-50/50 rounded-3xl border border-gray-100/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 rounded-full bg-blue-500" />
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Skills We Value</h3>
            </div>
            <ul className="space-y-4 pl-0 list-none">
              {skills.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm sm:text-base text-gray-600 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-50 text-blue-600 font-bold shrink-0 text-xs mt-0.5 border border-blue-100">✓</span>
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
    <section className="py-20 md:py-28 bg-[#fcfcfd]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Now Hiring</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Career Opportunities At Vincit Edupath
          </h2>
        </div>

        <div className="space-y-4">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-100/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)] hover:border-gray-300 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-base font-mono font-bold text-gray-300 group-hover:text-gray-900 transition-colors duration-300 pt-1">
                  {role.num}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-2xl font-medium">
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Life At Vincit */}
          <div className="relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-gray-900 via-slate-900 to-slate-950 text-white rounded-3xl shadow-xl shadow-slate-950/5">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-5">
                Life At Vincit Edupath
              </h3>
              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-medium">
                We believe a positive workplace creates better results. Our work culture encourages teamwork, learning, creativity, and career growth while maintaining a healthy and professional environment for every team member.
              </p>
            </div>
            <div className="mt-12 border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs text-slate-400 font-mono tracking-wider">
              <span>TEAM CULTURE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* Internship Opportunities */}
          <div className="relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 bg-blue-50/30 border border-blue-100/50 rounded-3xl">
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-5">
                Internship Opportunities
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                <p>
                  Students and fresh graduates looking for industry exposure can also apply for internships in counseling, marketing, operations, and student support roles.
                </p>
                <p>
                  Internships provide practical experience, professional mentorship, and opportunities to build real-world skills.
                </p>
              </div>
            </div>
            <div className="mt-12 border-t border-blue-100/50 pt-4 text-xs text-blue-600 font-bold uppercase tracking-widest font-mono">
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-color5 to-color4 rounded-[2rem] p-10 sm:p-16 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)] text-white text-center">
          {/* Subtle Decorative Ambient Lighting */}
          <div className="absolute top-0 left-1/4 w-72 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Join Our Team
            </h3>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 mb-10 leading-relaxed font-medium">
              If you are passionate about helping students and building a meaningful career in the education industry, Vincit Edupath would love to hear from you. Send your updated resume and career details through our Contact Page or official communication channels.
            </p>
            <div>
              <Link 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-color5 bg-white hover:bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us / Send Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}