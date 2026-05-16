import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData as data } from "@/data/homeData";

export default function Blogs() {
  return (
    <section id="blogs" className="bg-white py-14 px-6 md:px-16 lg:px-24 font1 text-center">

      {/* Header */}
      <h4 className="text-color3 text-sm font-bold mb-2 tracking-[0.22em]">News &amp; Blog</h4>
      <h2 className="font-black uppercase text-black text-2xl md:text-4xl md:mb-14 mb-6
                   ">
        Read Our Latest<br />News &amp; Blogs
      </h2>

      {/* 3-col equal cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
                      max-w-6xl mx-auto text-left">
        {data.blogs.slice(0, 3).map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md
                       hover:-translate-y-1 transition-transform duration-300 group"
          >
            {/* Image + date badge */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Green date badge — top-left */}
              <div className="absolute top-3 left-3 bg-color3 text-white
                              rounded px-2.5 py-1.5 text-center min-w-[44px]">
                <p className="font-black text-xl leading-none
                               font-['Barlow_Condensed',sans-serif]">
                  {new Date(post.date).getDate()}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wide">
                  {new Date(post.date).toLocaleString("default", { month: "short" })}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <h3 className="font-bold text-base text-gray-900 leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                {post.text}
              </p>

              {/* Read More */}
              <Link
                href={`/blogs/${post.title
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, "")
                  .trim()
                  .replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-2 text-sm font-semibold
                           text-gray-900 hover:text-color3 transition-colors"
              >
                Read More
                <span className="w-6 h-6 rounded-full bg-color3 flex items-center
                                  justify-center text-white text-base leading-none">
                  ›
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}