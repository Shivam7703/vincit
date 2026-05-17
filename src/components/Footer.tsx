"use client";
import React, { useState } from "react";


import { RiWhatsappFill } from "react-icons/ri";

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
