"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  geor, georflg, 
  kazak, kazakflg, 
  kyrg, kyrgflg, 
  rus, rusflg, 
  uzbe, uzbeflg 
} from "@/assets";
import { blogData } from "@/data/homeData";

// Icons
import { MdOutlineChat } from "react-icons/md";
import { FaChevronRight, FaDownload } from "react-icons/fa6";
import { FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

/* ─────────────────────────────────────────────
   Static Data
───────────────────────────────────────────── */
const country = [
  { id: 1, img: rus,   flag: rusflg,   heading: "Russia",     link: "/mbbs-abroad/mbbs-in-russia" },
  { id: 2, img: geor,  flag: georflg,  heading: "Georgia",    link: "/mbbs-abroad/mbbs-in-georgia" },
  { id: 3, img: kazak, flag: kazakflg, heading: "Kazakhstan",  link: "/mbbs-abroad/mbbs-in-kazakhstan" },
  { id: 4, img: uzbe,  flag: uzbeflg,  heading: "Uzbekistan",  link: "/mbbs-abroad/mbbs-in-uzbekistan" },
  { id: 5, img: kyrg,  flag: kyrgflg,  heading: "Kyrgyzstan",  link: "/mbbs-abroad/mbbs-in-kyrgyzstan" },
];

const services = [
  { id: 1, label: "University & Course Selection", href: "/services/university-course-selection" },
  { id: 2, label: "Country Selection",             href: "/services/country-selection" },
  { id: 3, label: "Selection & Profile Applications", href: "/services/selection-profile-applications" },
  { id: 4, label: "Interview Preparation",         href: "/services/interview-preparation" },
  { id: 5, label: "Visa Assistance",               href: "/services/visa-assistance" },
];

const inputFields = [
  { name: "name",     label: "Full Name",    type: "text",  icon: FaRegUserCircle,         placeholder: "John Doe" },
  { name: "phone",    label: "Phone Number", type: "tel",   icon: FiPhone,                 placeholder: "+1 (555) 000-0000" },
  { name: "email",    label: "Email Address",type: "email", icon: FiMail,                  placeholder: "john@example.com" },
  { name: "location", label: "Your Location",type: "text",  icon: FaLocationArrow,         placeholder: "City, Country" },
  { name: "subject",  label: "Subject",      type: "text",  icon: IoChatboxEllipsesOutline, placeholder: "How can we help?" },
];

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
function Aside() {
  const createSlug = (title: string): string =>
    title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return (
    <div className="space-y-8 max-w-md mx-auto lg:max-w-none">

      {/* ── Section 1 : Contact Form ── */}
      <form className="bg-white rounded-3xl p-6 shadow-lg border border-zinc-100">
        <div className="mb-5">
          <h4 className="text-xl font-bold text-zinc-900 tracking-tight">Quick Inquiry</h4>
        </div>

        <div className="space-y-4">
          {/* First 4 inputs in 2-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            {inputFields.slice(0, 4).map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.name} className="space-y-1.5">
                  <label className="block text-zinc-700 font-medium text-xs sm:text-sm">
                    {field.label}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                      <Icon size={16} />
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-zinc-50/60 rounded-xl text-zinc-800 placeholder-zinc-400 transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-color5/10 focus:border-color5 border border-zinc-200/80 text-sm"
                      required
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subject — Full Width */}
          {inputFields.slice(4).map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.name} className="space-y-1.5">
                <label className="block text-zinc-700 font-medium text-xs sm:text-sm">
                  {field.label}
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                    <Icon size={16} />
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-50/60 rounded-xl text-zinc-800 placeholder-zinc-400 transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-color5/10 focus:border-color5 border border-zinc-200/80 text-sm"
                    required
                  />
                </div>
              </div>
            );
          })}

          {/* Message */}
          <div className="space-y-1.5">
            <label className="block text-zinc-700 font-medium text-xs sm:text-sm">
              Message
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-3.5 text-zinc-400 pointer-events-none">
                <MdOutlineChat size={17} />
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us more about your inquiry..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-50/60 rounded-xl text-zinc-800 placeholder-zinc-400 transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-color5/10 focus:border-color5 border border-zinc-200/80 resize-none text-sm"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl py-3 text-sm font-semibold bg-color5 text-white shadow-md shadow-color5/10 transition-all duration-200 hover:bg-color2 hover:shadow-lg hover:shadow-color5/20 active:scale-[0.99]"
          >
            Submit Request
          </button>
        </div>
      </form>

      {/* ── Section 2 : Latest Blogs ── */}
      <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-lg">
        <h4 className="mb-4 text-lg font-bold text-color5 tracking-tight">
          Latest Insights & Blogs
        </h4>
        <div className="space-y-3">
          {blogData?.blog.slice(0, 3).map((blog: any, index: number) => (
            <Link
              key={index}
              href={`/blogs/${createSlug(blog?.heading || "")}`}
              title={blog?.heading}
              className="group block"
            >
              <div className="relative bg-zinc-50/50 rounded-2xl border border-zinc-100/80 p-2 transition-all duration-300 hover:bg-white hover:border-color5/30 hover:shadow-md">
                <div className="flex gap-3 items-center">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100">
                    <Image
                      src={blog?.img}
                      alt={blog?.heading}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-semibold text-zinc-800 line-clamp-2 leading-snug transition-colors duration-200 group-hover:text-color5">
                      {blog?.heading}
                    </h5>
                    <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-color5 uppercase tracking-wider">
                      <span>Read More</span>
                      <FaChevronRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 3 : Services We Offer ── */}
      <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-lg">
        <h4 className="mb-4 text-lg font-bold text-color5 tracking-tight">
          Services We Offer
        </h4>
        <ul className="space-y-2.5">
          {services.map((service) => (
            <li key={service.id}>
              <Link 
                href={service.href} 
                className="group flex items-center justify-between p-3.5 rounded-xl bg-zinc-50/50 hover:bg-blue-50/40 border border-zinc-100/70 hover:border-blue-100 transition-all duration-200"
              >
                <span className="text-sm font-medium text-zinc-700 transition-colors duration-200 group-hover:text-color2">
                  {service.label}
                </span>
                <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-zinc-200/50 text-zinc-500 transition-all duration-200 group-hover:bg-color5 group-hover:text-white">
                  <FaChevronRight className="text-[10px]" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Section 4 : Study Destinations ── */}
      <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-lg">
        <h4 className="mb-4 text-lg font-bold text-color5 tracking-tight">
          Study Destinations
        </h4>
        <div className="grid grid-cols-1 gap-2.5">
          {country.map((c) => (
            <Link 
              key={c.id}
              href={c.link} 
              className="group flex items-center gap-3 p-3 rounded-xl bg-zinc-50/50 hover:bg-zinc-900 hover:text-white border border-zinc-100/80 transition-all duration-300"
            >
              {/* Flag Circle */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-zinc-200 shadow-sm">
                <Image src={c.flag} alt={c.heading} fill className="object-cover" />
              </div>
              {/* Destination Text */}
              <p className="flex-1 text-sm font-semibold text-zinc-800 transition-colors duration-200 group-hover:text-white">
                MBBS in {c.heading}
              </p>
              <div className="text-zinc-400 transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5">
                <FaChevronRight className="text-[10px]" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 5 : Download Brochure ── */}
      <button
        type="button"
        className="group relative w-full flex items-center justify-center gap-3.5 rounded-2xl py-4 font-bold text-white bg-color5 hover:bg-color5 shadow-xl transition-all duration-300 active:scale-[0.99]"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
          <FaDownload className="text-sm" />
        </div>
        <span className="text-sm tracking-wide">Download Official Brochure</span>
      </button>

    </div>
  );
}

export default Aside;