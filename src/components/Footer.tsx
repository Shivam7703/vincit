"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiWhatsappFill } from "react-icons/ri";
import { logo2 as logo, logo as logo2 } from "@/assets";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        className="w-max fixed bottom-8 z-50 right-3 rounded-full bg-white"
        href="#"
      >
        <RiWhatsappFill className="text-5xl text-green-600" />
      </a>

      {/* Book Site Visit Button */}
      {/* <div
        style={{
          padding: "7px 10px 23px",
          transform: "rotate(-90deg)",
          right: "10px",
          top: "35vh",
          zIndex: 40,
          width: "200px",
          transformOrigin: "right center",
        }}
        className="cursor-pointer rounded-lg  text-white hover:bg-black fixed text-center bg-color2 font-medium text-lg"
        onClick={toggleForm}
      >
        Book A Site Visit
      </div> */}

      {/* Modal Form */}
      {/* {showForm && (
        <div
          className="fixed top-0 left-0 z-[230] font1 flex flex-col items-center justify-center bg-black/70"
          style={{ width: "100vw", height: "104vh" }}
        >
          <div
            className="text-white mb-2 cursor-pointer border-2 border-white rounded-full px-3 py-1"
            onClick={toggleForm}
          >
            ✕
          </div>
          <form
            className="bg-zinc-100 p-7 rounded-lg shadow-lg w-[90vw] max-w-[600px]"
            action={"/contact.php"}
            method="POST"
          >
            <div className="flex items-center justify-between mb-5">
              <Image
                src={logo2}
                alt="VincitEdupath"
                width={150}
                height={80}
                className="mr-3 w-[25vw] max-w-[150px]"
              />
              <h2 className="text-xl sm:text-2xl text-color2 font-bold w-max">
                Book A Site Visit
              </h2>
            </div>

            <div className="w-full flex flex-wrap gap-y-3 justify-between">
              <input
                type="text"
                required
                name="name"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Name"
              />
              <input
                type="email"
                required
                name="email"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Email"
              />
              <input
                type="number"
                required
                name="phone"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Contact No."
              />
              <textarea
                rows={3}
                name="message"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Query"
              ></textarea>
              <button
                type="submit"
                className="bg-color2 hover:bg-black transition duration-300 text-white font-bold py-3 px-6 rounded-lg mt-2"
              >
                Submit Now &nbsp;→
              </button>
            </div>
          </form>
        </div>
      )} */}

      {/* Footer Section */}
      <footer className="md:p-8 s p-6 w-full z-20 text-white bg-zinc-900 relative">
     
        {/* Copyright */}
        <div className="flex text-center">
          <p className="w-max mx-auto text-sm">
              &copy; {new Date().getFullYear()} Vincit Edupath. All rights reserved. Designed & Managed by{" "}
            <span className="hover:text-color2 transition-all font-semibold cursor-pointer">
              <a href="https://skywarddigitalsolutions.com">
                Skyward Digital Solutions
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
