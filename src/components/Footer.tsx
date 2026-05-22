"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { logo2 } from "@/assets";
import { footData } from "@/data/homeData";

import { FiArrowUpRight } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/918595078896"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110">
          <RiWhatsappFill className="text-2xl sm:text-3xl lg:text-4xl" />
        </div>
      </a>

      <footer className="relative overflow-hidden bg-[#101828] text-white lg:px-20 px-5">
        <div className=" mx-auto grid lg:grid-cols-[1.1fr_2fr]">

          {/* LEFT */}
          <div className="bg-[#1b2233] p-5 sm:p-8 md:p-14  flex flex-col justify-between">

            <div>
              {/* Logo */}
              <Link href="/">
                <Image
                  src={logo2}
                  alt="logo"
                  className="w-[150px] sm:w-[180px] md:w-[220px] object-contain"
                />
              </Link>

              {/* Contact */}
              <div className="gap-y-4 sm:gap-y-8 flex flex-wrap justify-between mt-8 sm:mt-12">

                {footData?.contact?.map((item, index) => (
                  <div key={index}>
                    <p className="text-zinc-400 text-sm sm:text-base mb-1 font-medium">
                      {item?.label}
                    </p>

                    <a
                      href={item?.href}
                      className="text-sm sm:text-base  font-semibold hover:text-color2 transition-all duration-300 break-all"
                    >
                      {item?.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 sm:mt-12 ">

              {/* <h4 className="text-lg font-semibold mb-4">
                Social Links
              </h4> */}

              <div className="flex gap-2 sm:gap-3">

                {footData?.social?.map((item, index) => (
                  <a
                    key={index}
                    href={item?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-white/5 text-base sm:text-lg text-white transition-all duration-300 hover:bg-color2 hover:-translate-y-1"
                  >
                    {item?.icon || item?.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-6 sm:p-14 ">

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4">

              {/* Dynamic Footer Links */}
              {footData?.links?.map((section, index) => (
                <div key={index}>
                  
                  <h3 className="text-lg sm:text-xl font-bold ">
                    {section?.label}
                  </h3>

                  <div className="h-[2px] w-16 sm:w-20 bg-white/30 my-3"></div>

                  <ul className="space-y-2 ">
                    {section?.nav?.map((item) => (
                      <li key={item?.id}>
                        <Link
                          href={item?.href}
                          className="text-sm  text-zinc-300 transition-all duration-300 hover:text-color2 hover:translate-x-1 inline-block"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Newsletter */}
              <div className="sm:col-span-2 md:col-span-1">

                <h3 className="text-lg sm:text-xl font-bold ">
                  Newsletter
                </h3>

                <div className="h-[2px] w-16 sm:w-20 bg-white/30 mt-3 mb-6"></div>

                {/* Input */}
                <div className="flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">

                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent px-4 sm:px-5 py-3.5 text-sm sm:text-base text-white placeholder:text-zinc-400 outline-none"
                  />

                  <button className="flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center bg-white/5 text-lg sm:text-xl transition-all duration-300 hover:bg-color2">
                    <FiArrowUpRight />
                  </button>
                </div>

                {/* Checkbox */}
                <div className="mt-4 sm:mt-5 flex items-start gap-2.5 sm:gap-3">

                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded border-white/20 bg-transparent shrink-0"
                  />

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    I agree to the{" "}

                    <Link
                      href="/privacy-policy"
                      className="font-semibold text-white underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5">

              <p className="text-zinc-400 text-xs sm:text-sm text-center sm:text-left">
                © 2026 Vincit Edupath. All Rights Reserved.
              </p>

              <p className="text-zinc-500 text-xs sm:text-sm text-center sm:text-left">
                Designed By{" "}

                <span className="text-white font-medium">
                  Skyward Digital Solutions
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}