import React from "react";
import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdOutlineEmail,
} from "react-icons/md";

export default function Contactform() {
  return (
    <section id="contact" className="bg-white py-14 px-6 md:px-16 lg:px-24 font1">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6  max-w-7xl mx-auto items-start">

        {/* ── Left: Contact Info ── */}
        <div className="flex flex-col gap-4">
          <h4 className="text-color2  text-sm font-semibold">Contact Us</h4>

          <h2 className="font-black uppercase text-black text-3xl md:text-4xl leading-tight">
            Get In Touch With Us
          </h2>

          <p className="text-zinc-700 leading-relaxed">
            Backed by a strong legacy, Megamind delivers transparent processes
            and dependable study-abroad solutions focused on quality, safety,
            and long-term student success.
          </p>

          {/* Info cards */}
          <div className="flex flex-col gap-4 mt-1">
            {[
              {
                icon: <MdOutlineLocationOn />,
                label: "Our Location",
                lines: ["714, Plot No A26, Block B, alt f Mohan Cooperative Industrial Estate, New Delhi - 110044"],
                href: null,
              },
              {
                icon: <MdOutlinePhone />,
                label: "Phone Number",
                lines: ["+91 8595078896"],
                href: "tel:+918595078896",
              },
              {
                icon: <MdOutlineEmail />,
                label: "Email Address",
                lines: ["info@vincitedupath.com"],
                href: "mailto:info@vincitedupath.com",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl
                           hover:shadow-md hover:border-color4/30 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-color4 
                                flex items-center justify-center text-white text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest
                                text-color4  mb-1">
                    {item.label}
                  </p>
                  {item.lines.map((line, j) => (
                    item.href
                      ? <a key={j} href={item.href}
                        className=" text-zinc-700 hover:text-color4 
                                      transition-colors leading-relaxed">
                        {line}
                      </a>
                      : <p key={j} className="text-sm text-gray-600 leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7 md:p-8">
          <p className="text-color4  text-sm font-semibold mb-1 sm:mb-3">Let's Collaborate</p>
          <h2 className="font-black uppercase text-black text-2xl md:text-3xl leading-tight mb-6
">
            Send Us A Message
          </h2>

          <form
            method="POST"
            action="/contact.php"
            className="flex flex-col gap-3"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" name="name" placeholder="Your Name" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
                           bg-white outline-none focus:border-color4  placeholder:text-gray-400
                           transition-colors" />
              <input type="email" name="email" placeholder="Your Email" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
                           bg-white outline-none focus:border-color4  placeholder:text-gray-400
                           transition-colors" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="tel" name="phone" placeholder="Phone Number" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
                           bg-white outline-none focus:border-color4  placeholder:text-gray-400
                           transition-colors" />
              <input type="text" name="subject" placeholder="Subject" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
                           bg-white outline-none focus:border-color4  placeholder:text-gray-400
                           transition-colors" />
            </div>

            {/* Row 3: selects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" name="subject" placeholder="Country" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
                           bg-white outline-none focus:border-color4  placeholder:text-gray-400
                           transition-colors" />
              <input type="text" name="subject" placeholder="Course" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
                           bg-white outline-none focus:border-color4  placeholder:text-gray-400
                           transition-colors" />
            </div>

            {/* Textarea */}
            <textarea name="message" placeholder="Your Message" required rows={4}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm
                         bg-white outline-none focus:border-color4  placeholder:text-gray-400
                         transition-colors resize-none" />

            {/* Submit */}
            <button type="submit"
              className="w-max inline-flex items-center gap-2 bg-color4  hover:bg-color5
                         text-white font-bold uppercase text-sm tracking-wider
                         px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px
                         font-['Barlow_Condensed',sans-serif]">
              Submit Now
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center
                               justify-center text-base leading-none">›</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}